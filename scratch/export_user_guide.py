import os
import re

MD_PATH = "/Users/nitinagga/.gemini/jetski/brain/ced10084-64bb-4a43-b1e9-15eb6e9e9fb4/user_guide.md"
HTML_PATH = "/Users/nitinagga/Documents/pharma-dossier-ge/scratch/user_guide.html"

def parse_markdown_pure(md_content):
    html_lines = []
    in_list = False
    in_code_block = False
    code_block_content = []
    in_table = False
    table_rows = []
    
    # Normalize newlines
    lines = md_content.replace('\r\n', '\n').split('\n')
    
    for line in lines:
        stripped = line.strip()
        
        # 1. Handle Code Blocks
        if stripped.startswith("```"):
            if in_code_block:
                in_code_block = False
                code_content = "\n".join(code_block_content)
                html_lines.append(f"<pre><code>{code_content}</code></pre>")
                code_block_content = []
            else:
                in_code_block = True
            continue
            
        if in_code_block:
            # Escape HTML entities in code blocks
            escaped = line.replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;')
            code_block_content.append(escaped)
            continue
            
        # 2. Handle Tables
        if stripped.startswith("|"):
            # Skip separator rows like |---|---|
            if re.match(r'^\|[\s\-\|]+$', stripped):
                continue
            in_table = True
            cells = [c.strip() for c in stripped.split("|")[1:-1]]
            table_rows.append(cells)
            continue
        else:
            if in_table:
                in_table = False
                # Construct HTML Table
                table_html = ["<table>"]
                for idx, row in enumerate(table_rows):
                    tag = "th" if idx == 0 else "td"
                    row_html = ["  <tr>"]
                    for cell in row:
                        # Parse bold and code inside table cells
                        parsed_cell = re.sub(r'\*\*(.*?)\*\*', r'<strong>\1</strong>', cell)
                        parsed_cell = re.sub(r'`(.*?)`', r'<code>\1</code>', parsed_cell)
                        row_html.append(f"    <{tag}>{parsed_cell}</{tag}>")
                    row_html.append("  </tr>")
                    table_html.append("\n".join(row_html))
                table_html.append("</table>")
                html_lines.append("\n".join(table_html))
                table_rows = []
                
        # 3. Handle Lists
        if stripped.startswith("* ") or stripped.startswith("- "):
            if not in_list:
                in_list = True
                html_lines.append("<ul>")
            content = stripped[2:]
            # Parse inline markdown (bold, code, links)
            parsed = re.sub(r'\*\*(.*?)\*\*', r'<strong>\1</strong>', content)
            parsed = re.sub(r'`(.*?)`', r'<code>\1</code>', parsed)
            parsed = re.sub(r'\[(.*?)\]\((.*?)\)', r'<a href="\2" style="color:#4f46e5; text-decoration:none;">\1</a>', parsed)
            html_lines.append(f"  <li>{parsed}</li>")
            continue
        else:
            if in_list:
                in_list = False
                html_lines.append("</ul>")
                
        # 4. Handle Blockquotes & Alerts
        if stripped.startswith(">"):
            # Parse alerts like > [!IMPORTANT]
            alert_match = re.match(r'^>\s*\[\!(.*?)\]', stripped)
            if alert_match:
                alert_type = alert_match.group(1)
                html_lines.append(f'<div style="margin: 20px 0; padding: 16px; border-left: 4px solid #4f46e5; background-color: #f5f7ff; border-radius: 0 12px 12px 0;"><strong style="color:#4f46e5; text-transform: uppercase; font-size:12px; letter-spacing:1px;">{alert_type}</strong><br/>')
            else:
                content = stripped[1:].strip()
                parsed = re.sub(r'\*\*(.*?)\*\*', r'<strong>\1</strong>', content)
                parsed = re.sub(r'`(.*?)`', r'<code>\1</code>', parsed)
                parsed = re.sub(r'\[(.*?)\]\((.*?)\)', r'<a href="\2" style="color:#4f46e5; text-decoration:none;">\1</a>', parsed)
                # If inside alert box
                if len(html_lines) > 0 and html_lines[-1].startswith('<div style="margin: 20px 0; padding: 16px;'):
                    html_lines.append(f'<p style="margin: 8px 0 0 0; font-weight: 500; color: #1e1b4b;">{parsed}</p></div>')
                else:
                    html_lines.append(f'<blockquote style="margin: 20px 0; padding: 16px; border-left: 4px solid #4f46e5; background-color: #eff6ff; border-radius: 0 12px 12px 0;"><p style="margin: 0; font-weight: 500; color: #1e40af;">{parsed}</p></blockquote>')
            continue
            
        # 5. Handle Headings
        heading_match = re.match(r'^(#{1,6})\s+(.*?)$', stripped)
        if heading_match:
            level = len(heading_match.group(1))
            heading_text = heading_match.group(2)
            heading_text = re.sub(r'\*\*(.*?)\*\*', r'<strong>\1</strong>', heading_text)
            html_lines.append(f"<h{level}>{heading_text}</h{level}>")
            continue
            
        # 6. Handle Horizontal Rules
        if stripped == "---":
            html_lines.append("<hr/>")
            continue
            
        # 7. Handle Regular Paragraphs
        if stripped:
            parsed = re.sub(r'\*\*(.*?)\*\*', r'<strong>\1</strong>', stripped)
            parsed = re.sub(r'`(.*?)`', r'<code>\1</code>', parsed)
            parsed = re.sub(r'\[(.*?)\]\((.*?)\)', r'<a href="\2" style="color:#4f46e5; text-decoration:none;">\1</a>', parsed)
            html_lines.append(f"<p>{parsed}</p>")
            
    return "\n".join(html_lines)

def convert_md_to_html():
    if not os.path.exists(MD_PATH):
        print(f"Error: User Guide markdown not found at {MD_PATH}")
        return
        
    with open(MD_PATH, 'r', encoding='utf-8') as f:
        md_content = f.read()
        
    print("Parsing Markdown via zero-dependency Python parser...")
    html_content = parse_markdown_pure(md_content)
    
    # Wrap in premium CSS styling
    styled_html = f"""<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Pharma Dossier Harmonizer User Guide</title>
    <style>
        body {{
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
            line-height: 1.6;
            color: #1e293b;
            max-width: 900px;
            margin: 40px auto;
            padding: 0 24px;
            background-color: #f8fafc;
        }}
        .container {{
            background-color: #ffffff;
            padding: 40px;
            border-radius: 16px;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
            border: 1px solid #e2e8f0;
        }}
        h1 {{
            font-size: 2.2em;
            color: #0f172a;
            border-bottom: 2px solid #4f46e5;
            padding-bottom: 12px;
            margin-top: 0;
        }}
        h2 {{
            font-size: 1.6em;
            color: #1e1b4b;
            margin-top: 36px;
            border-bottom: 1px solid #e2e8f0;
            padding-bottom: 8px;
        }}
        h3 {{
            font-size: 1.2em;
            color: #4f46e5;
            margin-top: 24px;
        }}
        p, li {{
            font-size: 15px;
            color: #334155;
        }}
        code {{
            background-color: #f1f5f9;
            padding: 3px 6px;
            border-radius: 6px;
            font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
            font-size: 0.9em;
            color: #0f172a;
        }}
        pre {{
            background-color: #0f172a;
            padding: 16px;
            border-radius: 12px;
            overflow-x: auto;
            border: 1px solid #1e293b;
        }}
        pre code {{
            background-color: transparent;
            color: #f8fafc;
            padding: 0;
            border-radius: 0;
        }}
        table {{
            width: 100%;
            border-collapse: collapse;
            margin: 24px 0;
            font-size: 14px;
            text-align: left;
        }}
        th {{
            background-color: #f8fafc;
            color: #0f172a;
            font-weight: 600;
            padding: 12px 16px;
            border-bottom: 2px solid #e2e8f0;
        }}
        td {{
            padding: 12px 16px;
            border-bottom: 1px solid #f1f5f9;
            color: #475569;
        }}
        tr:hover td {{
            background-color: #f8fafc;
        }}
        blockquote {{
            margin: 20px 0;
            padding: 16px;
            border-left: 4px solid #4f46e5;
            background-color: #eff6ff;
            border-radius: 0 12px 12px 0;
        }}
        blockquote p {{
            margin: 0;
            font-weight: 500;
            color: #1e40af;
        }}
        hr {{
            border: 0;
            border-top: 1px solid #e2e8f0;
            margin: 32px 0;
        }}
    </style>
</head>
<body>
    <div class="container">
        {html_content}
    </div>
</body>
</html>
"""
    
    with open(HTML_PATH, 'w', encoding='utf-8') as f:
        f.write(styled_html)
        
    print(f"✓ Successfully converted and exported User Guide to beautiful HTML:")
    print(f"📂 {HTML_PATH}")
    print("\nTo export to Google Docs or MS Word:")
    print("1. Double-click the HTML file in Finder to open it in Chrome/Safari.")
    print("2. Press Cmd + A to select all contents, then Cmd + C to copy.")
    print("3. Create a new Google Doc or Word doc, and press Cmd + V to paste.")
    print("This preserves 100% of all headers, styled tables, code formatting, and premium colors!")

if __name__ == "__main__":
    convert_md_to_html()
