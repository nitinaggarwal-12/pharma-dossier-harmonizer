"use client";

import React, { useState, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';

// Import react-pdf styles for text layer and annotations
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';

// Dynamically import react-pdf components with SSR disabled
const Document = dynamic(() => import('react-pdf').then(mod => mod.Document), { ssr: false });
const Page = dynamic(() => import('react-pdf').then(mod => mod.Page), { ssr: false });

interface Dossier {
  name: string;
  file: string;
  module: string;
  status: string;
  date: string;
  ingredients: string[];
}

export default function Home() {
  const chatEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    import('react-pdf').then(({ pdfjs }) => {
      pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;
    });
  }, []);

  const [currentPage, setCurrentPage] = useState('Dashboard');
  const [dossiers, setDossiers] = useState<Dossier[]>([]);
  const [selectedDossier, setSelectedDossier] = useState<Dossier | null>(null);
  const [filter, setFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('keytruda');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  
  // State for Global Search
  const [globalSearchQuery, setGlobalSearchQuery] = useState('');
  const [globalSearchResults, setGlobalSearchResults] = useState<any>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [systemConsoleLogs, setSystemConsoleLogs] = useState([
    { timestamp: "12:00:00 PM", event: "💡 Control panel web application initialization success." },
    { timestamp: "12:00:02 PM", event: "⚙️ Connection bridged successfully to local FastAPI server on port 8080." }
  ]);
  const [recentActivitiesData, setRecentActivitiesData] = useState([
    { text: "📄 Droncit was approved by Nitin Aggarwal.", time: "2h ago", isWarning: false },
    { text: "⚠️ Numelvi flagged for stability gaps.", time: "5h ago", isWarning: true },
    { text: "📂 New dossier PyraMax uploaded.", time: "1d ago", isWarning: false }
  ]);
  
  const [chatHistory, setChatHistory] = useState<{ role: 'user' | 'agent', content: string }[]>([
    { role: 'agent', content: "Hello Nitin! I am your regulatory compliance assistant. Ask me follow-up questions about your staged dossier gaps!" }
  ]);

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [chatHistory]);
  const [chatInput, setChatInput] = useState('');
  const [chatLoading, setChatLoading] = useState(false);
  
  // State for Analysis Page
  const [selectedDossierName, setSelectedDossierName] = useState('');
  const [analysisTypes, setAnalysisTypes] = useState(['Compliance']);
  const [analysisResult, setAnalysisResult] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  
  // State for File Upload on Dossiers Page
  const [uploading, setUploading] = useState(false);
  const [uploadResult, setUploadResult] = useState<any>(null);
  const [customQuery, setCustomQuery] = useState('');
  
  // State for Cloud Staged selectors
  const [sourceFilesList, setSourceFilesList] = useState<string[]>([]);
  const [targetSpecsList, setTargetSpecsList] = useState<string[]>([]);
  const [selectedSourceFile, setSelectedSourceFile] = useState<string>('');
  const [selectedTargetSpec, setSelectedTargetSpec] = useState<string>('');
  const [isStagedSuccessfully, setIsStagedSuccessfully] = useState(false);
  
  // State for Table Actions
  const [openActionMenu, setOpenActionMenu] = useState<string | null>(null);
  const [selectedDossierIds, setSelectedDossierIds] = useState<string[]>([]);
  const [selectedCorrespondence, setSelectedCorrespondence] = useState<any>(null);
  const [correspondenceList, setCorrespondenceList] = useState([
    { id: "FDA-IR-001", date: "2025-05-15", authority: "FDA", type: "IR", subject: "Stability Data missing in 3.2.P.8", status: "Open", thread: [
      { sender: "FDA (Dr. Alice Chen)", time: "May 15, 09:00 AM", message: "Please provide the 6-month accelerated stability data for Batch 003. The current submission only includes data up to 3 months." },
      { sender: "BioPharma (Dr. Smith)", time: "May 16, 02:00 PM", message: "We are compiling the data. The testing was completed on May 10, and the report is being finalized. We expect to submit by May 22." }
    ]},
    { id: "EMA-RTF-002", date: "2025-05-10", authority: "EMA", type: "RTF", subject: "Missing signature on Form 1", status: "Responded", thread: [
      { sender: "EMA (Validation Team)", time: "May 10, 11:30 AM", message: "The submission is invalid because Form 1 is missing the digital signature of the authorized representative." },
      { sender: "BioPharma (Regulatory)", time: "May 12, 09:15 AM", message: "We have attached the signed Form 1. Please resume validation." }
    ]},
    { id: "FDA-IR-003", date: "2025-05-01", authority: "FDA", type: "IR", subject: "Manufacturing site inspection", status: "Overdue", thread: [
      { sender: "FDA (Facility Branch)", time: "May 01, 04:00 PM", message: "We require clarification on the floor plan of the manufacturing site listed in 3.2.P.3. The submitted diagram is low resolution." }
    ]}
  ]);
  const [isValidating, setIsValidating] = useState(false);
  const [validationResult, setValidationResult] = useState<any>(null);
  const [isGeneratingXML, setIsGeneratingXML] = useState(false);
  const [xmlResult, setXmlResult] = useState('');
  const [isStatusModalOpen, setIsStatusModalOpen] = useState(false);
  const [selectedStatusType, setSelectedStatusType] = useState<string | null>(null);
  const [selectedStatusFileName, setSelectedStatusFileName] = useState<string | null>(null);
  const [copiedTemplate, setCopiedTemplate] = useState<string | null>(null);
  const [selectedGuideline, setSelectedGuideline] = useState<any>(null);
  const [dossierA, setDossierA] = useState('');
  const [dossierB, setDossierB] = useState('');
  const [logFilterUser, setLogFilterUser] = useState('All');
  const [logFilterResult, setLogFilterResult] = useState('All');
  const [treeSearchQuery, setTreeSearchQuery] = useState('');
  const [searchRegion, setSearchRegion] = useState('FDA');

  const [auditLogsData, setAuditLogsData] = useState([
    { timestamp: "2025-05-20 10:15:23", user: "Nitin Aggarwal", action: "Status Change: Pending -> Approved", target: "Dossier: Droncit", result: "Success" },
    { timestamp: "2025-05-20 09:30:11", user: "System", action: "Text Flag: Missing stability data in 3.2.P.8", target: "File: Numelvi", result: "Warning" },
    { timestamp: "2025-05-19 14:22:05", user: "Dr. Smith", action: "Field Edit: Updated reply in thread", target: "Correspondence: FDA-IR-001", result: "Success" },
    { timestamp: "2025-05-19 11:05:42", user: "Nitin Aggarwal", action: "File Creation: Initial upload", target: "File: PyraMax.pdf", result: "Success" },
  ]);

  const [ectdTreeData, setEctdTreeData] = useState([
    {
      name: "Module 1: Administrative Information",
      isFolder: true,
      children: [
        { name: "1.1 Forms (FDA 356h).pdf", isFolder: false, size: "1.2 MB", status: "Completed" },
        { name: "1.2 Cover Letters.pdf", isFolder: false, size: "200 KB", status: "Completed" },
        { name: "1.3 Administrative Information.pdf", isFolder: false, size: "800 KB", status: "Completed" },
        { name: "1.14 Labeling.pdf", isFolder: false, size: "4.5 MB", status: "Completed" },
      ]
    },
    {
      name: "Module 2: CTD Summaries",
      isFolder: true,
      children: [
        { name: "2.2 Introduction.pdf", isFolder: false, size: "500 KB", status: "Completed" },
        { name: "2.3 Quality Overall Summary.pdf", isFolder: false, size: "5.4 MB", status: "Completed" },
        { name: "2.4 Nonclinical Overview.pdf", isFolder: false, size: "3.1 MB", status: "Completed" },
        { name: "2.5 Clinical Overview.pdf", isFolder: false, size: "4.2 MB", status: "In Progress" },
        { name: "2.6 Nonclinical Summary.pdf", isFolder: false, size: "6.7 MB", status: "Completed" },
        { name: "2.7 Clinical Summary.pdf", isFolder: false, size: "8.1 MB", status: "Pending" },
      ]
    },
    {
      name: "Module 3: Quality",
      isFolder: true,
      children: [
        {
          name: "3.2.S Drug Substance",
          isFolder: true,
          children: [
            { name: "General Information.pdf", isFolder: false, size: "1.5 MB", status: "Completed" },
            { name: "Manufacture.pdf", isFolder: false, size: "3.2 MB", status: "Completed" },
            { name: "Characterization.pdf", isFolder: false, size: "2.8 MB", status: "Completed" },
            { name: "Stability.pdf", isFolder: false, size: "5.1 MB", status: "Completed" },
          ]
        },
        {
          name: "3.2.P Drug Product",
          isFolder: true,
          children: [
            { name: "Description and Composition.pdf", isFolder: false, size: "2.1 MB", status: "Completed" },
            { name: "Pharmaceutical Development.pdf", isFolder: false, size: "4.2 MB", status: "In Review" },
            { name: "Manufacture.pdf", isFolder: false, size: "3.5 MB", status: "Completed" },
            { name: "Stability.pdf", isFolder: false, size: "8.5 MB", status: "Pending" },
          ]
        }
      ]
    },
    {
      name: "Module 4: Nonclinical Study Reports",
      isFolder: true,
      children: [
        {
          name: "4.2 Study Reports",
          isFolder: true,
          children: [
            { name: "Pharmacology.pdf", isFolder: false, size: "12.4 MB", status: "Completed" },
            { name: "Pharmacokinetics.pdf", isFolder: false, size: "15.2 MB", status: "Completed" },
            { name: "Toxicology.pdf", isFolder: false, size: "22.1 MB", status: "In Review" },
          ]
        }
      ]
    },
    {
      name: "Module 5: Clinical Study Reports",
      isFolder: true,
      children: [
        {
          name: "5.3 Clinical Study Reports",
          isFolder: true,
          children: [
            { name: "Biopharmaceutic Studies.pdf", isFolder: false, size: "18.5 MB", status: "Completed" },
            { name: "Human PK Studies.pdf", isFolder: false, size: "25.1 MB", status: "Completed" },
            { name: "Efficacy and Safety Studies.pdf", isFolder: false, size: "45.2 MB", status: "In Progress" },
          ]
        }
      ]
    }
  ]);
  
  const [plannerTasks, setPlannerTasks] = useState([
    { name: "Draft Module 3", start: 1, end: 4, status: "Completed", deps: "-" },
    { name: "Stability Testing", start: 2, end: 8, status: "In Progress", deps: "-" },
    { name: "Medical Writing", start: 5, end: 7, status: "Pending", deps: "Draft Module 3" },
    { name: "QA Review", start: 8, end: 10, status: "Pending", deps: "Medical Writing" },
    { name: "FDA Submission", start: 11, end: 12, status: "Pending", deps: "QA Review" },
  ]);
  
  // State for inline expansion in other pages
  const [openTemplate, setOpenTemplate] = useState<string | null>(null);
  const [openGuideline, setOpenGuideline] = useState<string | null>(null);
  const [openResearch, setOpenResearch] = useState<string | null>(null);
  const [numPages, setNumPages] = useState<number | null>(null);
  const [visiblePage, setVisiblePage] = useState(1);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  useEffect(() => {
    const container = document.querySelector('.pdf-container');
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const pageNum = parseInt(entry.target.getAttribute('data-page-number') || '1', 10);
            setVisiblePage(pageNum);
          }
        });
      },
      { threshold: 0.5, root: container }
    );

    const mutationObserver = new MutationObserver(() => {
      const elements = container.querySelectorAll('.pdf-page');
      elements.forEach((el) => observer.observe(el));
    });

    mutationObserver.observe(container, { childList: true, subtree: true });

    const elements = container.querySelectorAll('.pdf-page');
    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, [numPages]);
  
  // Resilient sandbox mount clean-up hook! Clears stuck loading states instantly on mount.
  useEffect(() => {
    setChatLoading(false);
    setChatHistory(prev => prev.filter(msg => !msg.content.includes("analyzing") && !msg.content.includes("Analyzing")));
  }, []);

  useEffect(() => {
    fetch(`/api/dossiers?_cb=${Date.now()}`, {
      headers: { 'X-API-Key': 'biopharma-secret-key-12345' }
    })
    .then(res => res.json())
    .then(data => {
      if (Array.isArray(data)) {
        setDossiers(data);
      } else {
        console.error("Failed to fetch dossiers or invalid data:", data);
        setDossiers([]);
      }
    })
    .catch(err => console.error("Failed to fetch dossiers:", err));
  }, []);
  useEffect(() => {
    fetch(`/api/files/dossiers?_cb=${Date.now()}`, {
      headers: { 'X-API-Key': 'biopharma-secret-key-12345' }
    })
    .then((res) => res.json())
    .then((data) => {
      if (Array.isArray(data)) {
        setSourceFilesList(data);
        if (data.length > 0) setSelectedSourceFile(data[0]);
      }
    })
    .catch((err) => console.error("Failed to fetch dossiers:", err));
  }, []);

  useEffect(() => {
    fetch(`/api/files/specifications?_cb=${Date.now()}`, {
      headers: { 'X-API-Key': 'biopharma-secret-key-12345' }
    })
    .then((res) => res.json())
    .then((data) => {
      if (Array.isArray(data)) {
        setTargetSpecsList(data);
        if (data.length > 0) setSelectedTargetSpec(data[0]);
      }
    })
    .catch((err) => console.error("Failed to fetch specs:", err));
  }, []);

  // Auto-stage selections whenever they change dynamically!
  useEffect(() => {
    if (selectedSourceFile && selectedTargetSpec) {
      console.log("Automatically staged selections:", selectedSourceFile, selectedTargetSpec);
      setSystemConsoleLogs(prev => [
        ...prev,
        { timestamp: new Date().toLocaleTimeString(), event: `✓ Auto-staged context: Staged ${selectedSourceFile} & Standard ${selectedTargetSpec}` }
      ]);
      setIsStagedSuccessfully(true);
      setTimeout(() => setIsStagedSuccessfully(false), 1500);
    }
  }, [selectedSourceFile, selectedTargetSpec]);
  
  // Auto-run search when page changes to External Research
  useEffect(() => {
    if (currentPage === 'External Research' && searchQuery) {
      handleSearch();
    }
  }, [currentPage]);
  
  const handleSearch = () => {
    fetch(`/api/search?q=${searchQuery}&region=${searchRegion}`, {
      headers: { 'X-API-Key': 'biopharma-secret-key-12345' }
    })
    .then(res => res.json())
    .then(data => {
      if (searchRegion === 'EMA') {
        setSearchResults([{ drug_name: `${searchQuery.toUpperCase()} (EMA)`, active_ingredient: "Simulated Ingredient", form: "TABLET", strength: "10 MG" }]);
      } else {
        setSearchResults(data);
      }
    })
    .catch(err => console.error("Search failed:", err));
  };
  
  const handleGlobalSearch = (query: string) => {
    setGlobalSearchQuery(query);
    if (!query) {
      setGlobalSearchResults(null);
      return;
    }
    
    const results: any = {
      dossiers: dossiers.filter(d => d.name.toLowerCase().includes(query.toLowerCase())),
      templates: [
        { name: "Module 3.2.P Template" },
        { name: "Module 3.2.S Template" },
        { name: "Module 2.3 Summary Template" },
        { name: "Module 2.5 Clinical Overview Template" },
        { name: "Module 4: Non-Clinical Reports Template" },
        { name: "Module 5: Clinical Study Reports Template" },
        { name: "FDA Form 356h Template" }
      ].filter(t => t.name.toLowerCase().includes(query.toLowerCase())),
      guidelines: [
        { name: "ICH M4Q: The CTD — Quality" },
        { name: "FDA Guidance: Controlled Correspondence" },
        { name: "ICH Q1A(R2): Stability Testing" },
        { name: "ICH E6(R2): Good Clinical Practice" },
        { name: "FDA Guidance: ANDA Submissions" }
      ].filter(g => g.name.toLowerCase().includes(query.toLowerCase()))
    };
    
    if (query.length > 2) {
      fetch(`/api/search?q=${query}`, {
        headers: { 'X-API-Key': 'biopharma-secret-key-12345' }
      })
      .then(res => res.json())
      .then(data => {
        results.fda = data;
        setGlobalSearchResults(results);
      })
      .catch(err => {
        console.error(err);
        setGlobalSearchResults(results);
      });
    } else {
      setGlobalSearchResults(results);
    }
  };
  
  const handleRunAnalysis = () => {
    setIsAnalyzing(true);
    fetch('/api/analyze', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'X-API-Key': 'biopharma-secret-key-12345'
      },
      body: JSON.stringify({
        dossier_name: selectedDossierName,
        analysis_types: analysisTypes
      })
    })
    .then(res => res.json())
    .then(data => {
      const fullText = data.response;
      let currentText = '';
      let index = 0;
      
      const interval = setInterval(() => {
        if (index < fullText.length) {
          currentText += fullText[index];
          setAnalysisResult(currentText);
          index++;
        } else {
          clearInterval(interval);
          setIsAnalyzing(false);
        }
      }, 5);
    })
    .catch(err => {
      console.error("Analysis failed:", err);
      setIsAnalyzing(false);
    });
  };
  
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const parseMarkdownToHtml = (md: string) => {
    let html = md;
    // Replace bold
    html = html.replace(/\*\*(.*?)\*\*/g, '<b style="font-weight: 700; color: #1E1B4B;">$1</b>');
    // Replace sub-bullets
    html = html.replace(/^\s*\*\s+(.*?)$/gm, '<li style="margin-left: 16px; margin-bottom: 4px; list-style-type: circle; color: #475569;">$1</li>');
    // Replace main bullets
    html = html.replace(/^\*\s+(.*?)$/gm, '<li style="margin-left: 8px; margin-top: 6px; margin-bottom: 6px; list-style-type: disc; font-weight: 600; color: #1E293B;">$1</li>');
    // Replace double newlines with paragraphs
    html = html.replace(/\n\n/g, '</div><div style="margin-top: 8px;">');
    // Replace newlines
    html = html.replace(/\n/g, '<br/>');
    return `<div>${html}</div>`;
  };

  const handleChatSubmit = () => {
    if (!chatInput.trim()) return;
    const userMsg = chatInput;
    setChatHistory(prev => [...prev, { role: 'user', content: userMsg }]);
    setChatInput('');
    setChatLoading(true);
    
    const formData = new FormData();
    formData.append('custom_query', userMsg);
    if (selectedSourceFile) {
      formData.append('source_file', selectedSourceFile);
    }
    if (selectedTargetSpec) {
      formData.append('target_spec', selectedTargetSpec);
    }
    if (selectedFile) {
      formData.append('file', selectedFile);
    }
    if (selectedGuideline) {
      formData.append('selected_guideline', selectedGuideline.name);
    }
    
    fetch('/api/upload', {
      method: 'POST',
      headers: { 
        'X-API-Key': 'biopharma-secret-key-12345'
      },
      body: formData
    })
    .then(res => res.json())
    .then(data => {
      if (data.status === 'success') {
        const reportContent = data.report || data.response || "No audit report generated.";
        setChatHistory(prev => [...prev, { role: 'agent', content: reportContent }]);
      } else {
        setChatHistory(prev => [...prev, { role: 'agent', content: `Error: ${data.error || data.response || 'Failed to process request.'}` }]);
      }
      setChatLoading(false);
    })
    .catch(err => {
      setChatHistory(prev => [...prev, { role: 'agent', content: `Fetch failed: ${err.message}` }]);
      setChatLoading(false);
    });
  };

  const handleStageSelection = () => {
    if (!selectedSourceFile || !selectedTargetSpec) {
      alert("Please select both a staged dossier and a specification standard first!");
      return;
    }
    console.log("Actively captured staged files:", selectedSourceFile, selectedTargetSpec);
    setSystemConsoleLogs(prev => [
      ...prev,
      { timestamp: new Date().toLocaleTimeString(), event: `✓ Actively captured context: Staged ${selectedSourceFile} & Standard ${selectedTargetSpec}` }
    ]);
    setIsStagedSuccessfully(true);
    setTimeout(() => setIsStagedSuccessfully(false), 3000);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setSelectedFile(file);
  };

  const handleUploadSubmit = () => {
    if (!selectedSourceFile && !selectedTargetSpec && !selectedFile) return;
    
    setUploading(true);
    const formData = new FormData();
    if (selectedSourceFile) {
      formData.append('source_file', selectedSourceFile);
    }
    if (selectedTargetSpec) {
      formData.append('target_spec', selectedTargetSpec);
    }
    if (selectedFile) {
      formData.append('file', selectedFile);
    }
    if (customQuery) {
      formData.append('custom_query', customQuery);
    }
    if (selectedGuideline) {
      formData.append('selected_guideline', selectedGuideline.name);
    }
    
    fetch('/api/upload', {
      method: 'POST',
      headers: { 
        'X-API-Key': 'biopharma-secret-key-12345'
      },
      body: formData
    })
    .then(res => res.json())
    .then(data => {
      setUploadResult(data);
      setSelectedDossierName(selectedSourceFile ? selectedSourceFile.replace(".pdf", "").replace(".md", "") : (selectedFile ? selectedFile.name.replace(".pdf", "") : "m3-dp-description.md"));
      setUploading(false);
      
      if (data.status === 'success' && data.report) {
        if (customQuery) {
          setChatHistory(prev => [
            ...prev,
            { role: 'user', content: customQuery },
            { role: 'agent', content: data.report }
          ]);
          setCustomQuery('');
        } else {
          const stagedName = selectedSourceFile ? selectedSourceFile : (selectedFile ? selectedFile.name : 'm3-dp-description.md');
          setChatHistory(prev => [
            ...prev,
            { role: 'agent', content: `I have successfully staged and processed your file **${stagedName}**. I am ready to answer any compliance questions, validate sections, or check for regulatory gaps!` }
          ]);
        }
      }
      
      // Live UAT UI System Console traces update
      setSystemConsoleLogs(prev => [
        { timestamp: new Date().toLocaleTimeString(), event: `📂 Ingestion process initialized over uploaded dossier manual: ${selectedFile ? selectedFile.name : 'Pre-staged Cloud GCS context'}` },
        { timestamp: new Date().toLocaleTimeString(), event: `⚙️ Document AI API proxy call complete. Extraction strategy: ${data.message}` },
        ...prev
      ]);
      // Live UAT UI Activity updates
      setRecentActivitiesData(prev => [
        { text: `📂 New dossier manual ${selectedFile ? selectedFile.name : 'Pre-staged Cloud GCS context'} uploaded by user.`, time: "Just now", isWarning: false },
        ...prev
      ]);
      setAuditLogsData(prev => [
        { 
          timestamp: new Date().toISOString().replace('T', ' ').substring(0, 19), 
          user: "System (Document AI Ingestion)", 
          action: "File upload character extraction complete", 
          target: `File: ${selectedFile ? selectedFile.name : 'Pre-staged Cloud GCS context'}`, 
          result: data.status === 'success' ? "Success" : "Warning" 
        },
        ...prev
      ]);
    })
    .catch(err => {
      console.error("Upload failed:", err);
      setUploading(false);
    });
  };

  const handleRunValidation = () => {
    setIsValidating(true);
    fetch('/api/validate', {
      method: 'POST'
    })
    .then(res => res.json())
    .then(data => {
      if (data.status === 'success') {
        setValidationResult({ status: 'success', message: data.message || "Conventions matched successfully." });
        // Live UAT UI update: if validation passes, set all sub-leaf items status tags to COMPLETED
        setEctdTreeData(prev => prev.map(mod => ({
          ...mod,
          children: mod.children.map((child: any) => ({ ...child, status: "Completed" }))
        })));
        // Live UAT UI System Console traces update
        setSystemConsoleLogs(prev => [
          { timestamp: new Date().toLocaleTimeString(), event: `🛡️ Technical eCTD packages validations loop complete. Results: ${data.message}` },
          ...prev
        ]);
        // Live UAT UI Audit update: append validation scan transaction record
        setAuditLogsData(prev => [
          { 
            timestamp: new Date().toISOString().replace('T', ' ').substring(0, 19), 
            user: "System (eCTD Directory Inspector)", 
            action: "Conventions package technical structure check complete", 
            target: "Folder tree layout seed package", 
            result: "Success" 
          },
          ...prev
        ]);
      } else {
        setValidationResult({ 
          status: 'error', 
          message: data.message || data.error || "Conventions mismatch or internal exception occurred." 
        });
        // Live UAT UI update: if validation fails on missing paths, flag Module 1 leaf elements as PENDING
        setEctdTreeData(prev => prev.map(mod => {
          if (mod.name.includes("Module 1")) {
            return {
              ...mod,
              children: mod.children.map((child: any) => ({ ...child, status: "Pending" }))
            };
          }
          return mod;
        }));
        // Live UAT UI System Console traces update
        setSystemConsoleLogs(prev => [
          { timestamp: new Date().toLocaleTimeString(), event: `✖ Gaps audit validations trigger failed! Message: ${data.message || data.error}` },
          ...prev
        ]);
        // Live UAT UI Audit update: append validations error transaction record
        setAuditLogsData(prev => [
          { 
            timestamp: new Date().toISOString().replace('T', ' ').substring(0, 19), 
            user: "System (eCTD Directory Inspector)", 
            action: "Technical structure checks gaps audit fail", 
            target: "Folder tree layout seed package", 
            result: "Warning" 
          },
          ...prev
        ]);
      }
      setIsValidating(false);
    })
    .catch(err => {
      console.error("Validation failed:", err);
      setValidationResult({ status: 'error', message: "Connectivity broken to validation engines." });
      setIsValidating(false);
    });
  };

  const handleTaskChange = (name: string, field: string, value: number) => {
    setPlannerTasks(plannerTasks.map(t => 
      t.name === name ? { ...t, [field]: value } : t
    ));
  };

  const handleGenerateXML = () => {
    setIsGeneratingXML(true);
    setTimeout(() => {
      setXmlResult(`<?xml version="1.0" encoding="UTF-8"?>
<document xmlns="urn:hl7-org:v3">
  <id root="2.16.840.1.113883.3.989.1.1.1" extension="12345"/>
  <code code="34391-3" displayName="HUMAN PRESCRIPTION DRUG LABEL"/>
  <title>Prescription Drug Label for BioPharma Product</title>
</document>`);
      setIsGeneratingXML(false);
    }, 2000);
  };
  
  const filteredDossiers = dossiers.filter(d => {
    if (filter === 'All') return true;
    if (filter === 'Completed') return d.status === 'Completed';
    if (filter === 'In Progress') return d.status === 'In Progress' || d.status === 'In Review';
    if (filter === 'Issues') return d.status === 'Pending';
    return true;
  });
  
  const completedCount = dossiers.filter(d => d.status === 'Completed').length;
  const inProgressCount = dossiers.filter(d => d.status === 'In Progress' || d.status === 'In Review').length;
  const issuesCount = dossiers.filter(d => d.status === 'Pending').length;
  const totalDossiersCount = dossiers.length;
  const compliantPercent = totalDossiersCount > 0 ? Math.round((completedCount / totalDossiersCount) * 100) : 0;
  const flaggedPercent = totalDossiersCount > 0 ? Math.round((issuesCount / totalDossiersCount) * 100) : 0;
  
  const donutGradient = totalDossiersCount > 0 
    ? `conic-gradient(#10B981 0% ${compliantPercent}%, #EF4444 ${compliantPercent}% ${compliantPercent + flaggedPercent}%, #F59E0B ${compliantPercent + flaggedPercent}% 100%)`
    : `conic-gradient(#E2E8F0 0% 100%)`;

  const dynamicTasks = dossiers.map((d, idx) => ({
    id: `TASK-0${idx + 1}`,
    task: d.status === 'Completed' ? `Review compliance results for ${d.name}` : `Assess validation criteria for ${d.name}`,
    dossier: d.name,
    status: d.status === 'Completed' ? 'Completed' : 'In Progress',
    due: d.status === 'Completed' ? 'Completed' : 'Today'
  }));

  const dynamicActivities = dossiers.map(d => ({
    text: `📂 Dossier ${d.name} was successfully staged and processed.`,
    time: "Just now",
    isWarning: false
  }));

  const statusExplainers = {
    'Completed': {
      title: "🎉 Status: Completed (Compliant)",
      desc: "This section has successfully passed all technical and scientific compliance audits. All required accelerated stability data, impurity limits, and warnings are fully documented, validated, and locked in for submission.",
      lightColor: "bg-green-50 text-green-800 border-green-200"
    },
    'Pending': {
      title: "⚠️ Status: Pending (Gaps Identified)",
      desc: "This section is missing mandatory regulatory elements or contains technical folder layout issues. For example, Module 1 is missing required regional directories (e.g., 'm1/fda'), or Module 3 is missing 6-month accelerated stability data. Action is required to resolve these gaps.",
      lightColor: "bg-red-50 text-red-800 border-red-200"
    },
    'In Progress': {
      title: "⚙️ Status: In Progress (Authoring)",
      desc: "This section is currently being drafted, authored, or edited by your regulatory affairs team. The technical files are currently active and are not yet ready for a formal compliance audit.",
      lightColor: "bg-indigo-50 text-indigo-800 border-indigo-200"
    },
    'In Review': {
      title: "🔍 Status: In Review (Peer Review)",
      desc: "The report has been drafted and uploaded, but is currently undergoing medical safety or internal peer review. Toxicologists and clinical experts are verifying the safety margins and interpretations before final sign-off.",
      lightColor: "bg-amber-50 text-amber-800 border-amber-200"
    }
  };

  const navItems = [
    { name: 'Dashboard', icon: '📊' },
    { name: 'Dossiers', icon: '📂' },
    { name: 'Analysis', icon: '🚀' },
    { name: 'Correspondence', icon: '💬' },
    { name: 'Delta Analysis', icon: '⇄' },
    { name: 'Audit Trail', icon: '📜' },
    { name: 'Planner', icon: '📅' },
    { name: 'Templates', icon: '📄' },
    { name: 'Reference Library', icon: '📚' },
    { name: 'External Research', icon: '🔍' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex font-sans theme-dark-premium animate-fade-in-up" style={{ minHeight: '100vh' }}>
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-slate-200 flex flex-col z-10 shadow-sm">
        <div className="p-6 cursor-pointer" onClick={() => { setCurrentPage('Dashboard'); setSelectedDossier(null); setGlobalSearchQuery(''); setGlobalSearchResults(null); }}>
          <h1 className="text-xl font-bold text-slate-900 hover:text-indigo-600 transition-colors duration-200">BioPharma Analytics</h1>
          <p className="text-xs text-slate-500 font-medium">Secured Platform</p>
        </div>
        <nav className="flex-1 px-4 space-y-1">
          {navItems.map(item => (
            <button
              key={item.name}
              onClick={() => { 
                setCurrentPage(item.name); 
                setGlobalSearchQuery(''); 
                setGlobalSearchResults(null); 
                if (item.name === 'Dashboard') setSelectedDossier(null);
              }}
              className={`flex items-center px-3 py-2.5 text-sm font-medium rounded-lg w-full text-left transition-all duration-200 ${
                currentPage === item.name ? 'bg-indigo-50 text-indigo-600 shadow-sm' : 'text-slate-700 hover:bg-slate-50 hover:translate-x-0.5'
              }`}
            >
              <span className="mr-3 text-base">{item.icon}</span>
              {item.name}
            </button>
          ))}
        </nav>
        <div className="p-4 border-t border-slate-200 bg-slate-50">
          <div className="flex items-center">
            <div className="w-9 h-9 rounded-full bg-indigo-600 flex items-center justify-center text-sm font-semibold text-white shadow-sm">NA</div>
            <div className="ml-3">
              <p className="text-sm font-semibold text-slate-700">Nitin Aggarwal</p>
              <p className="text-xs text-slate-500 font-medium">Reviewer</p>
            </div>

          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header with Glassmorphism */}
        <header className="bg-white border-b border-slate-200 py-4 px-6 sticky top-0 z-20 shadow-sm flex justify-between items-center">
          <h2 className="text-lg font-bold text-slate-900 tracking-tight">{currentPage}</h2>
        </header>

        {/* Body */}
        <main className="flex-1 overflow-y-auto p-6 bg-slate-50">
          
          {/* DASHBOARD PAGE */}
          {currentPage === 'Dashboard' && (
            <div className="space-y-6 animate-fade-in">
              {/* KPI Grid with Elevation */}
              <div className="grid grid-cols-4 gap-6">
                <div onClick={() => setFilter('All')} className={`cursor-pointer p-4 bg-white rounded-xl border ${filter === 'All' ? 'border-indigo-600 ring-2 ring-indigo-100 shadow-md' : 'border-slate-200 shadow-sm'} hover:shadow-xl hover:scale-[1.02] transform transition-all duration-300 flex flex-col justify-between h-32 shadow-sm`}>
                  <div>
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Total Dossiers</p>
                    <p className="text-3xl font-bold text-slate-900 mt-1">{dossiers.length}</p>
                  </div>
                  <div className="h-10 w-full">
                    <svg className="w-full h-full" viewBox="0 0 100 30" preserveAspectRatio="none">
                      <path d="M 0 20 Q 25 5 50 15 T 100 5" fill="none" stroke="#6366F1" strokeWidth="2" className="path-animate" />
                      <path d="M 0 20 Q 25 5 50 15 T 100 5 L 100 30 L 0 30 Z" fill="#EEF2FF" opacity="0.5" />
                    </svg>
                  </div>
                </div>
                <div onClick={() => setFilter('Completed')} className={`cursor-pointer p-4 bg-white rounded-xl border ${filter === 'Completed' ? 'border-indigo-600 ring-2 ring-indigo-100 shadow-md' : 'border-slate-200 shadow-sm'} hover:shadow-xl hover:scale-[1.02] transform transition-all duration-300 flex flex-col justify-between h-32 shadow-sm`}>
                  <div>
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Compliant</p>
                    <p className="text-3xl font-bold text-slate-900 mt-1">{completedCount}</p>
                  </div>
                  <div className="h-10 w-full">
                    <svg className="w-full h-full" viewBox="0 0 100 30" preserveAspectRatio="none">
                      <path d="M 0 25 Q 25 10 50 5 T 100 20" fill="none" stroke="#10B981" strokeWidth="2" className="path-animate" />
                      <path d="M 0 25 Q 25 10 50 5 T 100 20 L 100 30 L 0 30 Z" fill="#DEF7EC" opacity="0.5" />
                    </svg>
                  </div>
                </div>
                <div onClick={() => setFilter('In Progress')} className={`cursor-pointer p-4 bg-white rounded-xl border ${filter === 'In Progress' ? 'border-indigo-600 ring-2 ring-indigo-100 shadow-md' : 'border-slate-200 shadow-sm'} hover:shadow-xl hover:scale-[1.02] transform transition-all duration-300 flex flex-col justify-between h-32 shadow-sm`}>
                  <div>
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">In Progress</p>
                    <p className="text-3xl font-bold text-slate-900 mt-1">{inProgressCount}</p>
                  </div>
                  <div className="h-10 w-full">
                    <svg className="w-full h-full" viewBox="0 0 100 30" preserveAspectRatio="none">
                      <path d="M 0 5 Q 25 20 50 10 T 100 25" fill="none" stroke="#3B82F6" strokeWidth="2" className="path-animate" />
                      <path d="M 0 5 Q 25 20 50 10 T 100 25 L 100 30 L 0 30 Z" fill="#DBEAFE" opacity="0.5" />
                    </svg>
                  </div>
                </div>
                <div onClick={() => setFilter('Issues')} className={`cursor-pointer p-4 bg-white rounded-xl border ${filter === 'Issues' ? 'border-indigo-600 ring-2 ring-indigo-100 shadow-md' : 'border-slate-200 shadow-sm'} hover:shadow-xl hover:scale-[1.02] transform transition-all duration-300 flex flex-col justify-between h-32 shadow-sm`}>
                  <div>
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Flagged Issues</p>
                    <p className="text-3xl font-bold text-slate-900 mt-1">{issuesCount}</p>
                  </div>
                  <div className="h-10 w-full">
                    <svg className="w-full h-full" viewBox="0 0 100 30" preserveAspectRatio="none">
                      <path d="M 0 25 Q 25 5 50 25 T 100 5" fill="none" stroke="#EF4444" strokeWidth="2" className="path-animate" />
                      <path d="M 0 25 Q 25 5 50 25 T 100 5 L 100 30 L 0 30 Z" fill="#FEE2E2" opacity="0.5" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Split Layout */}
              <div className="grid grid-cols-12 gap-6">
                {/* Left List */}
                <div className="col-span-5 space-y-6">
                  {/* My Tasks Card */}
                  <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                    <div className="p-4 border-b border-slate-200 bg-slate-50 flex justify-between items-center">
                      <h3 className="text-sm font-semibold text-slate-700">My Tasks</h3>
                      <span className="text-xs font-medium text-indigo-600">{dynamicTasks.length} active</span>
                    </div>
                    <div className="divide-y divide-slate-100 overflow-y-auto max-h-[200px]">
                      {dynamicTasks.length > 0 ? (
                        dynamicTasks.map(t => (
                          <div 
                            key={t.id} 
                            onClick={() => {
                              setCurrentPage('Dossiers');
                              setSelectedDossierName(t.dossier);
                            }}
                            className="p-3 hover:bg-slate-50 cursor-pointer transition-colors duration-150"
                          >
                            <div className="flex justify-between items-center">
                              <span className="text-sm font-semibold text-slate-900 hover:text-indigo-600">{t.task}</span>
                              <span className={`badge ${t.status === 'Completed' ? 'badge-completed' : 'badge-progress'}`}>
                                {t.status}
                              </span>
                            </div>
                            <div className="flex justify-between text-xs text-slate-500 mt-1.5">
                              <span>Dossier: {t.dossier}</span>
                              <span>{t.due}</span>
                            </div>
                          </div>
                        ))
                      ) : (
                        <div className="p-8 text-center text-slate-500">
                          <div className="text-3xl mb-2">🎯</div>
                          <p className="text-sm font-semibold text-slate-700">All caught up!</p>
                          <p className="text-xs text-slate-400 mt-0.5 font-medium">Staged dossiers have no pending compliance tasks.</p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Active Dossiers Card */}
                  <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
                    <div className="p-4 border-b border-slate-200 bg-slate-50 flex justify-between items-center">
                      <h3 className="text-sm font-semibold text-slate-700">Active Dossiers ({filter})</h3>
                      <span className="text-xs font-medium text-slate-500">{filteredDossiers.length} items</span>
                    </div>
                  <div className="divide-y divide-slate-100 overflow-y-auto max-h-[500px]">
                    {filteredDossiers.map((d, idx) => (
                      <div 
                        key={`${d.file}_${idx}`} 
                        onClick={() => setSelectedDossier(d)} 
                        className={`p-4 cursor-pointer hover:bg-slate-50 transition-colors duration-150 ${selectedDossier?.file === d.file ? 'bg-indigo-50 border-l-4 border-indigo-600' : ''}`}
                      >
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-semibold text-slate-900">{d.name}</span>
                          <span className={`badge ${
                            d.status === 'Completed' ? 'badge-completed' : 
                            d.status === 'In Progress' || d.status === 'In Review' ? 'badge-progress' : 'badge-pending'
                          }`}>
                            {d.status}
                          </span>
                        </div>
                        <div className="flex justify-between text-xs text-slate-500 mt-1.5">
                          <span className="font-mono">ID: {d.file.substring(0, 15)}...</span>
                          <span>{d.date}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

                {/* Right Panel - Google Style Fullness */}
                <div className="col-span-7 bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                  <div className="p-4 border-b border-slate-200 bg-slate-50">
                    <h3 className="text-sm font-semibold text-slate-700">{selectedDossier ? "Analysis Report" : "Global Submission Status"}</h3>
                  </div>
                  <div className="p-6">
                    {selectedDossier ? (
                      <div className="space-y-6 animate-fade-in">
                        <div>
                          <h3 className="text-lg font-bold text-slate-900">{selectedDossier.name}</h3>
                          <p className="text-xs font-mono text-slate-500 mt-0.5">File ID: {selectedDossier.file}</p>
                        </div>
                        
                        {/* Rich Verification Checklist */}
                        <div className="p-4 bg-white rounded-lg border border-slate-200 shadow-sm">
                          <div className="flex justify-between items-center mb-2">
                            <h4 className="text-sm font-semibold text-slate-700">Verification Checklist</h4>
                            <span className="text-xs font-medium text-indigo-600">{selectedDossier.status === 'Completed' ? '100%' : '70%'} Complete</span>
                          </div>
                          <div className="w-full bg-slate-100 rounded-full h-1.5">
                            <div className="bg-indigo-600 h-1.5 rounded-full transition-all duration-500" style={{ width: selectedDossier.status === 'Completed' ? '100%' : '70%' }}></div>
                          </div>
                          <ul className="text-xs mt-3 space-y-2.5 text-slate-600">
                            <li className="flex items-center"><span className="text-green-500 mr-2 font-bold">✓</span> Clinical Data (7/8)</li>
                            <li className="flex items-center"><span className="text-green-500 mr-2 font-bold">✓</span> CMC Section (6/10)</li>
                            <li className="flex items-center"><span className="text-green-500 mr-2 font-bold">✓</span> Labeling (5/5)</li>
                            <li className="flex items-center">
                              {selectedDossier.status === 'Completed' ? (
                                <span className="text-green-500 mr-2 font-bold">✓</span>
                              ) : (
                                <span className="text-amber-500 mr-2 font-bold">⚠</span>
                              )}
                              Preclinical Data ({selectedDossier.status === 'Completed' ? 'Verified' : 'Missing 6-mo data'})
                            </li>
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="text-sm font-semibold text-slate-700">Extracted Ingredients</h4>
                          <p className="text-sm text-slate-600 mt-1.5 p-3 bg-slate-50 rounded-lg border border-slate-200 font-medium">
                            {selectedDossier.ingredients.length > 0 ? selectedDossier.ingredients.join(', ') : 'None extracted'}
                          </p>
                        </div>

                        <hr className="border-slate-200" />

                        {/* Pure CSS Donut Chart */}
                        <div>
                          <h4 className="text-sm font-semibold text-slate-700 mb-3">Document Status Breakdown</h4>
                          <div className="flex items-center justify-around">
                            <div 
                              className="w-24 h-24 rounded-full shadow-inner" 
                              style={{ 
                                background: 'conic-gradient(#10B981 0% 60%, #EF4444 60% 85%, #F59E0B 85% 100%)',
                                position: 'relative'
                              }}
                            >
                              <div className="absolute inset-4 bg-white rounded-full flex items-center justify-center shadow-sm">
                                <span className="text-xs font-bold text-slate-900">{selectedDossier.status === 'Completed' ? '100%' : '70%'}</span>
                              </div>
                            </div>
                            <div className="text-xs space-y-1.5 font-medium text-slate-600">
                              <div className="flex items-center"><span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span> Compliant (60%)</div>
                              <div className="flex items-center"><span className="w-3 h-3 bg-red-500 rounded-full mr-2"></span> Non-Compliant (25%)</div>
                              <div className="flex items-center"><span className="w-3 h-3 bg-amber-500 rounded-full mr-2"></span> Review (15%)</div>
                            </div>
                          </div>
                        </div>

                        <hr className="border-slate-200" />

                        {/* Timeline */}
                        <div>
                          <h4 className="text-sm font-semibold text-slate-700 mb-3">Submission Timeline</h4>
                          <div className="flex items-center text-xs text-slate-500 font-medium">
                            <div className="flex flex-col items-center">
                              <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-white text-xs shadow-sm">✓</div>
                              <span className="mt-1">Draft</span>
                            </div>
                            <div className="flex-1 h-0.5 bg-green-500 mx-2"></div>
                            <div className="flex flex-col items-center">
                              <div className="w-5 h-5 bg-indigo-600 rounded-full flex items-center justify-center text-white text-xs shadow-sm">2</div>
                              <span className="mt-1 font-medium text-indigo-600">Review</span>
                            </div>
                            <div className="flex-1 h-0.5 bg-slate-200 mx-2"></div>
                            <div className="flex flex-col items-center">
                              <div className="w-5 h-5 bg-slate-200 rounded-full flex items-center justify-center text-slate-600 text-xs shadow-sm">3</div>
                              <span className="mt-1">Submit</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      /* Rich Empty State for Dashboard (Google Style) */
                      <div className="space-y-6 animate-fade-in">
                        <div>
                          <h3 className="text-lg font-bold text-slate-900">Global Submission Status</h3>
                          <p className="text-xs text-slate-500 font-medium">Overview across all {totalDossiersCount} active dossiers.</p>
                        </div>
                        
                        {/* Large Donut Chart */}
                        <div className="flex justify-center py-6">
                          <div 
                            className="w-32 h-32 rounded-full shadow-inner" 
                            style={{ 
                              background: donutGradient,
                              position: 'relative'
                            }}
                          >
                            <div className="absolute inset-5 bg-white rounded-full flex flex-col items-center justify-center shadow-sm">
                              <span className="text-2xl font-bold text-slate-900">{compliantPercent}%</span>
                              <span className="text-xs font-medium text-slate-500">Compliant</span>
                            </div>
                          </div>
                        </div>
                        
                        {/* Legend */}
                        <div className="grid grid-cols-3 gap-2 text-xs text-center border-b border-slate-100 pb-6 font-medium text-slate-600 font-sans">
                          <div><span className="block w-3 h-3 bg-green-500 rounded-full mx-auto mb-1.5"></span> Compliant ({completedCount})</div>
                          <div><span className="block w-3 h-3 bg-red-500 rounded-full mx-auto mb-1.5"></span> Flagged ({issuesCount})</div>
                          <div><span className="block w-3 h-3 bg-amber-500 rounded-full mx-auto mb-1.5"></span> Review ({inProgressCount})</div>
                        </div>
                        
                        {/* Recent Activity */}
                        <div>
                          <h4 className="text-sm font-semibold text-slate-700 mb-3">Recent Activity</h4>
                          {dynamicActivities.length > 0 ? (
                            <ul className="text-xs space-y-3.5 text-slate-600 font-medium">
                              {dynamicActivities.map((act, idx) => (
                                <li key={idx} className="flex justify-between items-center">
                                  <span>{act.text}</span>
                                  <span className="text-slate-400 text-xs">{act.time}</span>
                                </li>
                              ))}
                            </ul>
                          ) : (
                            <div className="text-center text-slate-400 py-6 text-xs font-medium">No recent activities logged.</div>
                          )}
                        </div>

                        {/* ⚙️ live System background Console logs widget */}
                        <div className="mt-4 p-4 bg-slate-950 text-slate-300 rounded-xl font-mono text-xs space-y-2 border border-slate-800 shadow-inner terminal-scan">
                          <p className="text-indigo-400 font-bold flex items-center border-b border-slate-800 pb-1.5 tracking-wide">
                            ⚙️ Live System Ingestion Console
                          </p>
                          <div className="space-y-1.5 overflow-y-auto max-h-[120px] pr-1 leading-relaxed">
                            {systemConsoleLogs.map((log, i) => (
                              <div key={i} className="flex items-start space-x-1.5">
                                <span className="text-slate-500 font-sans font-medium flex-shrink-0">[{log.timestamp}]</span>
                                <span className="text-slate-200 break-all">{log.event}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* DOSSIERS PAGE */}
          {currentPage === 'Dossiers' && (
            <div className="space-y-6 animate-fade-in">
              {/* File Uploader with Elevation */}
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-200 space-y-4">
                <div className="flex flex-col md:flex-row md:items-end md:space-x-4 space-y-4 md:space-y-0">
                  <div className="flex-1">
                    <label className="block text-xs font-bold text-slate-500 uppercase mb-1.5">📁 Select Source Dossier (GCS Bucket)</label>
                    <select 
                      value={selectedSourceFile} 
                      onChange={(e) => setSelectedSourceFile(e.target.value)} 
                      className="w-full p-2.5 border border-slate-200 rounded-lg text-xs text-slate-800 focus:ring-2 focus:ring-indigo-50 focus:border-indigo-500 bg-slate-50 font-medium"
                    >
                      <option value="">-- Select Staged Dossier --</option>
                      {sourceFilesList.map(f => (
                        <option key={f} value={f}>{f}</option>
                      ))}
                    </select>
                  </div>
                  <div className="flex-1">
                    <label className="block text-xs font-bold text-slate-500 uppercase mb-1.5">📚 Select Target Standard Specification</label>
                    <select 
                      value={selectedTargetSpec} 
                      onChange={(e) => setSelectedTargetSpec(e.target.value)} 
                      className="w-full p-2.5 border border-slate-200 rounded-lg text-xs text-slate-800 focus:ring-2 focus:ring-indigo-50 focus:border-indigo-500 bg-slate-50 font-medium"
                    >
                      <option value="">-- Select Specification Standard --</option>
                      {targetSpecsList.map(s => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                  <div className="flex-shrink-0 flex items-center">
                    {selectedSourceFile && selectedTargetSpec ? (
                      <span className="px-4 py-2.5 rounded-lg text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-100 flex items-center space-x-1.5 animate-pulse">
                        <span>🛡️ Active Staged</span>
                      </span>
                    ) : (
                      <span className="px-4 py-2.5 rounded-lg text-xs font-bold bg-slate-100 text-slate-400 border border-slate-200 flex items-center">
                        <span>⚠️ Inactive</span>
                      </span>
                    )}
                  </div>
                </div>


                {/* Interactive Chat Assistant Card */}
                <div className="mt-6 border-t border-slate-100 pt-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="text-lg">🤖</span>
                    <h4 className="text-sm font-bold text-slate-800">Interactive Compliance Assistant</h4>
                    <span className="px-2 py-0.5 rounded-full text-[9px] font-bold bg-indigo-50 text-indigo-600 animate-pulse">ACTIVE</span>
                  </div>
                  
                  {/* Scrollable Messages Area */}
                  <div className="space-y-4 min-h-[120px] max-h-[450px] h-auto overflow-y-auto mb-4 p-4 bg-slate-50/60 rounded-2xl border border-slate-100 shadow-inner">
                    {chatHistory.map((msg, i) => (
                      <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} w-full animate-fade-in`}>
                        <div className={`w-full p-6 rounded-2xl text-sm leading-relaxed shadow-sm border ${
                          msg.role === 'user' 
                            ? 'bg-gradient-to-r from-indigo-600 to-blue-600 text-white border-indigo-600 rounded-br-none shadow-md max-w-[75%]' 
                            : 'bg-white text-slate-800 border-slate-150 rounded-bl-none shadow-sm max-w-[96%] w-[96%]'
                        }`}>
                          {msg.role === 'agent' ? (
                            msg.content.trim().startsWith('<div') || msg.content.trim().startsWith('<span') || msg.content.includes('style=') ? (
                              <div dangerouslySetInnerHTML={{ __html: msg.content }} />
                            ) : (
                              <div dangerouslySetInnerHTML={{ __html: parseMarkdownToHtml(msg.content) }} />
                            )
                          ) : (
                            msg.content
                          )}
                        </div>
                      </div>
                    ))}
                    {chatLoading && (
                      <div className="flex justify-start animate-pulse">
                        <div className="bg-white text-indigo-600 border border-indigo-100 p-4 rounded-2xl rounded-bl-none text-sm font-medium shadow-sm">
                          🤖 Assistant is analyzing guidelines and citations...
                        </div>
                      </div>
                    )}
                    <div ref={chatEndRef} />
                  </div>
                  
                  {/* Chat input bar */}
                  <div className="flex items-center space-x-3">
                    <input 
                      type="text"
                      value={chatInput}
                      onChange={(e) => setChatInput(e.target.value)}
                      onKeyDown={(e) => { if (e.key === 'Enter') handleChatSubmit(); }}
                      placeholder="💬 Type a follow-up compliance question (e.g., 'Cite the exact page number for accelerated stability')..."
                      className="w-full px-4 py-3 text-sm rounded-xl border border-slate-200 bg-slate-50 text-slate-800 focus:bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-50 focus:outline-none shadow-inner transition-all duration-200"
                    />
                    <button 
                      onClick={handleChatSubmit}
                      disabled={!chatInput.trim() || chatLoading}
                      className={`px-5 py-3 rounded-xl text-sm font-bold text-white shadow transition-all duration-200 ${
                        !chatInput.trim() || chatLoading 
                          ? 'bg-slate-300 cursor-not-allowed' 
                          : 'bg-indigo-600 hover:bg-indigo-700 hover:shadow-md hover:-translate-y-0.5 active:translate-y-0'
                      }`}
                    >
                      Send
                    </button>
                  </div>
                </div>
              </div>

              {/* Bulk Action Bar */}
              {selectedDossierIds.length > 0 && (
                <div className="bg-indigo-50 p-3.5 rounded-lg border border-indigo-100 flex justify-between items-center shadow-sm animate-fade-in">
                  <span className="text-sm font-semibold text-indigo-700">
                    {selectedDossierIds.length} dossiers selected
                  </span>
                  <div className="space-x-2">
                    <button className="px-3 py-1.5 text-xs bg-indigo-600 text-white rounded-md hover:bg-indigo-700 font-medium shadow-sm transition-colors">
                      Compare
                    </button>
                    <button className="px-3 py-1.5 text-xs bg-white text-slate-700 rounded-md border border-slate-200 hover:bg-slate-50 font-medium shadow-sm transition-colors">
                      Export
                    </button>
                    <button 
                      onClick={() => setSelectedDossierIds([])}
                      className="px-3 py-1.5 text-xs bg-white text-red-600 rounded-md border border-slate-200 hover:bg-red-50 font-medium shadow-sm transition-colors"
                    >
                      Clear
                    </button>
                  </div>
                </div>
              )}

              {/* eCTD Tree View */}
              <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 hover:shadow-md transition-shadow duration-200">
                <div className="flex justify-between items-center mb-4 border-b border-slate-200 pb-3">
                  <h3 className="text-sm font-semibold text-slate-700 uppercase tracking-wider">eCTD Folder Structure ({selectedSourceFile ? selectedSourceFile.replace(".md", "").replace(".pdf", "") : "Staged Selection"})</h3>
                  <button 
                    onClick={handleRunValidation}
                    disabled={isValidating}
                    className="px-3 py-1.5 text-xs bg-indigo-600 text-white rounded-md hover:bg-indigo-700 font-medium shadow-sm transition-colors disabled:bg-slate-300"
                  >
                    {isValidating ? "Validating..." : "🛡️ Run eCTD Validation"}
                  </button>
                </div>
                
                {validationResult && (
                  <div className={`p-3 mb-4 rounded-lg border text-xs font-medium animate-fade-in ${validationResult.status === 'success' ? 'bg-green-50 border-green-200 text-green-800' : 'bg-red-50 border-red-200 text-red-800'}`}>
                    {validationResult.status === 'success' ? (
                      <span>✓ <b>Validation Passed</b>: {validationResult.message}</span>
                    ) : (
                      <span>✖ <b>Validation Failed</b>: {validationResult.message}</span>
                    )}
                  </div>
                )}
                
                <div className="mb-4">
                  <input 
                    type="text" 
                    value={treeSearchQuery}
                    onChange={(e) => setTreeSearchQuery(e.target.value)}
                    className="w-full p-2 border border-slate-300 rounded-lg text-sm text-slate-900 focus:ring-indigo-500 focus:border-indigo-500 shadow-sm"
                    placeholder="🔍 Filter tree folders..."
                  />
                </div>
                
                <div className="space-y-3">
                  {ectdTreeData.filter(module => 
                    module.name.toLowerCase().includes(treeSearchQuery.toLowerCase()) ||
                    module.children.some((child: any) => child.name.toLowerCase().includes(treeSearchQuery.toLowerCase()))
                  ).map(module => (
                    <details key={module.name} className="group">
                      <summary className="flex items-center cursor-pointer text-sm font-semibold text-slate-900 hover:text-indigo-600 py-1.5 transition-colors">
                        <span className="mr-2 text-xs text-slate-400 group-open:rotate-90 transition-transform duration-200">▶</span>
                        <span className="mr-2">📁</span> {module.name}
                      </summary>
                      <div className="ml-6 mt-1 space-y-2 border-l border-slate-200 pl-4 animate-fade-in">
                        {module.children.map(child => (
                          child.isFolder ? (
                            <details key={child.name} className="group">
                              <summary className="flex items-center cursor-pointer text-sm font-medium text-slate-700 hover:text-indigo-600 py-1 transition-colors">
                                <span className="mr-2 text-xs text-slate-400 group-open:rotate-90 transition-transform duration-200">▶</span>
                                <span className="mr-2">📁</span> {child.name}
                              </summary>
                              <div className="ml-6 mt-1 space-y-1.5 border-l border-slate-200 pl-4 animate-fade-in">
                                {(child as any).children.map((subChild: any) => (
                                  <div key={subChild.name} className="flex justify-between items-center text-xs py-1.5 hover:bg-slate-50 rounded-lg px-2 transition-colors">
                                    <span className="text-slate-600 flex items-center"><span className="mr-2">📄</span> {subChild.name}</span>
                                    <div className="flex items-center space-x-3">
                                      <span className="text-slate-400 font-medium">{subChild.size}</span>
                                      <span 
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          setSelectedStatusType(subChild.status);
                                          setSelectedStatusFileName(subChild.name);
                                          setIsStatusModalOpen(true);
                                        }}
                                        className={`badge cursor-pointer hover:scale-105 transition-all ${subChild.status === 'Completed' ? 'badge-completed' : subChild.status === 'In Review' ? 'badge-progress' : 'badge-pending'}`}
                                      >
                                        {subChild.status}
                                      </span>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </details>
                          ) : (
                            <div key={child.name} className="flex justify-between items-center text-xs py-1.5 hover:bg-slate-50 rounded-lg px-2 transition-colors">
                              <span className="text-slate-600 flex items-center"><span className="mr-2">📄</span> {child.name}</span>
                              <div className="flex items-center space-x-3">
                                <span className="text-slate-400 font-medium">{(child as any).size}</span>
                                <span 
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setSelectedStatusType((child as any).status);
                                    setSelectedStatusFileName(child.name);
                                    setIsStatusModalOpen(true);
                                  }}
                                  className={`badge cursor-pointer hover:scale-105 transition-all ${(child as any).status === 'Completed' ? 'badge-completed' : (child as any).status === 'In Progress' ? 'badge-progress' : 'badge-pending'}`}
                                >
                                  {(child as any).status}
                                </span>
                              </div>
                            </div>
                          )
                        ))}
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TEMPLATES PAGE */}
          {currentPage === 'Templates' && (
            <div className="grid grid-cols-3 gap-6 animate-fade-in">
              {[
                { name: "Module 3.2.P Template", version: "v2.1", status: "Approved", desc: "This is the template for the Drug Product section of Module 3." },
                { name: "Module 3.2.S Template", version: "v2.0", status: "Approved", desc: "Template for the Drug Substance section detailing API properties and manufacture." },
                { name: "Module 2.3 Summary Template", version: "v1.5", status: "Approved", desc: "This is the template for the Quality Overall Summary (QOS)." },
                { name: "Module 2.5 Clinical Overview Template", version: "v1.0", status: "Approved", desc: "Template for Clinical Overview high-level analysis." },
                { name: "Module 4: Non-Clinical Reports Template", version: "v1.0", status: "Approved", desc: "Template for reporting toxicology and pharmacology studies." },
                { name: "Module 5: Clinical Study Reports Template", version: "v1.0", status: "Approved", desc: "Template for clinical study reports (CSR) following ICH E3." },
                { name: "FDA Form 356h Template", version: "v2023", status: "Standard", desc: "Application to Market a New or Generic Drug in the US." }
              ].map(t => (
                <div key={t.name} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-200">
                  <button 
                    onClick={() => setOpenTemplate(openTemplate === t.name ? null : t.name)}
                    className="text-lg font-bold text-indigo-600 hover:underline block text-left transition-colors"
                  >
                    📄 {t.name}
                  </button>
                  <p className="text-xs text-slate-500 mt-0.5 font-medium">Version: {t.version} | Status: {t.status}</p>
                  
                  {openTemplate === t.name && (
                    <div className="mt-4 p-4 bg-slate-50 rounded-lg border border-slate-200 text-sm text-slate-600 animate-fade-in">
                      <p className="font-medium">{t.desc}</p>
                      <h5 className="font-semibold mt-3 text-slate-700 text-xs uppercase tracking-wider">Outline Sections:</h5>
                      <ul className="list-disc list-inside mt-1.5 space-y-1 text-xs font-medium">
                        {t.name.includes('2.3') && (
                          <>
                            <li>2.3.S Drug Substance Summary</li>
                            <li>2.3.P Drug Product Summary</li>
                          </>
                        )}
                        {t.name.includes('3.2.P') && (
                          <>
                            <li>3.2.P.1 Description and Composition</li>
                            <li>3.2.P.2 Pharmaceutical Development</li>
                            <li>3.2.P.8 Stability</li>
                          </>
                        )}
                        {t.name.includes('3.2.S') && (
                          <>
                            <li>3.2.S.1 General Information</li>
                            <li>3.2.S.2 Manufacture</li>
                            <li>3.2.S.7 Stability</li>
                          </>
                        )}
                        {t.name.includes('2.5') && (
                          <>
                            <li>2.5.1 Product Development Rationale</li>
                            <li>2.5.2 Overview of Biopharmaceutics</li>
                            <li>2.5.3 Overview of Clinical Efficacy</li>
                          </>
                        )}
                        {t.name.includes('Module 4') && (
                          <>
                            <li>4.2.1 Pharmacology</li>
                            <li>4.2.2 Pharmacokinetics</li>
                            <li>4.2.3 Toxicology</li>
                          </>
                        )}
                        {t.name.includes('Module 5') && (
                          <>
                            <li>5.3.1 Biopharmaceutic Studies</li>
                            <li>5.3.5 Clinical Efficacy and Safety Studies</li>
                          </>
                        )}
                        {t.name.includes('356h') && (
                          <>
                            <li>Field 1-20: Applicant Information</li>
                            <li>Field 21-30: Product Description</li>
                            <li>Establishment Information</li>
                          </>
                        )}
                      </ul>
                      <div className="mt-3 flex justify-end">
                        <button 
                          onClick={() => {
                            navigator.clipboard.writeText(t.desc);
                            setCopiedTemplate(t.name);
                            setTimeout(() => setCopiedTemplate(null), 1500);
                          }}
                          className="px-3 py-1 text-xs bg-white text-indigo-600 rounded border border-indigo-200 hover:bg-indigo-50 font-medium transition-colors"
                        >
                          {copiedTemplate === t.name ? '✓ Copied!' : '📋 Copy Outline'}
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* REFERENCE LIBRARY */}
          {currentPage === 'Reference Library' && (
            <div className="grid grid-cols-12 gap-6 animate-fade-in">
              {/* Left List: Guidelines */}
              <div className="col-span-4 space-y-4">
                {[
                  { name: "ICH M4Q: The CTD — Quality", desc: "Core guideline for Module 3 structure.", url: "/M4Q_Mock_Example.pdf" },

                  { name: "FDA Guidance: Controlled Correspondence", desc: "Guidance on interacting with FDA.", url: "/M4Q_Mock_Example.pdf" },
                  { name: "ICH Q1A(R2): Stability Testing", desc: "Guideline on stability testing data for new drug substances and products.", url: "/M4Q_Mock_Example.pdf" },
                  { name: "ICH E6(R2): Good Clinical Practice", desc: "International ethical and quality standard for clinical trials.", url: "/M4Q_Mock_Example.pdf" },
                  { name: "FDA Guidance: ANDA Submissions", desc: "Content and format of Abbreviated New Drug Applications.", url: "/M4Q_Mock_Example.pdf" }
                ].map(g => (
                  <div 
                    key={g.name} 
                    onClick={() => setSelectedGuideline(g)} 
                    className={`p-4 bg-white rounded-xl border cursor-pointer hover:shadow-md transition-all duration-200 ${selectedGuideline?.name === g.name ? 'border-indigo-600 ring-2 ring-indigo-100' : 'border-slate-200 shadow-sm'}`}
                  >
                    <h4 className="text-sm font-bold text-slate-900 hover:text-indigo-600 transition-colors">📚 {g.name}</h4>
                    <p className="text-xs text-slate-500 mt-0.5 font-medium">{g.desc}</p>
                  </div>
                ))}
              </div>

              {/* Right Panel: Mock PDF Viewer */}
              <div className="col-span-8 bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col h-[600px]">
                <div className="p-4 border-b border-slate-200 bg-slate-50 flex justify-between items-center">
                  <h3 className="text-sm font-semibold text-slate-700">Document Viewer</h3>
                  {selectedGuideline && (
                    <div className="flex space-x-2 text-xs text-slate-500 font-medium">
                      <span>Page {visiblePage} of {numPages || '?'}</span>
                      <span>|</span>
                      <span>Zoom 100%</span>
                    </div>
                  )}
                </div>

                {selectedGuideline ? (
                  <div className="flex-1 flex flex-col overflow-hidden">
                    {/* PDF Toolbar */}
                    <div className="p-2 border-b border-slate-100 bg-slate-50 flex justify-between items-center">
                      <div className="flex space-x-2">
                        <button className="p-1 hover:bg-slate-200 rounded">🔍+</button>
                        <button className="p-1 hover:bg-slate-200 rounded">🔍-</button>
                      </div>
                      <div className="flex space-x-2">
                        <button className="p-1 hover:bg-slate-200 rounded">🖨️</button>
                        <a href={selectedGuideline.url} download className="p-1 hover:bg-slate-200 rounded">📥</a>
                      </div>

                    </div>

                    {/* PDF Content */}
                    <div className="flex-1 overflow-y-auto p-6 bg-slate-100 pdf-container">
                      <div className="bg-white p-8 shadow-md max-w-2xl mx-auto min-h-[800px] text-slate-800 space-y-4">
                        {selectedGuideline.url ? (
                          <Document file={selectedGuideline.url} className="max-w-full" onLoadSuccess={onDocumentLoadSuccess}>
                            {numPages && Array.from(new Array(numPages), (el, index) => (
                              <Page key={`page_${index + 1}`} pageNumber={index + 1} width={600} className="pdf-page mb-4 shadow-md" data-page-number={index + 1} />
                            ))}
                          </Document>
                        ) : (
                          <div className="text-sm space-y-3 mt-6">
                            <p>Preview not available for this file.</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex-1 flex flex-col items-center justify-center text-slate-500">
                    <div className="text-5xl mb-4">📚</div>
                    <p className="text-sm font-semibold text-slate-700">No guideline selected</p>
                    <p className="text-xs text-slate-400 mt-1 font-medium">Select a guideline from the left to view the full document.</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* EXTERNAL RESEARCH */}
          {currentPage === 'External Research' && (
            <div className="space-y-6 animate-fade-in">
              <div>
                {/* Region Toggle Pills */}
                <div className="flex space-x-2 mb-3">
                  <button 
                    onClick={() => setSearchRegion('FDA')}
                    className={`px-4 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 ${searchRegion === 'FDA' ? 'bg-indigo-600 text-white shadow-sm' : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'}`}
                  >
                    US (FDA)
                  </button>
                  <button 
                    onClick={() => setSearchRegion('EMA')}
                    className={`px-4 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 ${searchRegion === 'EMA' ? 'bg-indigo-600 text-white shadow-sm' : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'}`}
                  >
                    Europe (EMA)
                  </button>
                </div>

                <div className="flex space-x-2 max-w-2xl">
                  <input 
                    type="text" 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="flex-1 p-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-100 focus:border-indigo-600 text-slate-900 text-sm shadow-sm transition-all"
                    placeholder="Search FDA Products..."
                  />
                  <button onClick={handleSearch} className="px-5 py-2.5 bg-gradient-to-r from-indigo-600 to-blue-500 text-white rounded-lg hover:from-indigo-700 hover:to-blue-600 text-sm font-semibold shadow-sm transition-all duration-200 transform hover:scale-[1.02]">
                    Search
                  </button>
                </div>
                
                {/* Suggested Searches with Pills */}
                <div className="flex space-x-2 mt-3 items-center">
                  <span className="text-xs font-medium text-slate-500">Try searching:</span>
                  {['Keytruda', 'Januvia', 'Humira', 'Lipitor'].map(term => (
                    <button 
                      key={term}
                      onClick={() => { setSearchQuery(term.toLowerCase()); }}
                      className="px-3 py-1 text-xs bg-white hover:bg-indigo-50 text-slate-700 hover:text-indigo-600 rounded-full border border-slate-200 shadow-sm transition-all duration-150 hover:border-indigo-200 font-medium"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>

              {searchResults.length > 0 ? (
                <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-slate-50 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">
                        <th className="p-4 border-b border-slate-200 w-10">
                          <input type="checkbox" className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 transition-colors" />
                        </th>
                        <th className="p-4 border-b border-slate-200 cursor-pointer hover:text-indigo-600 transition-colors font-semibold">
                          Drug Name <span className="ml-0.5 text-xs">⇅</span>
                        </th>
                        <th className="p-4 border-b border-slate-200 font-semibold">Active Ingredient</th>
                        <th className="p-4 border-b border-slate-200 font-semibold">Form</th>
                        <th className="p-4 border-b border-slate-200 font-semibold">Strength</th>
                        <th className="p-4 border-b border-slate-200 text-right font-semibold">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {searchResults.map((r, i) => {
                        const key = `${r.drug_name}_${r.strength}`;
                        return (
                          <React.Fragment key={i}>
                            <tr className="text-sm hover:bg-slate-50 transition-colors duration-150">
                              <td className="p-4">
                                <input type="checkbox" className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 transition-colors" />
                              </td>
                              <td className="p-4">
                                <button 
                                  onClick={() => setOpenResearch(openResearch === key ? null : key)}
                                  className="text-indigo-600 font-semibold hover:underline"
                                >
                                  {r.drug_name}
                                </button>
                              </td>
                              <td className="p-4 text-slate-700 font-medium">{r.active_ingredient}</td>
                              <td className="p-4 text-slate-500">{r.form}</td>
                              <td className="p-4 text-slate-500 font-mono text-xs">{r.strength}</td>
                              <td className="p-4 text-right">
                                <button className="text-slate-400 hover:text-slate-600 font-bold transition-colors">•••</button>
                              </td>
                            </tr>
                            {openResearch === key && (
                              <tr>
                                <td colSpan={6} className="p-4 bg-slate-50 text-sm text-slate-600 animate-fade-in">
                                  <div className="p-4 bg-white rounded-lg border border-slate-200 space-y-2 max-w-md shadow-sm">
                                    <h4 className="font-bold text-slate-900 flex items-center">
                                      <span className="text-indigo-600 mr-2">🔍</span> Drug Detail: {r.drug_name}
                                    </h4>
                                    <p className="text-xs font-medium"><b>Active Ingredient:</b> {r.active_ingredient}</p>
                                    <p className="text-xs font-medium"><b>Dosage Form:</b> {r.form}</p>
                                    <p className="text-xs font-medium"><b>Strength:</b> {r.strength}</p>
                                    <div className="mt-3 pt-2 border-t border-slate-100 flex justify-between">
                                      <button className="text-xs text-indigo-600 font-semibold hover:underline">Cross Reference</button>
                                      <button className="text-xs text-slate-500 hover:text-slate-700 font-semibold hover:underline">Download Label</button>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            )}
                          </React.Fragment>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              ) : (
                /* Rich Empty State (Google Style) */
                <div className="text-center text-slate-500 py-20 bg-white rounded-xl border border-slate-200 shadow-sm animate-fade-in">
                  <div className="text-5xl mb-4">🔍</div>
                  <p className="text-base font-semibold text-slate-700">No active search</p>
                  <p className="text-sm text-slate-400 mt-1 font-medium">Enter a drug name or click a suggestion above to search the FDA database.</p>
                </div>
              )}
            </div>
          )}

          {/* CORRESPONDENCE PAGE */}
          {currentPage === 'Correspondence' && (
            <div className="grid grid-cols-12 gap-6 animate-fade-in">
              {/* Left List: Inbox Style */}
              <div className="col-span-4 bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
                <div className="p-4 border-b border-slate-200 bg-slate-50 flex justify-between items-center">
                  <div>
                    <h3 className="text-sm font-semibold text-slate-700">Gateway Inbox</h3>
                    <span className="text-xs font-medium text-green-600 flex items-center mt-0.5"><span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span> Connected</span>
                  </div>
                  <button 
                    onClick={() => {
                      const newMsg = { id: `FDA-IR-${Date.now()}`, date: new Date().toISOString().substring(0, 10), authority: "FDA", type: "IR", subject: "New: Request for floor plan video", status: "Open", thread: [
                        { sender: "FDA (Facility Branch)", time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}), message: "Please provide a video walk-through of the sterile filling area mentioned in 3.2.P.3." }
                      ]};
                      setCorrespondenceList([newMsg, ...correspondenceList]);
                    }}
                    className="px-2 py-1 text-xs bg-white text-indigo-600 rounded border border-indigo-200 hover:bg-indigo-50 font-medium transition-colors"
                  >
                    📥 Fetch
                  </button>
                </div>
                <div className="divide-y divide-slate-100 overflow-y-auto max-h-[500px]">
                  {correspondenceList.map(c => (
                    <div 
                      key={c.id} 
                      onClick={() => setSelectedCorrespondence(c)} 
                      className={`p-3 cursor-pointer hover:bg-slate-50 transition-colors duration-150 ${selectedCorrespondence?.id === c.id ? 'bg-indigo-50 border-l-4 border-indigo-600' : ''}`}
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-bold text-indigo-600">{c.authority}</span>
                        <span className={`badge ${
                          c.status === 'Responded' ? 'badge-completed' : 
                          c.status === 'Open' ? 'badge-progress' : 'badge-pending'
                        }`}>
                          {c.status}
                        </span>
                      </div>
                      <p className="text-sm font-semibold text-slate-900 mt-1 truncate">{c.subject}</p>
                      <p className="text-xs text-slate-500 mt-0.5 truncate">{c.thread[c.thread.length - 1].message}</p>
                      <div className="flex justify-between text-xs text-slate-400 mt-2">
                        <span>ID: {c.id}</span>
                        <span>{c.thread[c.thread.length - 1].time}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Detail: Threaded View */}
              <div className="col-span-8 bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col h-[600px]">
                <div className="p-4 border-b border-slate-200 bg-slate-50">
                  <h3 className="text-sm font-semibold text-slate-700">Conversation Thread</h3>
                </div>
                
                {selectedCorrespondence ? (
                  <div className="flex-1 flex flex-col overflow-hidden">
                    {/* Header */}
                    <div className="p-4 border-b border-slate-100 bg-white">
                      <h3 className="text-lg font-bold text-slate-900">{selectedCorrespondence.subject}</h3>
                      <p className="text-xs font-mono text-slate-500 mt-0.5">Thread ID: {selectedCorrespondence.id} | Authority: {selectedCorrespondence.authority}</p>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
                      {selectedCorrespondence.thread.map((msg: any, i: number) => (
                        <div key={i} className={`flex ${msg.sender.startsWith('BioPharma') ? 'justify-end' : 'justify-start'}`}>
                          <div className={`max-w-xl p-3 rounded-lg shadow-sm ${
                            msg.sender.startsWith('BioPharma') ? 'bg-indigo-600 text-white' : 'bg-white text-slate-700 border border-slate-200'
                          }`}>
                            <div className="flex justify-between items-center mb-1">
                              <span className="text-xs font-bold">{msg.sender}</span>
                              <span className={`text-xs ${msg.sender.startsWith('BioPharma') ? 'text-indigo-200' : 'text-slate-400'}`}>{msg.time}</span>
                            </div>
                            <p className="text-sm">{msg.message}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Reply Box */}
                    <div className="p-4 border-t border-slate-200 bg-white">
                      <div className="relative">
                        <textarea 
                          className="w-full p-3 border border-slate-300 rounded-lg text-sm text-slate-700 focus:ring-indigo-500 focus:border-indigo-500 pr-20"
                          rows={3}
                          placeholder="Type your response to the Health Authority..."
                        />
                        <button className="absolute right-2 bottom-2 px-4 py-1.5 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 text-xs font-semibold shadow-sm transition-colors">
                          Send Reply
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex-1 flex flex-col items-center justify-center text-slate-500">
                    <div className="text-5xl mb-4">💬</div>
                    <p className="text-sm font-semibold text-slate-700">No thread selected</p>
                    <p className="text-xs text-slate-400 mt-1 font-medium">Select an item from the gateway inbox to view the full thread.</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* DELTA ANALYSIS PAGE */}
          {currentPage === 'Delta Analysis' && (
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-6 animate-fade-in">
              <div>
                <h3 className="text-lg font-bold text-slate-900">Side-by-Side Delta Viewer</h3>
                <p className="text-xs text-slate-500 mt-0.5 font-medium">Compare two dossiers to identify text differences and gaps.</p>
              </div>

              <div className="flex space-x-4 items-end max-w-4xl">
                <div className="flex-1">
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">Base Dossier</label>
                  <select 
                    value={dossierA}
                    onChange={(e) => setDossierA(e.target.value)}
                    className="block w-full p-2.5 border border-slate-300 rounded-lg text-slate-900 text-sm focus:ring-2 focus:ring-indigo-100 focus:border-indigo-600 transition-all shadow-sm"
                  >
                    <option value="">-- Select --</option>
                    {dossiers.map(d => (
                      <option key={d.file} value={d.name}>{d.name}</option>
                    ))}
                  </select>
                </div>
                <div className="flex-1">
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">Comparison Dossier</label>
                  <select 
                    value={dossierB}
                    onChange={(e) => setDossierB(e.target.value)}
                    className="block w-full p-2.5 border border-slate-300 rounded-lg text-slate-900 text-sm focus:ring-2 focus:ring-indigo-100 focus:border-indigo-600 transition-all shadow-sm"
                  >
                    <option value="">-- Select --</option>
                    {dossiers.map(d => (
                      <option key={d.file} value={d.name}>{d.name}</option>
                    ))}
                  </select>
                </div>
                <button 
                  disabled={!dossierA || !dossierB}
                  className="px-5 py-2.5 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:bg-slate-300 text-sm font-semibold shadow-sm transition-colors"
                >
                  Compare
                </button>
              </div>

              {dossierA && dossierB && (
                <>
                  <div className="grid grid-cols-2 gap-6 border-t border-slate-200 pt-6">
                  {/* Left: File A */}
                  <div className="p-4 bg-white rounded-lg border border-slate-200 shadow-sm">
                    <h4 className="font-semibold text-slate-900 text-sm mb-2">{dossierA} (Module 3)</h4>
                    <div className="text-xs text-slate-600 space-y-2 font-medium">
                      <p><b>Section 3.2.P.1 Description:</b></p>
                      {dossierA === 'Droncit' ? (
                        <>
                          <p>The drug product is a tablet containing 50mg of Active Ingredient X.</p>
                          <p>The tablets are white, round, and biconvex.</p>
                        </>
                      ) : dossierA === 'PyraMax' ? (
                        <>
                          <p>The drug product is a tablet containing 75mg of Active Ingredient X.</p>
                          <p>The tablets are yellow, round, and biconvex.</p>
                        </>
                      ) : (
                        <>
                          <p>The drug product is a capsule containing 100mg of Active Ingredient Y.</p>
                          <p>The capsules are blue and white.</p>
                        </>
                      )}
                    </div>
                  </div>
                  {/* Right: File B with Diffs */}
                  <div className="p-4 bg-white rounded-lg border border-slate-200 shadow-sm">
                    <h4 className="font-semibold text-slate-900 text-sm mb-2">{dossierB} (Module 3)</h4>
                    <div className="text-xs text-slate-600 space-y-2 font-medium">
                      <p><b>Section 3.2.P.1 Description:</b></p>
                      {dossierA === 'Droncit' && dossierB === 'PyraMax' ? (
                        <>
                          <p>The drug product is a tablet containing <span className="bg-red-100 text-red-800 px-1 rounded">50mg</span> <span className="bg-green-100 text-green-800 px-1 rounded">75mg</span> of Active Ingredient X.</p>
                          <p>The tablets are <span className="bg-red-100 text-red-800 px-1 rounded">white</span> <span className="bg-green-100 text-green-800 px-1 rounded">yellow</span>, round, and biconvex.</p>
                        </>
                      ) : dossierA === 'PyraMax' && dossierB === 'Droncit' ? (
                        <>
                          <p>The drug product is a tablet containing <span className="bg-red-100 text-red-800 px-1 rounded">75mg</span> <span className="bg-green-100 text-green-800 px-1 rounded">50mg</span> of Active Ingredient X.</p>
                          <p>The tablets are <span className="bg-red-100 text-red-800 px-1 rounded">yellow</span> <span className="bg-green-100 text-green-800 px-1 rounded">white</span>, round, and biconvex.</p>
                        </>
                      ) : (
                        <>
                          <p>The drug product text varies based on selection.</p>
                          <p>Please select Droncit and PyraMax to see specific delta highlights.</p>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                {/* AI Impact Assessment (Rich Feature) */}
                <div className="mt-4 p-4 bg-indigo-50 rounded-lg border border-indigo-100 animate-fade-in">
                  <h4 className="font-semibold text-indigo-900 text-sm mb-2 flex items-center">
                    <span className="text-indigo-600 mr-2">🧠</span> AI Impact Assessment
                  </h4>
                  <ul className="text-xs text-indigo-700 space-y-1 list-disc list-inside font-medium">
                    <li><b>Regulatory Impact</b>: The change in active ingredient strength requires updates in PAS.</li>
                    <li><b>Manufacturing Impact</b>: Validate colorant compatibility.</li>
                    <li><b>Action Required</b>: Update Module 2.3 QOS.</li>
                  </ul>
                </div>
                </>
              )}

              {/* Combined Regional Labeling Harmonization layout (Whitespace elimination - outside selection block!) */}
              <div className="pt-6 border-t border-slate-200 space-y-4">
                <div>
                  <h3 className="text-base font-bold text-slate-900">🌎 Global Labeling Harmonization Lookups</h3>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">Compare prescribing instructions and package inserts mismatches side-by-side.</p>
                </div>
                {(() => {
                  const labelData: any = {
                    "Droncit": {
                      ccds: "Warning: This drug may cause dizziness. Do not operate heavy machinery.",
                      us: "Warning: This drug may cause dizziness. Do not operate heavy machinery. Increased risk of dizziness in elderly.",
                      eu: "Warning: This drug may cause dizziness. Alcohol may potentiate the dizzying effect."
                    },
                    "PyraMax": {
                      ccds: "Warning: May cause nausea. Take with food.",
                      us: "Warning: May cause nausea. Take with food. Do not take if pregnant.",
                      eu: "Warning: May cause nausea. Take with food. Monitor liver enzymes weekly."
                    }
                  };
                  const drug = dossierA || "Droncit";
                  const currentLabel = labelData[drug] || labelData["Droncit"];
                  
                  return (
                    <div className="grid grid-cols-3 gap-6 mt-4 animate-fade-in text-slate-900 font-sans">
                      <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 col-span-3">
                        <h4 className="font-semibold text-slate-700 text-xs uppercase tracking-wider flex items-center mb-1">
                          CCDS Reference - {drug}
                        </h4>
                        <p className="text-xs text-slate-600 font-medium leading-relaxed">"{currentLabel.ccds}"</p>
                      </div>
                      <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm space-y-2 h-36 flex flex-col justify-between">
                        <h4 className="font-bold text-slate-800 text-xs flex justify-between items-center">
                          <span>US (FDA)</span>
                          <span className="px-1.5 py-0.5 bg-green-100 text-green-800 text-[10px] font-bold rounded-full border border-green-200">Aligned</span>
                        </h4>
                        <p className="text-xs text-slate-600 font-medium leading-relaxed">{currentLabel.us}</p>
                      </div>
                      <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm space-y-2 h-36 flex flex-col justify-between">
                        <h4 className="font-bold text-slate-800 text-xs flex justify-between items-center">
                          <span>Europe (EMA)</span>
                          <span className="px-1.5 py-0.5 bg-green-100 text-green-800 text-[10px] font-bold rounded-full border border-green-200">Aligned</span>
                        </h4>
                        <p className="text-xs text-slate-600 font-medium leading-relaxed">{currentLabel.eu}</p>
                      </div>
                    </div>
                  );
                })()}
              </div>
            </div>
          )}

          {/* LABELING HARMONIZATION PAGE */}
          {currentPage === 'Labeling' && (
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-6 animate-fade-in">
              <div>
                <h3 className="text-lg font-bold text-slate-900">Global Labeling Harmonization</h3>
                <p className="text-xs text-slate-500 mt-0.5 font-medium">Compare package inserts across different health authorities.</p>
              </div>

              {/* Core Text Card */}
              {(() => {
                const labelData: any = {
                  "Droncit": {
                    ccds: "Warning: This drug may cause dizziness. Do not operate heavy machinery. Discontinue use if rash develops.",
                    us: "Warning: This drug may cause dizziness. Do not operate heavy machinery. Discontinue use if rash develops. Increased risk of dizziness in elderly patients.",
                    eu: "Warning: This drug may cause dizziness. Do not operate heavy machinery. Discontinue use if rash develops. Alcohol may potentiate the dizzying effect.",
                    jp: "Warning: This drug may cause dizziness. Do not operate heavy machinery. Discontinue use if rash develops. Immediately report any signs of jaundice."
                  },
                  "PyraMax": {
                    ccds: "Warning: May cause nausea. Take with food. Discontinue if liver enzymes rise.",
                    us: "Warning: May cause nausea. Take with food. Discontinue if liver enzymes rise. Do not take if pregnant.",
                    eu: "Warning: May cause nausea. Take with food. Discontinue if liver enzymes rise. Monitor liver enzymes weekly.",
                    jp: "Warning: May cause nausea. Take with food. Discontinue if liver enzymes rise. Rare cases of rash reported in Asian populations."
                  }
                };
                const drug = selectedDossierName || "Droncit";
                const currentLabel = labelData[drug] || labelData["Droncit"];
                
                return (
                  <>
                    <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <h4 className="font-semibold text-slate-900 text-sm mb-2 flex items-center">
                      <span className="text-indigo-600 mr-2">🌎</span> Company Core Data Sheet (CCDS) - {drug}
                    </h4>
                    <p className="text-xs text-slate-600 font-medium">"{currentLabel.ccds}"</p>
                  </div>

                  <div className="grid grid-cols-3 gap-6 mt-6">
                {/* US - FDA */}
                <div className="p-4 bg-white rounded-lg border border-slate-200 shadow-sm space-y-2">
                  <h4 className="font-semibold text-slate-900 text-sm flex justify-between items-center">
                    <span>US (FDA)</span>
                    <span className="badge badge-completed">Aligned</span>
                  </h4>
                        <div className="text-xs text-slate-600 font-medium">
                          {currentLabel.us}
                        </div>
                </div>

                {/* EU - EMA */}
                <div className="p-4 bg-white rounded-lg border border-slate-200 shadow-sm space-y-2">
                  <h4 className="font-semibold text-slate-900 text-sm flex justify-between items-center">
                    <span>Europe (EMA)</span>
                    <span className="badge badge-completed">Aligned</span>
                  </h4>
                        <div className="text-xs text-slate-600 font-medium">
                          {currentLabel.eu}
                        </div>
                </div>

                {/* Japan - PMDA */}
                <div className="p-4 bg-white rounded-lg border border-slate-200 shadow-sm space-y-2">
                  <h4 className="font-semibold text-slate-900 text-sm flex justify-between items-center">
                    <span>Japan (PMDA)</span>
                    <span className="badge badge-progress">Local Variation</span>
                  </h4>
                        <div className="text-xs text-slate-600 font-medium">
                          {currentLabel.jp}
                        </div>
                </div>
              </div>
            </>
          );
        })()}

                {/* SPL XML Generation (Rich Feature) */}
                <div className="mt-6 border-t border-slate-200 pt-6">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <h4 className="font-semibold text-slate-900 text-sm">FDA Structured Product Labeling (SPL)</h4>
                      <p className="text-xs text-slate-500 font-medium">Generate the compliant XML file for FDA submission.</p>
                    </div>
                    <button 
                      onClick={handleGenerateXML}
                      disabled={isGeneratingXML}
                      className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 font-medium shadow-sm transition-colors disabled:bg-slate-300"
                    >
                      {isGeneratingXML ? "Generating..." : "⚙️ Generate SPL XML"}
                    </button>
                  </div>

                  {xmlResult && (
                    <div className="p-4 bg-slate-900 rounded-lg text-emerald-400 font-mono text-xs overflow-x-auto max-h-40 animate-fade-in">
                      <pre>{xmlResult}</pre>
                    </div>
                  )}
                </div>
              </div>
          )}

          {/* AUDIT TRAIL PAGE (21 CFR Part 11) */}
          {currentPage === 'Audit Trail' && (
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden animate-fade-in">
              <div className="p-4 border-b border-slate-200 bg-slate-50 flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Secure Audit Trail</h3>
                  <p className="text-xs text-slate-500 font-medium">21 CFR Part 11 Compliant log of all user actions.</p>
                </div>
                <button 
                  onClick={() => {
                    const headers = "Timestamp,User,Action,Target,Result\n";
                    const rows = auditLogsData.map(l => `"${l.timestamp}","${l.user}","${l.action}","${l.target}","${l.result}"`).join("\n");
                    const blob = new Blob([headers + rows], { type: 'text/csv' });
                    const url = window.URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.setAttribute('href', url);
                    a.setAttribute('download', `audit_trail_${Date.now()}.csv`);
                    a.click();
                  }}
                  className="px-3 py-1.5 text-xs bg-gradient-to-r from-indigo-600 to-blue-500 text-white rounded-md hover:from-indigo-700 hover:to-blue-600 font-medium shadow-sm transition-all duration-200 transform hover:scale-[1.02]"
                >
                  Export Log
                </button>
              </div>

              {/* Filters Bar */}
              <div className="p-4 bg-slate-50 border-b border-slate-200 flex space-x-4">
                <div className="flex items-center space-x-2">
                  <label className="text-xs font-semibold text-slate-500 uppercase">User:</label>
                  <select 
                    value={logFilterUser}
                    onChange={(e) => setLogFilterUser(e.target.value)}
                    className="p-1 border border-slate-300 rounded text-xs text-slate-900"
                  >
                    <option value="All">All</option>
                    {Array.from(new Set(auditLogsData.map(l => l.user))).map(u => (
                      <option key={u} value={u}>{u}</option>
                    ))}
                  </select>
                </div>
                <div className="flex items-center space-x-2">
                  <label className="text-xs font-semibold text-slate-500 uppercase">Result:</label>
                  <select 
                    value={logFilterResult}
                    onChange={(e) => setLogFilterResult(e.target.value)}
                    className="p-1 border border-slate-300 rounded text-xs text-slate-900"
                  >
                    <option value="All">All</option>
                    <option value="Success">Success</option>
                    <option value="Warning">Warning</option>
                  </select>
                </div>
              </div>
              
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-50 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    <th className="p-4 border-b border-slate-200">Timestamp</th>
                    <th className="p-4 border-b border-slate-200">User</th>
                    <th className="p-4 border-b border-slate-200">Action</th>
                    <th className="p-4 border-b border-slate-200">Target</th>
                    <th className="p-4 border-b border-slate-200">Result</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-sm">
                  {auditLogsData.filter(log => {
                    const matchUser = logFilterUser === 'All' || log.user === logFilterUser;
                    const matchResult = logFilterResult === 'All' || log.result === logFilterResult;
                    return matchUser && matchResult;
                  }).map((log, i) => (
                    <tr key={i} className="hover:bg-slate-50 transition-colors duration-150">
                      <td className="p-4 text-slate-500 font-mono text-xs">{log.timestamp}</td>
                      <td className="p-4 text-slate-900 font-medium">{log.user}</td>
                      <td className="p-4 text-slate-700">{log.action}</td>
                      <td className="p-4 text-slate-700 font-medium">{log.target}</td>
                      <td className="p-4">
                        <span className={`badge ${
                          log.result === 'Success' ? 'badge-completed' : 'badge-pending'
                        }`}>
                          {log.result}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* PLANNER PAGE (Gantt Chart) */}
          {currentPage === 'Planner' && (
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-6 animate-fade-in">
              <div>
                <h3 className="text-lg font-bold text-slate-900">Automated Submission Timeline</h3>
                <p className="text-xs text-slate-500 mt-0.5 font-medium">Projected Gantt chart for regulatory submission tasks.</p>
              </div>

              {/* Gantt Chart Grid */}
              <div className="overflow-x-auto">
                <div className="min-w-[600px]">
                  {/* Timeline Headers */}
                  <div className="grid grid-cols-12 gap-1 text-xs font-semibold text-slate-500 text-center border-b border-slate-200 pb-2 uppercase tracking-wider">
                    <div className="col-span-3 text-left">Task</div>
                    {['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10', 'W11', 'W12'].map(w => (
                      <div key={w}>{w}</div>
                    ))}
                  </div>

                  {/* Tasks */}
                  <div className="space-y-4 mt-4">
                    {plannerTasks.map(t => (
                      <div key={t.name} className="grid grid-cols-12 gap-1 items-center">
                        <div className="col-span-4 text-sm font-medium text-slate-700 flex items-center space-x-2">
                          <div className="flex flex-col w-32">
                            <span>{t.name}</span>
                            {t.deps !== '-' && <span className="text-xs text-slate-400 font-normal">Requires: {t.deps}</span>}
                          </div>
                          <input 
                            type="number" 
                            value={t.start}
                            onChange={(e) => handleTaskChange(t.name, 'start', parseInt(e.target.value))}
                            className="w-10 p-1 border border-slate-300 rounded text-xs text-slate-900"
                            min="1" max="12"
                          />
                          <input 
                            type="number" 
                            value={t.end}
                            onChange={(e) => handleTaskChange(t.name, 'end', parseInt(e.target.value))}
                            className="w-10 p-1 border border-slate-300 rounded text-xs text-slate-900"
                            min="1" max="12"
                          />
                        </div>
                        <div className="col-span-8 relative h-5 bg-slate-100 rounded-full">
                          <div 
                            className={`absolute h-5 rounded-full flex items-center justify-center text-white font-bold transition-all duration-500 ${
                              t.status === 'Completed' ? 'bg-green-500' : 
                              t.status === 'In Progress' ? 'bg-indigo-600 animate-pulse' : 'bg-slate-300'
                            }`}
                            style={{ 
                              left: `${(t.start - 1) * 8.33}%`, 
                              width: `${(t.end - t.start + 1) * 8.33}%`,
                              fontSize: '9px'
                            }}
                          >
                            {t.status === 'In Progress' ? 'ACTIVE' : t.status === 'Completed' ? 'DONE' : ''}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ANALYSIS PAGE */}
          {currentPage === 'Analysis' && (
            <div className="grid grid-cols-12 gap-6 animate-fade-in">
              {/* Left Column: Form Controls with Elevation */}
              <div className="col-span-4 bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-200 space-y-6 h-fit">
                <div>
                  <label className="block text-sm font-semibold text-slate-700">Select Dossier</label>
                  <select 
                    value={selectedDossierName}
                    onChange={(e) => setSelectedDossierName(e.target.value)}
                    className="mt-1.5 block w-full p-2.5 border border-slate-300 rounded-lg text-slate-900 text-sm focus:ring-2 focus:ring-indigo-100 focus:border-indigo-600 transition-all shadow-sm"
                  >
                    <option value="">-- Select --</option>
                    {dossiers.map(d => (
                      <option key={d.file} value={d.name}>{d.name}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-slate-700">Analysis Types</label>
                  <div className="mt-2 flex flex-col space-y-2.5">
                    {['Compliance', 'Delta', 'Labeling'].map(type => (
                      <label key={type} className="inline-flex items-center text-slate-900 cursor-pointer group">
                        <input 
                          type="checkbox" 
                          checked={analysisTypes.includes(type)}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setAnalysisTypes([...analysisTypes, type]);
                            } else {
                              setAnalysisTypes(analysisTypes.filter(t => t !== type));
                            }
                          }}
                          className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 transition-colors"
                        />
                        <span className="ml-2 text-sm font-medium text-slate-700 group-hover:text-slate-900 transition-colors">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                <button 
                  onClick={handleRunAnalysis}
                  disabled={isAnalyzing || !selectedDossierName}
                  className="w-full py-2.5 bg-gradient-to-r from-indigo-600 to-blue-500 text-white rounded-lg hover:from-indigo-700 hover:to-blue-600 disabled:bg-slate-300 font-semibold shadow-sm transition-all duration-200 transform hover:scale-[1.02]"
                >
                  {isAnalyzing ? "Processing..." : "🚀 Run Cloud Analysis"}
                </button>
              </div>

              {/* Right Column: Results with Elevation */}
              <div className="col-span-8 bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-200 min-h-[300px]">
                <h3 className="text-sm font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2 uppercase tracking-wider">Analysis Report</h3>
                
                {isAnalyzing ? (
                  <div className="text-center text-slate-500 py-20 animate-pulse">
                    <p className="text-sm font-medium">Processing analysis via Gemini...</p>
                  </div>
                ) : analysisResult ? (
                  <div 
                    className="text-sm text-slate-900 animate-fade-in"
                    dangerouslySetInnerHTML={{ __html: analysisResult }}
                  />
                ) : (
                  /* Rich Empty State */
                  <div className="text-center text-slate-500 py-20">
                    <div className="text-5xl mb-4">📊</div>
                    <p className="text-sm font-semibold text-slate-700">No analysis generated yet</p>
                    <p className="text-xs text-slate-400 mt-1 font-medium">Select a dossier and click run to see the analysis results here.</p>
                  </div>
                )}
              </div>
            </div>
          )}

        </main>
      </div>

      {/* Custom Animations and Badge Styles */}
      <style jsx>{`
        .badge {
          display: inline-flex;
          align-items: center;
          padding: 2px 8px;
          border-radius: 9999px;
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
        }
        .badge-completed { background-color: #DEF7EC; color: #03543F; border: 1px solid #BCF0DA; }
        .badge-progress { background-color: #E1EFFE; color: #1E429F; border: 1px solid #C3DDFD; }
        .badge-pending { background-color: #FDE8E8; color: #9B1C1C; border: 1px solid #FBD5D5; }
        
        .animate-fade-in {
          animation: fadeIn 0.3s ease-in-out;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(5px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* Spotlight Search Modal (Google Style Command Center) */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-start justify-center pt-20 animate-fade-in" onClick={() => { setIsSearchOpen(false); setGlobalSearchResults(null); setGlobalSearchQuery(''); }}>
          <div className="bg-white w-full max-w-2xl rounded-xl shadow-2xl overflow-hidden border border-slate-200" onClick={(e) => e.stopPropagation()}>
            <div className="p-4 border-b border-slate-200 relative bg-slate-50">
              <input 
                type="text"
                value={globalSearchQuery}
                onChange={(e) => handleGlobalSearch(e.target.value)}
                className="w-full p-2 pl-10 border-0 focus:ring-0 text-base text-slate-900 focus:outline-none bg-transparent font-medium"
                placeholder="Search dossiers, templates, guidelines..."
                autoFocus
              />
              <span className="absolute left-4 top-6 text-slate-400">🔍</span>
              <span className="absolute right-4 top-6 text-xs text-slate-400 font-medium">Press Esc to close</span>
            </div>
            
            <div className="max-h-96 overflow-y-auto p-4">
              {globalSearchResults ? (
                <div className="space-y-4">
                  {globalSearchResults.dossiers.length > 0 && (
                    <div>
                      <p className="text-xs font-bold text-slate-500 uppercase p-1 tracking-wider">📁 Dossiers</p>
                      {globalSearchResults.dossiers.map((d: any) => (
                        <div key={d.file} onClick={() => { setSelectedDossier(d); setCurrentPage('Dashboard'); setIsSearchOpen(false); setGlobalSearchResults(null); setGlobalSearchQuery(''); }} className="p-2 hover:bg-indigo-50 cursor-pointer rounded-lg text-sm text-slate-700 font-medium transition-colors">
                          {d.name}
                        </div>
                      ))}
                    </div>
                  )}
                  {globalSearchResults.templates.length > 0 && (
                    <div>
                      <p className="text-xs font-bold text-slate-500 uppercase p-1 tracking-wider">📄 Templates</p>
                      {globalSearchResults.templates.map((t: any) => (
                        <div key={t.name} onClick={() => { setCurrentPage('Templates'); setIsSearchOpen(false); setGlobalSearchResults(null); setGlobalSearchQuery(''); }} className="p-2 hover:bg-indigo-50 cursor-pointer rounded-lg text-sm text-slate-700 font-medium transition-colors">
                          {t.name}
                        </div>
                      ))}
                    </div>
                  )}
                  {globalSearchResults.guidelines.length > 0 && (
                    <div>
                      <p className="text-xs font-bold text-slate-500 uppercase p-1 tracking-wider">📚 Guidelines</p>
                      {globalSearchResults.guidelines.map((g: any) => (
                        <div key={g.name} onClick={() => { setCurrentPage('Reference Library'); setIsSearchOpen(false); setGlobalSearchResults(null); setGlobalSearchQuery(''); }} className="p-2 hover:bg-indigo-50 cursor-pointer rounded-lg text-sm text-slate-700 font-medium transition-colors">
                          {g.name}
                        </div>
                      ))}
                    </div>
                  )}
                  {globalSearchResults.fda && globalSearchResults.fda.length > 0 && (
                    <div>
                      <p className="text-xs font-bold text-slate-500 uppercase p-1 tracking-wider">🔍 FDA Products</p>
                      {globalSearchResults.fda.map((r: any, i: number) => (
                        <div key={i} onClick={() => { setCurrentPage('External Research'); setIsSearchOpen(false); setGlobalSearchResults(null); setGlobalSearchQuery(''); }} className="p-2 hover:bg-indigo-50 cursor-pointer rounded-lg text-sm text-slate-700 font-medium transition-colors">
                          {r.drug_name} ({r.active_ingredient})
                        </div>
                      ))}
                    </div>
                  )}
                  {Object.values(globalSearchResults).every((arr: any) => arr.length === 0) && (
                    <div className="p-6 text-center text-slate-500 text-sm font-medium">No results found.</div>
                  )}
                </div>
              ) : (
                <div className="text-center text-slate-500 text-sm py-10 font-medium">
                  Type at least 3 characters to search across everything.
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      {/* Interactive Status Explainer Modal */}
      {isStatusModalOpen && selectedStatusType && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center z-50 animate-fade-in" onClick={() => setIsStatusModalOpen(false)}>
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xl max-w-md w-full mx-4 animate-scale-in space-y-4" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-start">
              <h3 className="text-base font-bold text-slate-900">📋 Status Explanation</h3>
              <button onClick={() => setIsStatusModalOpen(false)} className="text-slate-400 hover:text-slate-600 text-lg font-bold leading-none">&times;</button>
            </div>
            <div className="text-xs text-slate-500 font-medium">
              <b>File Target:</b> <span className="font-mono text-slate-700 break-all">{selectedStatusFileName}</span>
            </div>
            <div className={`p-4 rounded-xl border text-xs leading-relaxed ${statusExplainers[selectedStatusType as keyof typeof statusExplainers]?.lightColor}`}>
              <p className="font-bold mb-1">{statusExplainers[selectedStatusType as keyof typeof statusExplainers]?.title}</p>
              <p className="font-medium">{statusExplainers[selectedStatusType as keyof typeof statusExplainers]?.desc}</p>
            </div>
            <div className="flex justify-end pt-2">
              <button onClick={() => setIsStatusModalOpen(false)} className="px-4 py-2 bg-slate-50 text-slate-700 border border-slate-200 rounded-lg text-xs font-bold hover:bg-slate-100 active:scale-95 transition-all shadow-sm">Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
