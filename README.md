# Yemigo Downloads

Modern ve minimal bir indirme sayfası - Tesla.com tarzında tasarlandı.

## Özellikler

- ✨ Modern, minimal ve profesyonel tasarım
- 📱 Tam responsive (mobil, tablet, desktop)
- ⚡ Next.js 15 ile hızlı performans
- 🎨 Tailwind CSS ile özelleştirilebilir
- 🔥 Firebase entegrasyonu hazır
- 🌙 Karanlık tema

## Kurulum

1. Bağımlılıkları yükleyin:
```bash
npm install
```

2. Firebase yapılandırması:
   - `.env.local.example` dosyasını `.env.local` olarak kopyalayın
   - Firebase Console'dan bilgilerinizi alın ve `.env.local` içine yapıştırın

3. Geliştirme sunucusunu başlatın:
```bash
npm run dev
```

4. Tarayıcıda açın: [http://localhost:3000](http://localhost:3000)

## Firebase Kurulumu

1. [Firebase Console](https://console.firebase.google.com/) gidin
2. Yeni proje oluşturun veya mevcut projeyi seçin
3. Project Settings > General > Your apps bölümünden web app ekleyin
4. Firebase config bilgilerini `.env.local` dosyasına ekleyin
5. Firebase Console'da Storage'ı aktifleştirin
6. Firestore Database'i aktifleştirin

## Uygulama Yükleme (Şimdilik Manuel)

1. Firebase Console > Storage
2. `apps/android/` veya `apps/windows/` klasörü oluşturun
3. APK/EXE dosyalarınızı yükleyin
4. Dosya URL'ini kopyalayın
5. `app/page.tsx` içindeki `apps` dizisini güncelleyin

## Deployment

### Vercel (Önerilen)
```bash
npm install -g vercel
vercel
```

### Firebase Hosting
```bash
npm install -g firebase-tools
npm run build
firebase deploy
```

## Yapı

```
yemigo-downloads/
├── app/                 # Next.js app directory
│   ├── page.tsx        # Ana sayfa
│   ├── layout.tsx      # Layout
│   └── globals.css     # Global stiller
├── components/         # React bileşenleri
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── AppCard.tsx
│   └── Footer.tsx
├── lib/               # Utility fonksiyonları
│   └── firebase.ts    # Firebase config
└── public/            # Statik dosyalar
```

## Sonraki Adımlar

- [ ] Admin panel ekleyin (dosya yükleme için)
- [ ] Firestore'dan dinamik veri çekme
- [ ] İndirme istatistikleri
- [ ] Arama/filtreleme özelliği

## Lisans

MIT
