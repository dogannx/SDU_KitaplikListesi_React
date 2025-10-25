# SDU Kitaplık Listesi - React

[🌐 **Canlı Demo**](https://dogannx.github.io/SDU_KitaplikListesi_React/)

Süleyman Demirel Üniversitesi için geliştirilmiş küçük bir web kitaplığı uygulaması. Kullanıcılar kitapları arayabilir, kategorilere göre filtreleyebilir ve favorilerine ekleyebilir.

## 🚀 Özellikler

- 📚 **Kitap Arama**: Başlık veya yazara göre arama yapabilme
- 🏷️ **Kategori Filtresi**: Kitapları kategorilere göre filtreleme (Web, CS, Tasarım, Programlama)
- ⭐ **Favori Sistemi**: Kitapları favorilere ekleme/çıkarma
- 💾 **Veri Kalıcılığı**: Arama metni ve favoriler localStorage'da saklanır
- 📱 **Responsive Tasarım**: Mobil ve masaüstü uyumlu
- 🎨 **Modern UI**: Temiz ve kullanıcı dostu arayüz

## 🛠️ Teknolojiler

- **React 19.1.1** - Modern React hooks kullanımı
- **Vite** - Hızlı geliştirme ortamı
- **CSS3** - Responsive ve modern stiller
- **LocalStorage API** - Veri kalıcılığı

## 📦 Kurulum

1. **Projeyi klonlayın:**
```bash
git clone https://github.com/dogannx/SDU_Kitapl-kListesi_React.git
cd SDU_Kitapl-kListesi_React
```

2. **Bağımlılıkları yükleyin:**
```bash
npm install
```

3. **Geliştirme sunucusunu başlatın:**
```bash
npm run dev
```

4. **Tarayıcıda açın:**
```
http://localhost:5173
```

## 📁 Proje Yapısı

```
src/
├── App.jsx                  # Ana uygulama bileşeni
├── App.css                  # Ana stiller
├── AramaCubugu.jsx          # Arama input bileşeni
├── KategoriFiltre.jsx       # Kategori seçim bileşeni
├── KitapListe.jsx           # Kitap listesi bileşeni
├── KitapKartı.jsx           # Tekil kitap kartı bileşeni
├── FavoriPaneli.jsx         # Favori kitaplar paneli
├── main.jsx                 # Uygulama giriş noktası
└── index.css                # Global stiller
```

## 🔧 Bileşen Açıklamaları

### App.jsx
Ana state yönetimi ve filtreleme mantığını içerir:
- `kitaplar`: Sabit kitap listesi (8 adet örnek kitap)
- `arama`: Arama metni state'i
- `seciliKategori`: Seçili kategori state'i
- `favoriKitaplar`: Favori kitap ID'leri dizisi

### AramaCubugu.jsx
Kontrollü input bileşeni. Arama metnini App bileşenine bildirir.

### KategoriFiltre.jsx
Select kontrollü bileşen. Kategori seçimini App bileşenine bildirir.

### KitapListe.jsx
Filtrelenmiş kitap listesini map'ler ve her kitap için KitapKartı render eder.

### KitapKartı.jsx
Tekil kitap bilgilerini gösterir ve favori ekleme/çıkarma işlevini sağlar.

### FavoriPaneli.jsx
Favori kitapları listeler ve favoriden çıkarma işlevini sağlar.

## 📖 Kullanım

1. **🔍 Arama**: Üst kısımdaki arama çubuğuna kitap başlığı veya yazar adı yazın
2. **🏷️ Filtreleme**: Kategori dropdown'ından istediğiniz kategoriyi seçin
3. **⭐ Favori Ekleme**: Kitap kartındaki "Favori Ekle" butonuna tıklayın
4. **📋 Favori Görüntüleme**: Sağ panelde favori kitaplarınızı görün
5. **🗑️ Favoriden Çıkarma**: Favori panelindeki "Kaldır" butonuna tıklayın

## 💾 Veri Kalıcılığı

Uygulama aşağıdaki verileri localStorage'da saklar:
- `arama`: Arama metni
- `favoriKitaplar`: Favori kitap ID'leri

Bu sayede sayfa yenilendiğinde veya uygulama kapatılıp açıldığında veriler korunur.

## 📚 Örnek Kitaplar

Uygulama şu kategorilerde örnek kitaplar içerir:
- **Web**: React'e Giriş, İleri JavaScript
- **CS**: Veri Yapıları, Algoritmalar, Veritabanı Tasarımı
- **Tasarım**: UI/UX Temelleri, Web Tasarım
- **Programlama**: Python Programlama

## 🌐 Canlı Demo

[GitHub Pages'de Canlı Demo](https://dogannx.github.io/SDU_KitaplikListesi_React/)

## 👨‍💻 Geliştirici

Bu proje Süleyman Demirel Üniversitesi için geliştirilmiştir.

## 📄 Lisans

Bu proje eğitim amaçlı geliştirilmiştir.