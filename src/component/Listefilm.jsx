import React, { useState } from "react";
// import { map } from "lodash";
import Carte from "./Carte";
import '../App.css';
import { connect } from "react-redux";
import { Button } from "react-bootstrap";
import Modal from "./Modal";
import Addmovies from "./Addmovies";
import { del } from "../action/action";
import Recherche from "./Recherche";
import Rate from "./Rate";

const mapStateToProps = state => ({
  state: state.listfilm
});
function Listefilm(props) {
  const [show, setShow] = useState(false);
  const [edit, setEdit] = useState(false);
  const [film, setFilm] = useState({});
  const toggleShow = () => setShow(!show);
  const toggleEdit = () => setEdit(!edit);
  console.log(props.state);
  // fn ajout modal+addFlim
  const onAddMovie = () => {
    toggleShow();
  };
  const onShowModal = () => {
    return (
      <Modal show={show} title="add New movie">
        <Addmovies handleClose={toggleShow} edit={edit} />
      </Modal>
    );
  };
  // fn Edit modal+addFilm(+propFilm)
  const editMovie = film => {
    setFilm(film);
    toggleEdit();
  };
  // const supmovie =(key)=>{

  // }

  const onEditModal = () => {
    return (
      <Modal show={edit} title="Edit movie">
        <Addmovies handleClose={toggleEdit} film={film} edit={edit} />
      </Modal>
    );
  };
  const [titre, settitre] = useState("");

  const result = titrerecup => {
    settitre(titrerecup);
  };

  const [valinit, setvalinit] = useState(1);
  const recupRate = y => {
    setvalinit(y);
  };
  console.log(props.state);

  return (
    <div>
      <div className="nav-bar">
      <Recherche result={result} value={titre} />

      <Rate className="rate-container" rate={valinit} recupRate={(rate)=>setvalinit(rate)} />
      </div>
      <div className="carte">
      {props.state
        .filter(
          x =>
            x.titre.toUpperCase().includes(titre.toUpperCase().trim()) &&
            x.rate >= valinit
        )
        .map( (el, key) => ( 
          <Carte
            key={el.titre}
            el={el}
            onEdit={() => editMovie({ film: el, id: key })}
            sup={() => props.supmovie(key)}
          /> 
        ))}
        </div>
        <div className="button-container">
      <Button 
      variant="primary"
       onClick={onAddMovie}
       className="button"
       >
       ADD new film   <br/>   
            +
      </Button>
      </div>
      {onShowModal()}
      {onEditModal()}
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  supmovie: id => dispatch(del(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Listefilm);

// {arrayfilm
//   .filter(
//     x =>
//       x.Name.toUpperCase().includes(titre.toUpperCase().trim()) && x.Rate >= valinit)
//   .map((el, i) => (
//     <Card info={el} />
//   ))}
