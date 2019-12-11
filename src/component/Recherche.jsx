import React, { Component } from "react";
// // import { rech } from "../action/action";
// import { connect } from "react-redux";
import '../App.css';


// import "./Styles/Recherche.css";

export default class Recherche extends Component {
  state = {
    name: ""
  };
  recupNameMouvie = e => {
    const { value } = e.target;
    this.setState({
      name: value
    });
  };
//   recherche = () => {
//     this.props.result(this.state);
//   };

  render() {
    // const { name } = this.state;

    return (
      <div className="search-container">
        <input
          className="input-search"
          type="text"
          placeholder="Type movie name to search"
          onChange={(e)=> {this.props.result(e.target.value)}}
          value={this.props.value}
        />
        <button className="button-search" onClick={this.recherche}>
          Search
        </button>
        <span className="rate-min">Minmum rating :</span>
      </div>
    );
  }
}


// const mapStateToProps = state => ({
//     state: state.listfilm
//   });
  
//    connect(mapStateToProps)(Recherche);

 