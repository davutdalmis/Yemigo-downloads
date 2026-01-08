'use client';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center text-center px-6">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-950 via-purple-900 to-black opacity-95"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight bg-gradient-to-r from-purple-400 via-purple-300 to-pink-300 bg-clip-text text-transparent">
          Yemigo
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-12 font-light">
          POS uygulamalarını indirin
        </p>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-gray-400"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
}
