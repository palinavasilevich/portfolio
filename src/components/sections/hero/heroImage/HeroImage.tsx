import Image from "next/image";
import Link from "next/link";

export function HeroImage() {
  return (
    <div className="flex justify-center pt-10 pb-2 lg:pb-10">
      <Link href="#contact" className="group">
        <Image
          className="
            rounded-3xl
            animate-slow-up-down
            pause-on-hover
            max-w-full
            h-auto
            cursor-pointer
            transition-shadow duration-300
            hover:shadow-[0_1px_25px_#8200db]
          "
          src="/images/palina-image.JPG"
          alt="Profile picture of Palina Vasilevich"
          width={400}
          height={400}
          quality={95}
          priority
        />
      </Link>
    </div>
  );
}
