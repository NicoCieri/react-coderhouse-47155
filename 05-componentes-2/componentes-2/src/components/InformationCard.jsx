const InformationCard = ({ name, age, details, hobbies, handleClick }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>Edad: {age}</p>
      <p>Profesión: {details.profession}</p>
      <ul>
        {hobbies.map((hobbie, index) => (
          <li key={index}>{hobbie}</li>
        ))}
      </ul>
      <button onClick={handleClick}>Haz click</button>
    </div>
  );
};

export default InformationCard;
