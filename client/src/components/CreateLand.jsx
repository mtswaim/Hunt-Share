import React from 'react';
import { withRouter } from 'react-router-dom';

function CreateLand(props) {
  return (
    <div className="create-form" >
      <h2>Add land</h2>
      <form onSubmit={props.newLand}>
        <p>Photo Link:</p>
        <input
          type="text"
          name="photo"
          value={props.landForm.photo}
          onChange={props.handleFormChange} />
        <p>State that contains Property</p>
        <input
          type="text"
          name="state"
          value={props.landForm.state}
          onChange={props.handleFormChange} />
        <p>County that contains Property</p>
        <input
          type="text"
          name="county"
          value={props.landForm.county}
          onChange={props.handleFormChange} />
        <button>Submit</button>
      </form>
    </div >
  )
}

export default withRouter(CreateLand);