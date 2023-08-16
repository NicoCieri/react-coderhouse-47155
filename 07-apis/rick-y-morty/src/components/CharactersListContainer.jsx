import { useState, useEffect } from "react";
import CharacterList from "./CharacterList";

const CharactersListContainer = () => {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);

  const handleNextPage = () => {
    console.log("next page");
    setPage(page + 1);
  };

  const handlePrevPage = () => {
    if (page > 1) setPage(page - 1);
  };

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
      .then((response) => response.json())
      .then((data) => setCharacters(data.results))
      .finally(() => setIsLoading(false));
  }, [page]);

  return (
    <CharacterList
      characters={characters}
      isLoading={isLoading}
      handleNextPage={handleNextPage}
      handlePrevPage={handlePrevPage}
    />
  );
};

export default CharactersListContainer;
