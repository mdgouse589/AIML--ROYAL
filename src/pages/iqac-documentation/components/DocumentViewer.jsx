import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const DocumentViewer = ({ document, isOpen, onClose, onDownload }) => {
  if (!isOpen || !document) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-royal-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <Icon name="FileText" size={20} className="text-white" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-900">{document?.title}</h2>
              <p className="text-sm text-gray-600">{document?.category}</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              iconName="Download"
              iconPosition="left"
              onClick={() => onDownload(document)}
            >
              Download
            </Button>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
            >
              <Icon name="X" size={20} className="text-gray-500" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
          <div className="mb-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Icon name="Calendar" size={16} className="text-gray-500" />
                  <span className="text-sm font-medium text-gray-700">Date</span>
                </div>
                <p className="text-gray-900">{document?.date}</p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Icon name="FileText" size={16} className="text-gray-500" />
                  <span className="text-sm font-medium text-gray-700">Size</span>
                </div>
                <p className="text-gray-900">{document?.size}</p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Icon name="Download" size={16} className="text-gray-500" />
                  <span className="text-sm font-medium text-gray-700">Downloads</span>
                </div>
                <p className="text-gray-900">{document?.downloads}</p>
              </div>
            </div>
          </div>

          <div className="prose max-w-none">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Description</h3>
            <p className="text-gray-700 mb-6">{document?.description}</p>
            
            {document?.summary && (
              <>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Executive Summary</h3>
                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                  <p className="text-gray-700">{document?.summary}</p>
                </div>
              </>
            )}

            {document?.keyPoints && (
              <>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Points</h3>
                <ul className="list-disc list-inside space-y-2 mb-6">
                  {document?.keyPoints?.map((point, index) => (
                    <li key={index} className="text-gray-700">{point}</li>
                  ))}
                </ul>
              </>
            )}

            {/* PDF Preview Placeholder */}
            <div className="bg-gray-100 rounded-lg p-8 text-center">
              <Icon name="FileText" size={48} className="text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 mb-4">PDF Document Preview</p>
              <p className="text-sm text-gray-500">
                Click the download button to view the complete document
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentViewer;