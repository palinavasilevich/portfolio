import Image from "next/image";
import Link from "next/link";

export function HeroImage() {
  return (
    <div className="flex justify-center pt-10 pb-2 lg:pb-10">
      <Link href="#contact" className="group">
        <Image
          className="max-w-full h-auto rounded-3xl transition-transform duration-500 group-hover:scale-105 object-contain"
          src="/images/profile-image.jpg"
          alt="Profile picture of Palina Vasilevich"
          width={300}
          height={300}
          priority
        />
      </Link>
    </div>
  );
}
