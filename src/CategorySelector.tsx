import React from 'react';
import { useQuestionsStore } from './store/questions';

const CategorySelector = () => {
  const { setCategory } = useQuestionsStore();

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCategory = event.target.value;
    setCategory(selectedCategory);
  };

  return (
    <select onChange={handleCategoryChange}>
      <option value="data">Javascript - data</option>
      <option value="test">test</option>
      {/* <option value="history">History</option> */}
      {/* Agrega más opciones según las categorías disponibles */}
    </select>
  );
};

export default CategorySelector;
