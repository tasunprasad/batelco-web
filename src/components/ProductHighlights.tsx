interface ProductHighlightsProps {
  highlights: string[];
}

export default function ProductHighlights({
  highlights,
}: ProductHighlightsProps) {
  return (
    <div>
      <h2 className="text-[18px] lg:text-[24px] font-[800] text-[#1A242D] leading-tight mb-4">
        Highlights
      </h2>
      <ul className="space-y-3">
        {highlights.map((highlight, index) => (
          <li key={index} className="flex items-start gap-3">
            <div className="flex-shrink-0 w-[6px] h-[6px] bg-gray-600 rounded-full mt-[7px]" />
            <p className="text-gray-600 text-[14px] lg:text-[20px] font-[300] leading-relaxed max-w-[400px]">
              {highlight}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

