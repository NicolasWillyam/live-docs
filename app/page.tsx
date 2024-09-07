import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full min-h-screen flex gap-2 justify-center items-center text-2xl font-semibold">
      <Image
        src="/assets/images/logo.png"
        alt="logo-image"
        width={30}
        height={30}
      />
      Live Docs
    </main>
  );
}
