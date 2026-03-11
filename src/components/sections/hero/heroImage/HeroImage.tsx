import Image from "next/image";
import Link from "next/link";

export function HeroImage() {
  return (
    <div className="flex justify-center pt-10 pb-2 lg:pb-10">
      <Link href="#contact" className="group">
        <Image
          className="rounded-3xl cursor-pointer transition-transform duration-500 group-hover:scale-105 object-contain"
          src="/images/palina-image.JPG"
          alt="Profile picture of Palina Vasilevich"
          width={400}
          height={400}
          priority
        />
      </Link>
    </div>
  );
}
