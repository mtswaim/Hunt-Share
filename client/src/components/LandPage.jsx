import React, { Component } from 'react';
import EditLand from './EditLand'
import { postHunt, getHunts, getOneHunt, deleteHunt } from '../services/api-helper'
import { Route } from 'react-router-dom';
import { withRouter } from 'react-router';
import HuntList from './HuntList'
import CreateHunt from './CreateHunt'

class LandPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdit: false,
      hunt: []
    }
  }

  async componentDidMount() {
    this.props.mountEditForm(this.props.id);
  }

  destroyHunt = async (landId, reviewId) => {
    await deleteHunt(landId, reviewId)
    this.setState(prevState => ({
      reviews: prevState.reviews.filter(review => {
        return review.id !== reviewId
      })
    }))
  }



  createHunt = async (userId, landId, huntData) => {
    const newHunt = await postHunt(userId, landId, huntData)
    this.setState(prevState => ({
      hunt: [...prevState.hunt, newHunt]
    }))
  }

  render() {
    const { land } = this.props;
    return (
      <div className="land-page">
        {land === undefined ? <h2>Loading . . .</h2> : (
          <div>
            <h1>{land.county} County {land.state}</h1>
            <img alt={land.state} src={land.image_url} />
            <CreateHunt
              currentUser={this.props.currentUser}
              landId={this.props.landId}
              createHunt={this.createHunt}
            />
            <HuntList
              hunts={this.props.hunts}
              currentLand={this.props.currentLand}
              currentUser={this.props.currentUser}
              destroyHunt={this.destroyHunt}
            />
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
                <a className="edit" onClick={() => {
                  this.setState({
                    isEdit: true
                  })
                  this.props.history.push(`/lands/${land.id}/edit`)
                }}>Edit</a>
                <a className="delete" onClick={() => {
                  this.props.deleteLand(land.id);
                  this.props.history.push('/')
                }}>Delete</a>
              </>
            }
          </div>)}
      </div>)
  }
}

export default withRouter(LandPage);