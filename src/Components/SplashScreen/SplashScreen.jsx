import { useEffect } from "react";
import "./SplashScreen.css";

const SplashScreen = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 2000);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="splash-screen">

      
      <div className="splash-food">
        🍛
      </div>

      
      <h1 className="splash-title">
        DEBBY'S KITCHEN
      </h1>

     
      <p className="splash-tagline">
        Cooked with love ❤️
      </p>

    </div>
  );
};

export default SplashScreen;