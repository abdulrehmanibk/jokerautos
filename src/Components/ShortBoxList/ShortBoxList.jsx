import React from "react";
import './ShortBoxList.css';



const ShortBoxList = ({children, heading, headpara, styles}) => {

  return (
    <>
      <div className="ShortBoxList_container" style={styles}>
        <h1>{heading}</h1>
        <p className="headpara">{headpara}</p>
        <ul className="ShortBoxList_list_container">
            {children}
        </ul>
      </div>
    </>
  );
};

export default ShortBoxList;
