import React from "react";

function AppCards(props) {
  const { label, onClick } = props;
  return (
    <>
      <div class="row">
        <div class="">
          <div class="card shadow bg-dark ">
            <div class="card-body  ">
              <h1 class="card-title" style={{ color: "white", padding:"10px",borderRadius:"10PX" }}>
                {label}{" "}
              </h1>

              <a href="#" class="btn btn-secondary bg-success btn-large" onClick={onClick}>
                Click here
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AppCards;
