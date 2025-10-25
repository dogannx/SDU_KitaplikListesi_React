# Mini Kitaplık

Okul kulübü için geliştirilmiş küçük bir web kitaplığı uygulaması. Kullanıcılar kitapları arayabilir, kategorilere göre filtreleyebilir ve favorilerine ekleyebilir.

## Özellikler

- 📚 **Kitap Arama**: Başlık veya yazara göre arama yapabilme
- 🏷️ **Kategori Filtresi**: Kitapları kategorilere göre filtreleme
- ⭐ **Favori Sistemi**: Kitapları favorilere ekleme/çıkarma
- 💾 **Veri Kalıcılığı**: Arama metni ve favoriler localStorage'da saklanır
- 📱 **Responsive Tasarım**: Mobil ve masaüstü uyumlu

## Teknolojiler

- React 19.1.1
- Vite
- CSS3
- LocalStorage API

## Kurulum

1. Projeyi klonlayın:
```bash
git clone <repository-url>
cd deneme
```

2. Bağımlılıkları yükleyin:
```bash
npm install
```

3. Geliştirme sunucusunu başlatın:
```bash
npm run dev
```

## Proje Yapısı

```
src/
├── components/
│   ├── AramaCubugu.jsx      # Arama input bileşeni
│   ├── KategoriFiltre.jsx   # Kategori seçim bileşeni
│   ├── KitapListe.jsx       # Kitap listesi bileşeni
│   ├── KitapKartı.jsx       # Tekil kitap kartı bileşeni
│   └── FavoriPaneli.jsx     # Favori kitaplar paneli
├── App.jsx                  # Ana uygulama bileşeni
├── App.css                  # Ana stiller
└── main.jsx                 # Uygulama giriş noktası
```

## Bileşen Açıklamaları

### App.jsx
Ana state yönetimi ve filtreleme mantığını içerir:
- `kitaplar`: Sabit kitap listesi
- `aramaMetni`: Arama metni state'i
- `kategori`: Seçili kategori state'i
- `favoriler`: Favori kitap ID'leri dizisi

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

## Kullanım

1. **Arama**: Üst kısımdaki arama çubuğuna kitap başlığı veya yazar adı yazın
2. **Filtreleme**: Kategori dropdown'ından istediğiniz kategoriyi seçin
3. **Favori Ekleme**: Kitap kartındaki "Favori Ekle" butonuna tıklayın
4. **Favori Görüntüleme**: Sağ panelde favori kitaplarınızı görün
5. **Favoriden Çıkarma**: Favori panelindeki "Kaldır" butonuna tıklayın

## Veri Kalıcılığı

Uygulama aşağıdaki verileri localStorage'da saklar:
- Arama metni
- Favori kitap ID'leri

Bu sayede sayfa yenilendiğinde veya uygulama kapatılıp açıldığında veriler korunur.

## Canlı Demo

[Vercel'de Canlı Demo](https://mini-kitaplik.vercel.app)

## Geliştirici

Bu proje okul kulübü için geliştirilmiştir.