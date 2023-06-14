import React from "react";

export const UserForm = ({ setShowForm }) => {
  return (
    <div>
      <form>
        {/* Ajoutez vos champs de formulaire ici */}
        <input type="text" placeholder="Full name" />
        <input type="text" placeholder="Username" />
        <input type="text" placeholder="Address" />
        <input type="number" placeholder="Phone" />
        <input type="number" placeholder="Date of birth"/>
        <input type="email" placeholder="Email" />
        <button type="submit">Modify a user</button>
      </form>
      <button onClick={() => setShowForm(false)}>Close</button>
    </div>
  );
};