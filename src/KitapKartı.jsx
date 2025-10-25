function KitapKartı({ baslik, yazar, kategori, id, favorideMi, favoriDegistir }) {
  return (
    <div className="kitap-kartı">
      <div className="kitap-bilgileri">
        <h3 className="kitap-baslik">{baslik}</h3>
        <p className="kitap-yazar-kategori">{yazar} · {kategori}</p>
      </div>
      <button
        className={`favori-butonu ${favorideMi ? 'favoride' : 'favori-ekle'}`}
        onClick={() => favoriDegistir(id)}
      >
        {favorideMi ? (
          <>
            <span className="star">★</span>
            Favoride
          </>
        ) : (
          <>
            <span className="star">☆</span>
            Favori Ekle
          </>
        )}
      </button>
    </div>
  )
}

export default KitapKartı
