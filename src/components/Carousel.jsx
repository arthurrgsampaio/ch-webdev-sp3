import { useState } from "react";
import Hero1 from "../assets/images/hero.png";
import Hero2 from "../assets/images/hero2.jpg";
import Hero3 from "../assets/images/hero3.jpg";

const Carousel = () => {
  const [counter, setCounter] = useState(0);
  setTimeout(() => {
    if (counter == 2) {
      setCounter(0);
    } else {
      setCounter(counter + 1);
    }
  }, 3000);
  switch (counter) {
    case 0:
      return (
        <div style={{ position: "relative" }} className="flex-row">
          <div
            className="heroText"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
              fontSize: "11.5rem",
              display: "flex",
              justifyContent: "center",
              width: "100%",
              fontWeight: "700"
            }}
          >
            <h1 className="text-white">ASPHALT</h1>
            <h1 className="text-red-600">ACES</h1>
          </div>

          <img
            src={Hero1}
            style={{ width: "100%", height: "30rem", objectFit: "cover" }}
          />
        </div>
      );
    case 1:
      return (
        <div style={{ position: "relative" }} className="flex-row">
          <div
            className="heroText"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
              fontSize: "11.5rem",
              display: "flex",
              justifyContent: "center",
              width: "100%",
              fontWeight: "700"
            }}
          >
            <h1 className="text-white">ASPHALT</h1>
            <h1 className="text-red-600">ACES</h1>
          </div>

          <img
            src={Hero2}
            style={{ width: "100%", height: "30rem", objectFit: "cover" }}
          />
        </div>
      );
    case 2:
      return (
        <div style={{ position: "relative" }} className="flex-row">
          <div
            className="heroText"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
              fontSize: "11.5rem",
              display: "flex",
              justifyContent: "center",
              width: "100%",
              fontWeight: "700"
            }}
          >
            <h1 className="text-white">ASPHALT</h1>
            <h1 className="text-red-600">ACES</h1>
          </div>

          <img
            src={Hero3}
            style={{ width: "100%", height: "30rem", objectFit: "cover" }}
          />
        </div>
      );
  }
};

export default Carousel;
