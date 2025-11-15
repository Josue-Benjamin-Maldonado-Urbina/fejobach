import React from "react";

export interface PdfModalProps {
  pdfUrl: string | null;
  onClose: () => void;
}

const PdfModal: React.FC<PdfModalProps> = ({ pdfUrl, onClose }) => {
  if (!pdfUrl) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl h-[90vh] overflow-hidden relative">

        <button
          className="absolute top-2 right-2 bg-gray-800 text-white px-3 py-1 rounded"
          onClick={onClose}
        >
          X
        </button>

        <iframe
          src={pdfUrl}
          className="w-full h-full"
          title="PDF Preview"
        />

        <div className="p-4 border-t flex justify-between items-center bg-gray-50">
          <span className="text-gray-700">Vista previa del documento</span>
          <a
            href={pdfUrl}
            download
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Descargar PDF
          </a>
        </div>
      </div>
    </div>
  );
};

export default PdfModal;
