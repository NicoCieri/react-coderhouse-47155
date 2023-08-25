import { useEffect } from "react";

const BackgroundChanger = () => {
  useEffect(() => {
    const changeBackground = () => {
      let newColor = "";

      if (window.innerWidth <= 600) newColor = "lightCoral";
      else if (window.innerWidth <= 800) newColor = "lightGreen";
      else if (window.innerWidth <= 1000) newColor = "lightBlue";
      else newColor = "lightGray";

      console.log("scroll", window.innerWidth, newColor);

      document.body.style.backgroundColor = newColor;
    };

    window.addEventListener("scroll", changeBackground);

    // changeBackground();

    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  return <div style={{ height: "4000px" }}>BackgroundChanger</div>;
};

export default BackgroundChanger;
