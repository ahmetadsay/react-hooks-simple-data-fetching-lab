import React, { useState, useEffect } from "react";

function App() {
  const [imageUrl, setImageUrl] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchDogImage = async () => {
      try {
        const response = await fetch("https://dog.ceo/api/breeds/image/random");
        const data = await response.json();
        setImageUrl(data.message);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchDogImage();
  }, []);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <img src={imageUrl} alt="A Random Dog" />
      )}
    </div>
  );
}

export default App;

