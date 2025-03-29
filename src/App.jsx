import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const dataloading = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 4000);
    };
    dataloading();
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="flex justify-center items-center h-screen space-x-2">
          <div className="text-xl flex space-x-2">
            {"T2Dinner".split("").map((char, index) => (
              <span
                key={index}
                className="text-4xl font-bold"
                style={{
                  display: "inline-block",
                  animation: `topBounce 1.5s ease-in-out ${index * 0.2}s infinite`,
                  color: index < 3 ? "red" : "Black",
                  fontSize:index==1 ? "100px" : ""
                }}
              >
                {char}
              </span>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <Header />
          <Body />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
