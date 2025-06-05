import './Searchbar.css'

export default function Searchbar({ recherche, setRecherche }) {
  return (
    <input
      id='search'
      type="text"
      value={recherche}
      onChange={(e) => setRecherche(e.target.value)}
      placeholder="&#128269; Recherchez un pays..."
    />
  );
}
