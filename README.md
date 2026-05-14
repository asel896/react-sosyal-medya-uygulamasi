# React Sosyal Medya Uygulaması Projesi

Bu proje, React kütüphanesini kullanarak oluşturulmuş, modern arayüze sahip bir sosyal medya uygulaması örneğidir. Proje, kullanıcıların içerik görüntülemesine ve paylaşımlar yapmasına olanak tanır.

## 🚀 Proje Özellikleri

### 🎨 Tasarım ve Arayüz
*   **Modern UI:** Tailwind CSS kullanılarak tasarlanmış şık ve kullanıcı dostu bir arayüz.
*   **Responsive Design:** Mobil ve masaüstü cihazlarda sorunsuz kullanım.
*   **Karanlık Mod:** Göz yormayan karanlık tema desteği (tema değiştirme butonu).

### 📂 Sayfa Yapısı
Proje içerisinde üç ana sayfa bulunmaktadır:

1.  **Ana Sayfa**:
    *   Uygulamanın ana navigasyon merkezi.
    *   Kullanıcıya özel hoş geldin mesajı.
    *   Sayaç özelliği ile basit state yönetimi pratiği.

2.  **Gönderiler**:
    *   Kullanıcıların oluşturduğu gönderilerin listelendiği bölüm.
    *   Beğeni ve yorum ekleme fonksiyonları.
    *   Gönderi silme özelliği.
    *   **Gerçekçi Veri Mock'u:** Mockaroo ile oluşturulmuş geniş gönderi veritabanı.

3.  **Profil**:
    *   Kullanıcı profili görüntüleme alanı.
    *   Kullanıcının yaptığı paylaşımlar.
    *   Profil bilgisi düzenleme formu.

### 🔗 Core Özellikler
*   **Statik Veri Kullanımı:** Proje, ek bir backend servisine ihtiyaç duymadan tamamen statik veri (JSON) ile çalışır.
*   **React Hooks:** `useState` ve `useEffect` gibi hook'lar aktif olarak kullanılır.
*   **Component Mimarisi:** Uygulama, yeniden kullanılabilir bileşenlerden oluşur.

## 🛠️ Kurulum ve Çalıştırma

### Ön Gereksinimler
*   Node.js 
*   npm (Node Package Manager)


1.  **Gerekli Paketler:**
    ```bash
    npm install
    ```

2.  **Uygulamayı Başlatma:**
    ```bash
    npm run dev
    ```

3.  **Tarayıcıda Açma:**
    Uygulama otomatik olarak `http://localhost:5173` adresinde açılacaktır.

## 📂 Dosya Yapısı

```
react-sosyal-medya-uygulamasi/
├── public/                     # Statik dosyalar (HTML, ikonlar)
├── src/
│   ├── assets/                 # Görsel dosyalar (logo, hero görseli)
│   ├── components/             # Tekrar kullanılabilir bileşenler
│   ├── pages/                  # Ana sayfalar (AnaSayfa, Gonderiler, Profil)
│   ├── App.jsx                 # Ana uygulama bileşeni ve yönlendirme (Routing)
│   ├── index.css               # Genel CSS stilleri
│   └── main.jsx                # Uygulamanın giriş noktası
└── vite.config.js              # Vite yapılandırması
```


