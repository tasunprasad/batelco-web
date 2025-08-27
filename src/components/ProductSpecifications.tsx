interface ProductSpecificationsProps {
  specifications: Record<string, string>;
}

export default function ProductSpecifications({
  specifications,
}: ProductSpecificationsProps) {
  return (
    <div>
      <h2 className="text-[18px] lg:text-[24px] font-[800] text-[#1A242D] leading-tight mb-4">
        Specifications
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full">
          <tbody className="divide-y divide-gray-100">
            {Object.entries(specifications).map(([key, value]) => (
              <tr key={key}>
                <td
                  className={`py-3 px-2 text-sm text-gray-600 font-medium w-1/2 ${
                    Object.entries(specifications).findIndex(
                      ([k]) => k === key
                    ) %
                      2 ===
                    1
                      ? "bg-[#ffffff]"
                      : "bg-[#f4f4f9]"
                  }`}
                >
                  {key}
                </td>
                <td
                  className={`py-3 px-2 text-sm text-gray-600 font-[600] w-1/2 ${
                    Object.entries(specifications).findIndex(
                      ([k]) => k === key
                    ) %
                      2 ===
                    1
                      ? "bg-[#ffffff]"
                      : "bg-[#f4f4f9]"
                  }`}
                >
                  {value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

