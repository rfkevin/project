import React from "react";

export const ProductForm = ({ setShowForm }) => {
  return (
    <div>
      <form>
        {/* Ajoutez vos champs de formulaire ici */}
        <input type="text" placeholder="Product name" />
        <input type="number" placeholder="Product price" />
        <button type="submit">Add product</button>
      </form>
      <button onClick={() => setShowForm(false)}>Close</button>
    </div>
  );
};