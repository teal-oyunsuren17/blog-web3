import { useState } from "react";
import CategoriesList from "./CategoriesList";
import CategoriesEdit from "./CategoriesEdit";

export function Categories() {
  const [editing, setEditing] = useState(false);

  function closeModal() {
    setEditing(false);
  }
  return (
    <div>
      <div className="d-flex justify-content-between mb-4 p-5">
        <h1>Angilal</h1>
        <button className="btn btn-primary" onClick={() => setEditing(true)}>
          Shine
        </button>
      </div>
      <CategoriesList />
      <CategoriesEdit show={editing} onClose={closeModal} />
    </div>
  );
}
