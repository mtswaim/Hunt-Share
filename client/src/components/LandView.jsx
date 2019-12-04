import React from 'react';
import { withRouter } from 'react-router';

function LandView(props) {
  return (
    <div className="land-container">
      {props.land &&
        props.land.map(land => (
          <div
            key={land.id}
            className="land-card"
            onClick={(e) => {
              props.history.push(`/lands/${land.id}`);
              window.scrollTo(0, 0);
            }}>
            <img src={land.image_url} alt={land.state} />
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
          src="https://image.flaticon.com/icons/png/512/14/14980.png"
          className="plus-sign" />
        <h3>Add new land</h3>
      </div>
    </div>
  )
}

export default withRouter(LandView)