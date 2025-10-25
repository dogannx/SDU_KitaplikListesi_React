import { useState, useEffect } from 'react'
import './App.css'
import AramaCubugu from './AramaCubugu'
import KategoriFiltre from './KategoriFiltre'
import KitapListe from './KitapListe'
import FavoriPaneli from './FavoriPaneli'

function App() {
  // Sabit kitap listesi
  const kitaplar = [
    { id: 1, baslik: "React'e Giriş", yazar: "Dr. Mehmet Usta", kategori: "Web" },
    { id: 2, baslik: "İleri JavaScript", yazar: "Prof. Dr. Selçuk Kılıç", kategori: "Web" },
    { id: 3, baslik: "Veri Yapıları", yazar: "Doç. Dr. Ahmet Demir", kategori: "CS" },
    { id: 4, baslik: "Algoritmalar", yazar: "Dr. Öğr. Üyesi Emre Kaya", kategori: "CS" },
    { id: 5, baslik: "UI/UX Temelleri", yazar: "Öğr. Gör. Nilay Akın", kategori: "Tasarım" },
    { id: 6, baslik: "Python Programlama", yazar: "Dr. Murat Özkan", kategori: "Programlama" },
    { id: 7, baslik: "Veritabanı Tasarımı", yazar: "Prof. Dr. Kemal Yılmaz", kategori: "CS" },
    { id: 8, baslik: "Web Tasarım", yazar: "Öğr. Gör. Leyla Çelik", kategori: "Tasarım" }
  ]

  // State'ler
  const [arama, setArama] = useState('')
  const [seciliKategori, setSeciliKategori] = useState('Tümü')
  const [favoriKitaplar, setFavoriKitaplar] = useState([])

  // LocalStorage'dan verileri yükle
  useEffect(() => {
    const kaydedilmisArama = localStorage.getItem('arama')
    const kaydedilmisFavoriler = localStorage.getItem('favoriKitaplar')
    
    if (kaydedilmisArama) {
      setArama(kaydedilmisArama)
    }
    if (kaydedilmisFavoriler) {
      setFavoriKitaplar(JSON.parse(kaydedilmisFavoriler))
    }
  }, [])

  // LocalStorage'a kaydet
  useEffect(() => {
    localStorage.setItem('arama', arama)
  }, [arama])

  useEffect(() => {
    localStorage.setItem('favoriKitaplar', JSON.stringify(favoriKitaplar))
  }, [favoriKitaplar])

  // Filtreleme fonksiyonu
  const filtrelenmisKitaplar = kitaplar.filter(kitap => {
    const aramaUygun = kitap.baslik.toLowerCase().includes(arama.toLowerCase()) ||
                       kitap.yazar.toLowerCase().includes(arama.toLowerCase())
    const kategoriUygun = seciliKategori === 'Tümü' || kitap.kategori === seciliKategori
    
    return aramaUygun && kategoriUygun
  })

  // Favori ekleme/çıkarma
  const favoriDegistir = (kitapId) => {
    setFavoriKitaplar(onceki => {
      if (onceki.includes(kitapId)) {
        return onceki.filter(id => id !== kitapId)
      } else {
        return [...onceki, kitapId]
      }
    })
  }

  // Favoriden çıkarma
  const favoridenCikar = (kitapId) => {
    setFavoriKitaplar(onceki => onceki.filter(id => id !== kitapId))
  }

  return (
    <div className="app">
      <header className="header">
        <h1>Mini Kitaplık</h1>
        <div className="filtreler">
          <AramaCubugu 
            arama={arama} 
            setArama={setArama} 
          />
          <KategoriFiltre 
            seciliKategori={seciliKategori} 
            setSeciliKategori={setSeciliKategori} 
          />
        </div>
      </header>
      
      <main className="main">
        <div className="kitap-listesi">
          <KitapListe 
            kitaplar={filtrelenmisKitaplar}
            favoriKitaplar={favoriKitaplar}
            favoriDegistir={favoriDegistir}
          />
        </div>
        
        <div className="favori-paneli">
          <FavoriPaneli 
            favoriKitaplar={favoriKitaplar}
            kitaplar={kitaplar}
            favoridenCikar={favoridenCikar}
          />
        </div>
      </main>
    </div>
  )
}

export default App
