import Image from "next/image";

export function RocketLoader() {
  return (
    <div className="flex items-center justify-center">
      <div className="relative w-6 h-6">
        {/* orbit */}
        <div className="absolute inset-0 rounded-full border border-white/40"></div>

        {/* spinning container */}
        <div
          className="absolute inset-0 animate-spin"
          style={{ animationDuration: "2.5s" }}
        >
          {/* rocket */}
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 flex flex-col items-center">
            <Image
              src="/icons/space-rocket.svg"
              alt="Loading"
              width={18}
              height={18}
              priority
            />
          </div>
        </div>

        {/* center glow */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-1 h-1 bg-orange-400 rounded-full blur-[1px]"></div>
        </div>
      </div>
    </div>
  );
}
