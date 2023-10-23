import { useEffect, useState } from "react";
import DisplayCard from "./DisplayCard";
import axios from "axios";
const CatBreed = () => {
  const [catBreedArray, setCatBreedArray] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/cat")
      .then((res) => {
        console.log(res);
        setCatBreedArray(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <>
      <div className="containter d-flex justify-content-center">
        <div className="container  row row-cols-1 row-cols-sm-2 row-cols-md-4">
          {catBreedArray.map((cat, index) => (
            <DisplayCard key={index} catDetails={cat} />
          ))}
        </div>
      </div>
    </>
  );
};

export default CatBreed;
