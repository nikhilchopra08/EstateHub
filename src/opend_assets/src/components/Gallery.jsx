import React, { useEffect, useState } from "react";
import Item from "./Item";
import { Principal } from "@dfinity/principal";
import Button from "./Button";

function Gallery(props) {
  const [items, setItems] = useState();

  function fetchNFTs() {
    if (props.ids != undefined) {
      setItems(
        props.ids.map((NFTId) => (
          <>
                 <div className="col-md-4 mb-2 mr-8" key={NFTId.toText()}>
          <Item id={NFTId} key={NFTId.toText()} role={props.role} />
          </div>
          </>
        ))
      );
    }
  }

  useEffect(() => {
    fetchNFTs();
  }, []);

  return (
    <div className="gallery-view">
      <h3 className="makeStyles-title-99 Typography-h3">{props.title}</h3>
      <div className="disGrid-root disGrid-container disGrid-spacing-xs-2">
        <div className="disGrid-root disGrid-item disGrid-grid-xs-12">
          <div className="disGrid-root disGrid-container disGrid-spacing-xs-5 disGrid-justify-content-xs-center">
            {items}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
