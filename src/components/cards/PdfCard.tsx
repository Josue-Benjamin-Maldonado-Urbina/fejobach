import React from "react";

export interface PdfCardProps {
  title: string;
  description: string;
  pdfUrl: string;
  thumbnail?: string;
  onOpen: (url: string) => void;
}

const PdfCard: React.FC<PdfCardProps> = ({
  title,
  description,
  pdfUrl,
  thumbnail,
  onOpen,
}) => {
  return (
    <div className="bg-[#1c1c1e] text-white rounded-2xl shadow-lg p-4 w-full max-w-xs mx-auto hover:shadow-xl transition duration-300">
      
      {/* Thumbnail / image */}
      <div
        className="rounded-xl overflow-hidden cursor-pointer"
        onClick={() => onOpen(pdfUrl)}
      >
        <img
          src={thumbnail ?? "https://placehold.co/400x300?text=PDF"}
          alt={title}
          className="w-full h-48 object-cover"
        />
      </div>

      {/* Title & Description */}
      <div className="mt-4">
        <h2 className="text-lg font-semibold flex items-center">
          {title}
        </h2>

        <p className="text-gray-400 text-sm mt-1">
          {description}
        </p>
      </div>

      {/* Actions */}
      <div className="flex justify-between items-center mt-5">
        
        {/* View button */}
        <button
          onClick={() => onOpen(pdfUrl)}
          className="px-4 py-2 rounded-xl bg-gray-700 hover:bg-gray-600 transition text-sm font-medium"
        >
          Ver
        </button>

        {/* Download button */}
        <a
          href={pdfUrl}
          download
          className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 transition text-sm font-medium"
          onClick={(e) => e.stopPropagation()}
        >
          Descargar
        </a>
      </div>

    </div>
  );
};

export default PdfCard;
