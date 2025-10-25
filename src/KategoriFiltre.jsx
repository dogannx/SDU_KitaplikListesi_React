function KategoriFiltre({ seciliKategori, setSeciliKategori }) {
  const kategoriler = ['Tümü', 'Web', 'CS', 'Tasarım', 'Programlama']

  return (
    <div className="kategori-filtre">
      <select
        value={seciliKategori}
        onChange={(e) => setSeciliKategori(e.target.value)}
        className="kategori-select"
      >
        {kategoriler.map(kat => (
          <option key={kat} value={kat}>
            {kat}
          </option>
        ))}
      </select>
    </div>
  )
}

export default KategoriFiltre
