import Head from "next/head";

export default function Home() {
  return (
    <div className="relative bg-[#021315] h-screen flex items-center justify-center">
      <Head>
        <title>Digital Product Design & Development - Micro Minimalist</title>
        <meta name="description" content="Mobile App (iOS,Android), Website andUI/UX services by innovative & experienced tech team." />
        <link rel="icon" href="/logo.png" />

        <meta name="author" content="Micro Minimalist" />

        <meta property="og:title" content="Digital Product Design & Development - Micro Minimalist" />
        <meta property="og:description" content="Mobile App (iOS,Android), Website andUI/UX services by innovative & experienced tech team." />
        <meta property="og:image" content="https://microminimalist.com/logo.png" />
        <meta property="og:url" content="pyaesoneaung.tech" />

        <meta name="twitter:title" content="Digital Product Design & Development - Micro Minimalist" />
        <meta name="twitter:description" content="Mobile App (iOS,Android), Website andUI/UX services by innovative & experienced tech team." />
        <meta name="twitter:image" content="https://microminimalist.com/logo.png" />
        <meta name="twitter:card" content="summary_large_image"></meta>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap" rel="stylesheet"></link>
      </Head>

      <main className="font-light text-center text-white font-poppins mt-[-150px]">
        <img src="/cat.gif" className="w-[287px] h-[287px]" />
        <h1 className="text-2xl mt-[-34px]"><strong>Meow!</strong> Coming Soon</h1>
        <p className="mt-5 text-sm">We are Still Working on it</p>
      </main>
      <footer className="absolute inset-x-0 bottom-0 pb-20">
        <img src="/logo.svg" className="w-[124px] h-8 mx-auto" />
      </footer>
    </div>
  );
}
