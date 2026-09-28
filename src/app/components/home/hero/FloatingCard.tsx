type FloatingCardProps = {
  type: "uiux" | "progress" | "students";
  className?: string;
};

const FloatingCard = ({
  type,
  className = "",
}: FloatingCardProps) => {
  if (type === "uiux") {
    return (
      <div
        className={`absolute z-30 w-[145px] rounded-xl bg-white px-3 py-3 shadow-xl ${className}`}
      >
        <p className="text-[10px] font-semibold text-black">
          UI/UX Design
        </p>

        <p className="mt-1 text-[8px] text-gray-500">
          200 Courses • 1000+ Students
        </p>
      </div>
    );
  }

  if (type === "progress") {
    return (
      <div
        className={`absolute z-30 w-[150px] rounded-xl bg-white px-4 py-3 shadow-xl ${className}`}
      >
        <p className="text-[9px] font-medium text-gray-600">
          Learning Progress
        </p>

        <div className="mt-1 flex items-center justify-between">
          <span className="text-2xl font-bold text-black">
            55%
          </span>
        </div>

        <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-gray-100">
          <div className="h-full w-[55%] rounded-full bg-[#D6FF00]" />
        </div>
      </div>
    );
  }

  return (
    <div
      className={`absolute z-30 w-[150px] rounded-xl bg-white px-3 py-3 shadow-xl ${className}`}
    >
      <p className="text-[9px] font-semibold text-black">
        Happy Students
      </p>
      <p className="text-[8px] text-gray-500">
        4.5 (240) <span className="text-yellow-400">★</span>
      </p>

      <div className="mt-2 flex items-center justify-between">
        <div className="flex -space-x-2">
          <div className="h-6 w-6 rounded-full border border-white bg-gray-200" />
          <div className="h-6 w-6 rounded-full border border-white bg-gray-300" />
          <div className="h-6 w-6 rounded-full border border-white bg-gray-400" />
          <div className="h-6 w-6 rounded-full border border-white bg-gray-500" />
        </div>

        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#D6FF00] text-[7px] font-bold text-black">
          2K+
        </span>
      </div>
    </div>
  );
};

export default FloatingCard;