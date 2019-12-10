import React, { Component } from 'react'

export default class CreateHunt extends Component {
  state = {
    huntData: {
      review: '',
      image_url: ''
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState(prevState => ({
      huntData: {
        ...prevState.huntData,
        [name]: value
      }
    }))
  }

  render() {
    return (
      <div id='create-box'>
        <form id='create-hunt' onSubmit={(e) => {
          e.preventDefault()
          this.props.createHunt(this.props.currentUser.id, this.props.landId, this.state.huntData)
          this.setState({ review: '' })
        }}>
          <textarea autoFocus placeholder='Write Review Here' id='review-area' name='review' value={this.state.huntData.review} onChange={this.handleChange}>
          </textarea>
          <button id='submit-review'>Submit Review</button>
        </form>
      </div >
    )
  }
}
