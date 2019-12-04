import React from 'react';
import { withRouter } from 'react-router-dom';

function EditLand(props) {
  return (
    <div>
      <h3>Edit Land</h3>
      <form onSubmit={props.handleSubmit}>
        <p>Photo Link:</p>
        <input
          type="text"
          name="image"
          value={props.landForm.image_url}
          onChange={props.handleFormChange} />
        <p>State that Contains Property</p>
        <input
          type="text"
          name="state"
          value={props.landForm.state}
          onChange={props.handleFormChange} />
        <p>County that Contains Property</p>
        <input
          type="text"
          name="county"
          value={props.landForm.county}
          onChange={props.handleFormChange} />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default withRouter(EditLand);