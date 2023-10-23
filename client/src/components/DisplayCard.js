const DisplayCard = ({ catDetails }) => {
  console.log(catDetails);
  return (
    <>
      <div className="col mt-3  ">
        <div className="card h-100 ">
          <img
            src={catDetails?.image?.url}
            className="card-img-top"
            alt="..."
            style={{ height: "100%" }}
          />
          <div className="card-body d-flex flex-column">
            <p className="card-text">{catDetails?.name}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DisplayCard;
