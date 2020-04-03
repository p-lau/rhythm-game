import React from "react";
import Spinner from "react-bootstrap/Spinner";

const Loading = () => {
  return(
      <div className={'page'}>
          <header>
              <h1>Loading...</h1>
              <h1><Spinner animation="border" variant="light" /></h1>
          </header>
      </div>
  )
};

export default Loading;