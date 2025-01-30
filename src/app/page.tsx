import Link from "next/link";

export default function Home() {
  return (
   <div className="bg-home-img bg-black bg-cover bg-center">

    <main className="flex flex-col justify-center items-center text-center max-w-5xl mx-auto h-dvh">

      <div className="bg-black/70 p-2 flex flex-col gap-6 text-white rounded-xl w-4/5 sm:max-w-96 mx-auto sm:text-2xl">
        <h1 className="font-semibold">nikka-bill</h1>
        <address>
          #392/2 Khuda Ali Sher<br/> Chandigarh, India
        </address>
        <p>Open: 24x7</p>
        <Link href="tel:+918437626236" className="hover:underline">+91-8437626236</Link>
      </div>

    </main>

   </div>
  );
}
