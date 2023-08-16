import Proptypes from "prop-types";

const CharacterItem = ({ character }) => {
  return (
    <div className="col-6 col-md-4 col-lg-3">
      <div className="card box-shadow rounded mb-4">
        <img
          src={character.image}
          alt={character.name}
          className="card-img-top rounded "
        />
        <div className="card-body">
          <h5 className="card-title">{character.name}</h5>
          <p className="card-text">
            <span className="badge text-bg-primary me-2">
              {character.species}
            </span>
            <span className="badge text-bg-secondary me-2">
              {character.origin.name}
            </span>
            <span className="badge text-bg-info">{character.status}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

CharacterItem.propTypes = {
  character: Proptypes.shape({
    id: Proptypes.number.isRequired,
    name: Proptypes.string.isRequired,
    status: Proptypes.string.isRequired,
    species: Proptypes.string.isRequired,
    image: Proptypes.string.isRequired,
    origin: Proptypes.shape({
      name: Proptypes.string.isRequired,
    }),
  }).isRequired,
};

export default CharacterItem;
