import { useEffect, useState } from "react";
import { useQuestionsStore } from "./store/questions";
import { Box, Button } from "@mui/material";

import { JavaScriptLogo } from "./JavaScriptLogo";
import { Html5Logo } from "./Html5Logo";
import { Css3Logo } from "./Css3Logo";

const CategorySelector = () => {
  const { category, setCategory } = useQuestionsStore();
  const [selectedCategory, setSelectedCategory] = useState(category);

  useEffect(() => {
    setCategory(selectedCategory);
  }, [selectedCategory, setCategory]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    console.log(category);
  };

  return (
    <Box display="flex" justifyContent="center" gap={2} mt={4}>
      <Button
        onClick={() => handleCategoryChange("javascript")}
        style={{
          border: selectedCategory === "javascript" ? "2px solid white" : "none",
        }}
      >
        <JavaScriptLogo />
      </Button>
      <Button
        onClick={() => handleCategoryChange("html5")}
        style={{
          border: selectedCategory === "html5" ? "2px solid white" : "none",
        }}
      >
        <Html5Logo />
      </Button>
      <Button
        onClick={() => handleCategoryChange("css3")}
        style={{
          border: selectedCategory === "css3" ? "2px solid white" : "none",
        }}
      >
        <Css3Logo />
      </Button>
      {/* Agrega más opciones según las categorías disponibles */}
    </Box>
  );
};

export default CategorySelector;
