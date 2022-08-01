import React, { useState, useEffect } from "react";
import ImageCard from "./components/ImageCard";
import ImageSearch from "./components/ImageSearch";
import SyncLoader from "react-spinners/SyncLoader";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1250);
    fetch(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [term]);
  return (
    <>
      {loading ? (
        <section className="w-full flex flex-col h-screen items-center justify-center bg-gray-100">
          <h1 className="bg-gradient-to-l from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-start text-4xl font-black tracking-wide text-transparent curser-pointer mb-4">
            PhotoGallery
          </h1>

          {term.length === 0 ? (
            ""
          ) : (
            <div className="text-xl text-gray-900 font-bold mb-6">
              Searching:{" "}
              <span className="text-gray-800 font-medium tracking-tight capitalize">
                {term}
              </span>
            </div>
          )}
          <SyncLoader color="#0ea5e9" loading={loading} size={10} />
        </section>
      ) : (
        <div className="container mx-auto max-w-4xl">
          <h1 className="bg-gradient-to-l from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-center text-4xl py-1 font-black tracking-wide text-transparent cursor-pointer">
            PhotoGallery
          </h1>
          <ImageSearch searchText={(text) => setTerm(text)} />
          {!isLoading && images.length === 0 && (
            <img
              className="object-cover mx-auto w-fit"
              src="/no-data.svg"
              alt="noData"
            />
          )}
          {isLoading ? (
            <h1 className="text-6xl text-center mx-auto mt-32">Loading...</h1>
          ) : (
            <div className="grid grid-col-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mx-2 items-center justify-center">
              {images.map((image) => (
                <ImageCard key={image.id} image={image} />
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default App;
