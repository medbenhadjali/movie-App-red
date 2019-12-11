import React from "react";
import { Link } from "react-router-dom";

import "./Card.css";
import Rate from './Rate';




export default function Carte({el, onEdit,sup}) {
    return (
        <div className="card-container">
          <div className="titre">
           <span >{el.titre}</span> <br/>
           </div>
        <div className="image-container">
          <img
          className="img-card"
            src={el.src}
            alt=""
          />
        </div>
        <div className="description-container">
          <div>
           
            <span>{el.date}</span> <br/>
            {/* <span>{el.rate}</span> <br/> */}
            <Rate rate={el.rate}/>
            <br/>
            <Link to={`/Description/${el.id}` }>

            <button className="bts" >Movie description</button>
            </Link>
            <br/>
          </div>
          <div className="button-container">
            <button className="bts" onClick={onEdit}>Edit  </button>
            <button className="bts" onClick={sup}>Remove</button>
          </div>
        </div>
      </div>
    )
}
