import React, { useEffect, useState } from 'react';
import { X, Download, ExternalLink, Copy, Check, FileText, Mail, Phone } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ResumeViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeViewerModal: React.FC<ResumeViewerModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCopyContact = () => {
    const text = `Desta Elias\nMechatronics Engineering Graduate\nEmail: ${PERSONAL_INFO.email}\nPhone: ${PERSONAL_INFO.phone}\nGitHub: ${PERSONAL_INFO.github}\nLocation: ${PERSONAL_INFO.location}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-hidden"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-5xl h-[90vh] bg-[#0C1017] border border-slate-700/80 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#090C12] shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white flex items-center gap-2">
                <span>Desta Elias — Official Resume</span>
                <span className="text-[11px] font-mono text-slate-400">PDF</span>
              </div>
              <div className="text-xs text-slate-400">
                Mechatronics Engineering Graduate · AASTU 2026
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={handleCopyContact}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 rounded-md border border-slate-700 transition-colors"
              title="Copy Contact Details"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied Details' : 'Copy Contact'}</span>
            </button>

            <a
              href={PERSONAL_INFO.resumePdfUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 rounded-md border border-slate-700 transition-colors"
              title="Open PDF in new tab"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Open in New Tab</span>
            </a>

            <a
              href={PERSONAL_INFO.resumePdfUrl}
              download="Desta_Elias_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-md shadow-sm transition-colors"
              title="Download PDF"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors ml-1 focus:outline-none"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* PDF Viewer Body */}
        <div className="flex-1 bg-slate-950 relative overflow-hidden flex flex-col">
          <iframe
            src={`${PERSONAL_INFO.resumePdfUrl}#view=FitH`}
            title="Desta Elias Resume PDF"
            className="w-full h-full border-0"
          />

          {/* Fallback Banner at Bottom if iframe fails or is restricted */}
          <div className="px-6 py-3 bg-[#0A0D14] border-t border-slate-800 flex flex-wrap items-center justify-between text-xs text-slate-400 gap-3 shrink-0">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5 text-slate-300">
                <Mail className="w-3.5 h-3.5 text-blue-400" />
                {PERSONAL_INFO.email}
              </span>
              <span className="hidden md:inline text-slate-700">·</span>
              <span className="hidden md:flex items-center gap-1.5 text-slate-300">
                <Phone className="w-3.5 h-3.5 text-blue-400" />
                {PERSONAL_INFO.phone}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[11px] text-slate-500">Notice rendering issues?</span>
              <a
                href={PERSONAL_INFO.resumePdfUrl}
                download="Desta_Elias_Resume.pdf"
                className="text-blue-400 hover:text-blue-300 font-semibold underline"
              >
                Click here to download directly
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
