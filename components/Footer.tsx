'use client';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-black to-purple-950/20 border-t border-purple-800/40 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Yemigo</h3>
            <p className="text-gray-400 text-sm">
              POS sistemi
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Linkler</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#apps" className="hover:text-purple-400 transition-colors">
                  Uygulamalar
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-purple-400 transition-colors">
                  Hakkında
                </a>
              </li>
              <li>
                <a href="#support" className="hover:text-purple-400 transition-colors">
                  Destek
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">İletişim</h3>
            <p className="text-gray-400 text-sm">
              downloads.yemigo.com
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-purple-800/30 pt-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Yemigo. Tüm hakları saklıdır.
        </div>
      </div>
    </footer>
  );
}
