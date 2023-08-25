import { useState } from "react";

const ContactForm = () => {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [message, setMessage] = useState("");

  const [formData, setFormData] = useState({
    message: "",
    email: "",
    name: "",
  });

  console.log(formData);

  // const handleNameChange = (event) => {
  //   setName(event.target.value);
  // }

  // const handleEmailChange = (event) => {
  //   setEmail(event.target.value);
  // }

  // const handleMessageChange = (event) => {
  //   setMessage(event.target.value);
  // }

  // const handleChange = (event) => {
  //   console.log("handleChange", event.target.value, event.target.name);

  //   switch (event.target.name) {
  //     case "name":
  //       setName(event.target.value);
  //       break;
  //     case "email":
  //       setEmail(event.target.value);
  //       break;
  //     case "message":
  //       setMessage(event.target.value);
  //       break;
  //     default:
  //       break;
  //   }
  // };

  const handleChange = (event) => {
    console.log("handleChange", event.target.value, event.target.name);

    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit", formData);

    alert(JSON.stringify(formData));

    // aca enviaríamos el formulario
    // fetch('https://miservidor.com/api/contact', {
    //   method: 'POST',
    //   body: JSON.stringify(formData),
    // }).then((response) => {
    //   console.log(response);

    //   // mensaje de exito
    // })

    // limpiar el formulario
    handleReset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Nombre</label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="message">Mensaje</label>
        <textarea
          value={formData.message}
          name="message"
          id="message"
          onChange={handleChange}
        />
      </div>

      <button type="submit">Enviar</button>
    </form>
  );
};

export default ContactForm;
