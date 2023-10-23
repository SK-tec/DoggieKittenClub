import { useEffect, useState } from "react";
import axios from "axios";
import DisplayCard from "./DisplayCard";

const DogBreed = () => {
  const [dogBreedArray, setDogBreedArray] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/dog")
      .then((res) => {
        setDogBreedArray(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <>
      <div className="container d-flex justify-content-center">
        <div className="container  row row-cols-1 row-cols-sm-2 row-cols-md-4">
          {dogBreedArray.map((dog, index) => (
            <DisplayCard key={index} dog={dog} />
          ))}
        </div>
      </div>
    </>
  );
};

export default DogBreed;
