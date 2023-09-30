import "../styles/Categories.css";
import { Select } from "@chakra-ui/react";

function Categories({ setActiveCategory, categories, activeCategory }) {
  return (

    <div className="categories-container">

      <Select
        placeholder="Tous les produits"
        value={activeCategory}
        onChange={(e) => setActiveCategory(e.target.value)}
        w={"9vw"}
        borderColor='#0ba360'
      >
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </Select>
      {/* <button onClick={() => setActiveCategory("")}>Réinitialiser</button> */}
    </div>
    
  );
}

export default Categories;
