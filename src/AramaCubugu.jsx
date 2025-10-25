function AramaCubugu({ arama, setArama }) {
  return (
    <div className="arama-cubugu">
      <input
        type="text"
        placeholder="Başlık veya yazar ara..."
        value={arama}
        onChange={(e) => setArama(e.target.value)}
        className="arama-input"
      />
    </div>
  )
}

export default AramaCubugu
