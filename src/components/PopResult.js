import React from "react";

function PopResult(props) {
  console.log(props);
  return (
    <div className="main">
      <div className="container">
        <div className="centered">
          <div className="cityResult">
            <h4>{props.location.state.valueInput}</h4>
          </div>
          <div className="population">
            <div>Population</div>
            <h2>{props.location.state.population}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopResult;
