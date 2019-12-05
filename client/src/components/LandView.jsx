import React from 'react';
import { withRouter } from 'react-router';

function LandView(props) {
  return (
    <div className="land-container">
      {props.land &&
        Array.from(new Set(props.land.map(land => land.state))).map(state => (
          <div className="state-container">
            <h3>{state}</h3>
            {
              props.land.map(land => (
                <>
                  {
                    land.state === state ? (
                      <div
                        key={land.id}
                        className="land-card"
                        onClick={(e) => {
                          props.history.push(`/lands/${land.id}`);
                          window.scrollTo(0, 0);
                        }}>
                        <img src={land.image_url} />
                      </div>
                    ) : <> </>
                  }
                </>
              ))
            }
          </div>
        ))}
      <div
        className="add-card"
        onClick={() => {
          props.history.push('/new/land');
          window.scrollTo(0, 0);
        }}>
        <h3>Add A Property</h3>
        <img
          alt="Create a new land"
          src="https://image.flaticon.com/icons/png/512/14/14980.png"
          className="plus-sign" />
      </div>
    </div>
  )
}

export default withRouter(LandView)