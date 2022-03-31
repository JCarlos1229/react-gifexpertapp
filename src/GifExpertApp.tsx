import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GifExpertApp = () => {
  //   const categories = ["One pucnh", "samuray x", "dragon ball"];
  const [categories, setCategories] = useState(["dragon ball"]);

  //   const handleAdd = () => {
  //     // setCategories([...categories, "hola"]);
  //     setCategories((cat) => [...cat, "Naruto"]);
  //   };
  return (
    <div>
      <h2>Gif Expert</h2>
      <AddCategory setCategories={setCategories} />
      <hr />

      <ol>
        {categories.map((category, index) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </div>
  );
};

export default GifExpertApp;
