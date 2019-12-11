import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import { Button, Modal } from "react-bootstrap";
import { connect } from "react-redux";
import { add, edit } from "../action/action";
import "./Addmovie.css";
import uuid from 'uuid';


function Addmovies({ ajout, handleClose, edit, film, modif }) {
  const [src, setsrc] = useState("");
  const handelesrc = e => setsrc(e.target.value);

  const [titre, settitre] = useState("");
  const handlertitre = e => settitre(e.target.value);

  const [date, setdate] = useState("");
  const handlerdate = e => setdate(e.target.value);

  const [rate, setrate] = useState(1);
  const handelrate = e => setrate(e.target.value); 
  
  const [trailer,settrailer]=useState("");
  const handeltrailer = e => settrailer(e.target.value);

  useEffect(() => {
    if (film) {
      setsrc(film.film.src);
      settitre(film.film.titre);
      setdate(film.film.date);
      setrate(film.film.rate);
      settrailer(film.film.trailer);
    }
  }, [film]);
  const addfilm = () => {
    ajout({
      src: src,
      titre: titre,
      date: date,
      rate: rate,
      trailer:trailer,
      id:uuid()
    });
    handleClose();
  };
  const onSubmit = () => {
    if (edit) {
      modif(
        {
          src: src,
          titre: titre,
          date: date,
          rate: rate,
          trailer:trailer
        },
        film.id
      );
    } else {
      addfilm();
    }
  };
  return (
    <div>
      <div className="input-container">
        <label htmlFor="src">src</label>
        <input
          onChange={e => handelesrc(e)}
          value={src}
          type="text"
          placeholder="HTTP://......"
        />
        <label htmlFor="titre">titre</label>
        <input
          onChange={e => handlertitre(e)}
          type="text"
          value={titre}
          placeholder="titre"
        />
        <label htmlFor="date">date</label>
        <input
          value={date}
          onChange={e => handlerdate(e)}
          type="text"
          placeholder="date"
        />
        <label htmlFor="Rate">Rate</label>
        <input
          value={rate}
          onChange={e => handelrate(e)}
          type="Number"
          placeholder="Rate"
        />
         <label htmlFor="trailer">trailer</label>
        <input
          value={trailer}
          onChange={e => handeltrailer(e)}
          type="text"
          placeholder="trailer"
        />
      </div>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={onSubmit}>
          Save Changes
        </Button>
      </Modal.Footer>
    </div>
  );
}
// const mapDispatchToProps = dispatch =>{
//         add();
// }
const mapStateToProps = state => ({ list: state.listfilm });

const mapDispatchToProps = dispatch => ({
  ajout: payload => dispatch(add(payload)),
  modif: (payload, id) => dispatch(edit(payload, id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Addmovies);
