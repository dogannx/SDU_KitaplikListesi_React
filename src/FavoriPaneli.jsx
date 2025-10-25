function FavoriPaneli({ favoriKitaplar, kitaplar, favoridenCikar }) {
  const favoriListesi = kitaplar.filter(kitap => favoriKitaplar.includes(kitap.id))

  return (
    <div className="favori-paneli">
      <h2>Favoriler ({favoriKitaplar.length})</h2>
      {favoriListesi.length === 0 ? (
        <p className="bos-favori">Henüz favori kitap yok</p>
      ) : (
        <ul className="favori-listesi">
          {favoriListesi.map(kitap => (
            <li key={kitap.id} className="favori-item">
              <span className="favori-kitap-adı">{kitap.baslik}</span>
              <button
                className="favoriden-cikar-butonu"
                onClick={() => favoridenCikar(kitap.id)}
              >
                Kaldır
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default FavoriPaneli
