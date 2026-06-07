'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import AppCard from '@/components/AppCard';
import Footer from '@/components/Footer';

interface ReleaseAsset {
  Version: string;
  Size: number;
}

function formatSize(bytes: number): string {
  const mb = bytes / (1024 * 1024);
  return `${Math.round(mb)} MB`;
}

export default function Home() {
  const [version, setVersion] = useState('');
  const [size, setSize] = useState('');

  useEffect(() => {
    // Cache busting: timestamp ile releases.win.json'u her zaman taze çek
    fetch(`https://updates.yemigo.com/releases/releases.win.json?t=${Date.now()}`)
      .then((res) => res.json())
      .then((data: { Assets?: ReleaseAsset[] } | ReleaseAsset[]) => {
        // releases.win.json yapısı: { Assets: [...] } veya doğrudan [...]
        const assets: ReleaseAsset[] = Array.isArray(data) ? data : (data?.Assets ?? []);
        if (assets.length > 0) {
          setVersion(assets[0].Version);
          setSize(formatSize(assets[0].Size));
        }
      })
      .catch(() => {
        // Fallback: versiyon bilgisi alınamazsa boş bırak
      });
  }, []);

  // Her release'de R2'ye versiyonlu path ile yüklenir (release.ps1):
  // releases/v{versionNoDots}/YemiGO-Setup.exe
  // Versiyon bilinmezse fallback olarak eski (cache'li) URL kullanılır.
  const versionNoDots = version.replace(/\./g, '');
  const setupUrl = version
    ? `https://updates.yemigo.com/releases/v${versionNoDots}/YemiGO-Setup.exe`
    : 'https://updates.yemigo.com/releases/YemiGO-win-Setup.exe';

  const apps = [
    {
      id: '1',
      name: 'YemiGO POS',
      platform: 'Windows' as const,
      version,
      size,
      description: 'Masaüstü POS sistemi. Sipariş yönetimi, kasa ve raporlama.',
      downloadUrl: setupUrl,
    },
    {
      id: '2',
      name: 'YemiGO Caller',
      platform: 'Android' as const,
      version: '1.0.2',
      size: '4 MB',
      description: 'Gelen aramaları POS\'a iletir. Şube telefonuna kurulur, çağrıda müşteri kartı otomatik açılır.',
      downloadUrl: '/YemiGO-Caller-v1.0.2.apk',
    },
    {
      // Sürüm/boyut Caller gibi sabit (updates.yemigo.com CORS'suz, tarayıcıdan fetch bloklanır).
      // Yeni terminal sürümünde burayı + OTA latest.json'u güncelle. İndirme R2'den (download CORS gerektirmez).
      id: '3',
      name: 'Yemigo Terminal',
      platform: 'Android' as const,
      version: '0.2.0',
      size: '37 MB',
      description: 'El terminali (DT50). Sevkiyat teslimatı ve depo mal kabulü. QR ile eşlenir, uygulama içi otomatik güncellenir.',
      downloadUrl: 'https://updates.yemigo.com/terminal/yemigo-terminal-0.2.0.apk',
    },
  ];
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />

      {/* Apps Section */}
      <section id="apps" className="py-24 px-6 bg-gradient-to-b from-black via-purple-950/20 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Uygulamalarımız
            </h2>
            <p className="text-gray-400 text-lg">
              İhtiyacınıza göre platform seçin ve indirin
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {apps.map((app) => (
              <AppCard key={app.id} {...app} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Yemigo
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Modern POS sistemi.
          </p>
          <p className="text-gray-400 leading-relaxed">
            En son sürümü indirerek tüm özelliklere erişin.
          </p>
        </div>
      </section>

      {/* Support Section */}
      <section id="support" className="py-24 px-6 bg-gradient-to-b from-black via-purple-950/30 to-purple-950/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Destek
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            Uygulamalarımız ile ilgili sorularınız için bizimle iletişime geçebilirsiniz.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-purple-950/30 to-black border border-purple-800/50 rounded-lg p-8 hover:border-purple-600 transition-all hover:shadow-lg hover:shadow-purple-900/50">
              <svg className="w-12 h-12 mx-auto mb-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-gray-400">support@yemigo.com</p>
            </div>
            <div className="bg-gradient-to-br from-purple-950/30 to-black border border-purple-800/50 rounded-lg p-8 hover:border-purple-600 transition-all hover:shadow-lg hover:shadow-purple-900/50">
              <svg className="w-12 h-12 mx-auto mb-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-xl font-semibold mb-2">Yardım Merkezi</h3>
              <p className="text-gray-400">help.yemigo.com</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
