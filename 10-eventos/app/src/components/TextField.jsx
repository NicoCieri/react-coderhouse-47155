import { useState } from "react";

const TextField = () => {
  const [text, setText] = useState("");

  console.log("text:", text);

  const handleChange = (event) => {
    console.log("handleChange", event.target.value);

    setText(event.target.value);
  };

  const handleKeyDown = (event) => {
    console.log("handleKeyDown", event.key);

    const vowels = "aeiou";

    if (vowels.includes(event.key.toLowerCase())) {
      event.preventDefault();
    }
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default TextField;
