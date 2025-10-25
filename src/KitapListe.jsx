import KitapKartı from './KitapKartı'

function KitapListe({ kitaplar, favoriKitaplar, favoriDegistir }) {
  return (
    <div className="kitap-listesi">
      {kitaplar.map(kitap => (
        <KitapKartı
          key={kitap.id}
          baslik={kitap.baslik}
          yazar={kitap.yazar}
          kategori={kitap.kategori}
          id={kitap.id}
          favorideMi={favoriKitaplar.includes(kitap.id)}
          favoriDegistir={favoriDegistir}
        />
      ))}
    </div>
  )
}

export default KitapListe
