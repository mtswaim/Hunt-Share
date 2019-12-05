import React, { Component } from 'react';
import EditLand from './EditLand'
import { Route } from 'react-router-dom';
import { withRouter } from 'react-router';

class LandPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdit: false
    }
  }

  async componentDidMount() {
    this.props.mountEditForm(this.props.id);
  }

  render() {
    const { land } = this.props;
    return (
      <div className="land-page">
        {land === undefined ? <h2>Loading . . .</h2> : (
          <div>
            <h1>{land.county} County {land.state}</h1>
            <img alt={land.state} src={land.image_url} />
            {this.state.isEdit ?
              <Route path={'/lands/:id/edit'} render={() => (
                <EditLand
                  handleFormChange={this.props.handleFormChange}
                  handleSubmit={(e) => {
                    e.preventDefault();
                    this.props.editLand();
                    this.setState({ isEdit: false })
                    this.props.history.push(`/lands/${this.props.landForm.id}`)
                  }}
                  landForm={this.props.landForm} />
              )} />
              :
              <>
                <button onClick={() => {
                  this.setState({
                    isEdit: true
                  })
                  this.props.history.push(`/lands/${land.id}/edit`)
                }}>Edit</button>
                <button onClick={() => {
                  this.props.deleteLand(land.id);
                  this.props.history.push('/')
                }}>Delete</button>
              </>
            }
          </div>)}
      </div>)
  }
}

export default withRouter(LandPage);