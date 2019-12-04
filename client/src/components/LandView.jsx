import React from 'react';
import { withRouter } from 'react-router';

function LandView(props) {
  return (
    <div className="land-container">
      {props.land.map(land => (
        <div
          key={land.id}
          className="land-card"
          onClick={(e) => {
            debugger;
            props.history.push(`/lands/${land.id}`);
            window.scrollTo(0, 0);
          }}>
          <img alt={land.state} src={land.photo} />
          <h3>
            <p>{land.state}</p>
          </h3>
        </div>
      ))}
      <div
        className="land-card"
        onClick={() => {
          props.history.push('/new/land');
          window.scrollTo(0, 0);
        }}>
        <img
          alt="Create a new land"
          src="https://assets.bwbx.io/images/users/iqjWHBFdfxIU/ilVduEe02Br4/v0/1000x-1.jpg"
          className="plus-sign" />
        <h3>Add new land</h3>
      </div>
    </div>
  )
}

export default withRouter(LandView)