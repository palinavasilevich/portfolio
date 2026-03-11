import Image from "next/image";

export function RocketLoader() {
  return (
    <div className="flex flex-col items-center">
      {/* <div className="animate-bounce text-shadow-md">🚀</div> */}
      <Image
        src="/icons/comet.svg"
        alt="Rocket icon indicating scroll down"
        width={32}
        height={16}
        priority
        className="animate-bounce"
      />
      {/* <div className="w-16 h-2 bg-blue-500 rounded-full blur-sm mt-2"></div> */}
    </div>
  );
}
