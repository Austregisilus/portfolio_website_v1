import { useState, useEffect } from "react";
import Landing from "./page/Landing";
import Preloader from "./component/Preloader";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    //Simulate an asynchronous operation
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return <>{isLoading ? <Preloader /> : <Landing />}</>;
}

export default App;
