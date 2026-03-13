  "use client";

  import Image from "next/image";
  import Link from "next/link";

  export default function Logo() {
    return (
      <Link href="/" className="flex items-center">
        <Image
          src="/image/logo_2.png"
          alt="Logo"
          width={120}
          height={40}
          priority
        />
      </Link>
    );
  }