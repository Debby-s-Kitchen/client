import { useState } from "react";
import DashBoard from "../../../Pages/DashBoard";
import SplashScreen from "../../../Components/SplashScreen/SplashScreen";

function DashboardWithSplash() {
  const [showSplash, setShowSplash] = useState(true);

  return showSplash ? (
    <SplashScreen onFinish={() => setShowSplash(false)} />
  ) : (
    <DashBoard />
  );
}

export default DashboardWithSplash;