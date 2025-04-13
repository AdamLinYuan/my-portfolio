import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ResumePreviewProps {
  isOpen: boolean;
  onClose: () => void;
}

const ResumePreview: React.FC<ResumePreviewProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    
    if (isOpen) {
      window.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ 
              type: "spring",
              stiffness: 300,
              damping: 30,
              duration: 0.2 
            }}
            className="fixed left-0 right-0 top-0 bottom-0 m-auto z-50 w-[95%] max-w-3xl h-[90vh] max-h-[90vh] bg-white dark:bg-gray-800 rounded-lg shadow-2xl overflow-hidden"
            style={{
              maxHeight: "800px",
              height: "90vh"
            }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-3 border-b dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Resume Preview</h3>
              <button
                onClick={onClose}
                className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* PDF Viewer */}
            <div className="flex-grow h-[calc(100%-7rem)] overflow-hidden">
              <iframe
                src="/files/AdamYuanResume.pdf#view=FitH"
                className="w-full h-full border-0"
                title="Resume Preview"
                style={{ display: "block" }}
              />
            </div>
            
            {/* Footer */}
            <div className="p-3 border-t dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
              <div className="flex justify-end gap-3">
                <a
                  href="/files/AdamYuanResume.pdf"
                  download
                  className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors"
                >
                  Download Resume
                </a>
                <button
                  onClick={onClose}
                  className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-sm font-medium rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ResumePreview;