import React, { Component } from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { Button } from "react-bootstrap";

class Description extends Component {
	render() {

    //  const {titre,trailer} = this.props
        const newstate=this.props.movieList.find(
			el => el.id === this.props.match.params.id 
        )
        console.log(newstate)
		// console.log(titre);
		return (
			<div>
				<Link to="/">
					<Button>return</Button>
				</Link>
				<div>
					<h1 > {newstate.titre} </h1>
					<div>
						
						<iframe src={newstate.trailer}></iframe>
					</div>
				</div>
			</div>
		);
	}
}
const mapStateToProps = state => {
	return {
		movieList: state.listfilm
	};
};

export default connect(mapStateToProps)(Description);