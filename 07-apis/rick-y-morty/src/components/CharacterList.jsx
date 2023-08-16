import Proptypes from "prop-types";
import CharacterItem from "./CharacterItem";

const CharacterList = ({
  characters,
  isLoading,
  handlePrevPage,
  handleNextPage,
}) => {
  return (
    <div>
      {isLoading && <h1>Loading...</h1>}
      <div className="row">
        <button className="btn btn-primary" onClick={handlePrevPage}>
          Prev
        </button>
        <button className="btn btn-primary" onClick={handleNextPage}>
          Next
        </button>
      </div>
      <div className="row">
        {characters.map((character) => (
          <CharacterItem character={character} key={character.id} />
        ))}
      </div>
    </div>
  );
};

CharacterList.propTypes = {
  characters: Proptypes.array.isRequired,
  isLoading: Proptypes.bool.isRequired,
  handlePrevPage: Proptypes.func.isRequired,
  handleNextPage: Proptypes.func.isRequired,
};

export default CharacterList;
