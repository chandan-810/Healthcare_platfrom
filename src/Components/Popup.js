import React from "react";

const Popup = (props) => {
  console.log("chlaa ", props.isPopupOpen);
  if (props.isPopupOpen) {
    return (
      <div>
        <button
          onClick={() => {
            props.setIsPopupOpen(false);
          }}
        >
          close
        </button>
        {props.text}
      </div>
    );
  }
  return "";
};

export default Popup;
