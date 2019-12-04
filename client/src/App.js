import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import LandView from './components/LandView';
import LandPage from './components/LandPage';
import CreateLand from './components/CreateLand';
import Login from './components/Login';
import Register from './components/Register';
import {
  createLand,
  readAllLand,
  updateLand,
  destroyLand,
  loginUser,
  registerUser,
  verifyUser
} from './services/api-helper'
import './App.css';
import Header from './components/Header';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      land: [],
      landForm: {
        state: "",
        county: "",
        photo: ""
      },
      currentUser: null,
      authFormData: {
        username: "",
        email: "",
        password: ""
      }
    };
  }

  async componentDidMount() {
    this.getLand();
    const currentUser = await verifyUser();
    if (currentUser) {
      this.setState({ currentUser })
    }
  }

  getLand = async () => {
    const land = await readAllLand();
    this.setState({
      land
    })
  }

  newLand = async (e) => {
    e.preventDefault();
    const land = await createLand(this.state.landForm);
    this.setState(prevState => ({
      land: [...prevState.land, land],
      landForm: {
        state: "",
        county: "",
        photo: ""
      }
    }))
  }

  editLand = async () => {
    const { landForm } = this.state
    await updateLand(landForm.id, landForm);
    this.setState(prevState => (
      {
        land: prevState.land.map(land => {
          return land.id === landForm.id ? landForm : land
        }),
      }
    ))
  }

  deleteLand = async (id) => {
    await destroyLand(id);
    this.setState(prevState => ({
      land: prevState.land.filter(land => land.id !== id)
    }))
  }

  handleFormChange = (e) => {
    const { state, value } = e.target;
    this.setState(prevState => ({
      landForm: {
        ...prevState.landForm,
        [state]: value
      }
    }))
  }

  mountEditForm = async (id) => {
    const lands = await readAllLand();
    const land = lands.find(el => el.id === parseInt(id));
    this.setState({
      landForm: land
    });
  }

  resetForm = () => {
    this.setState({
      landForm: {
        state: "",
        county: "",
        photo: ""
      }
    })
  }

  // -------------- AUTH ------------------

  handleLoginButton = () => {
    this.props.history.push("/login")
  }

  handleLogin = async () => {
    const currentUser = await loginUser(this.state.authFormData);
    this.setState({ currentUser });
  }

  handleRegister = async (e) => {
    e.preventDefault();
    const currentUser = await registerUser(this.state.authFormData);
    this.setState({ currentUser });
  }

  handleLogout = () => {
    localStorage.removeItem("authToken");
    this.setState({
      currentUser: null
    })
  }

  authHandleChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      authFormData: {
        ...prevState.authFormData,
        [name]: value
      }
    }));
  }

  render() {
    return (
      <div className="App" >
        <Header
          handleLoginButton={this.handleLoginButton}
          handleLogout={this.handleLogout}
          currentUser={this.state.currentUser}
        />
        <Route exact path="/login" render={() => (
          <Login
            handleLogin={this.handleLogin}
            handleChange={this.authHandleChange}
            formData={this.state.authFormData} />)} />
        <Route exact path="/register" render={() => (
          <Register
            handleRegister={this.handleRegister}
            handleChange={this.authHandleChange}
            formData={this.state.authFormData} />)} />
        <Route
          exact path="/"
          render={() => (
            <LandView
              land={this.state.land}
              landForm={this.state.landForm}
              handleFormChange={this.handleFormChange}
              newLand={this.newLand} />
          )}
        />
        <Route
          path="/new/land"
          render={() => (
            <CreateLand
              handleFormChange={this.handleFormChange}
              landForm={this.state.landForm}
              newLand={this.newLand} />
          )} />
        <Route
          path="/land/:id"
          render={(props) => {
            const { id } = props.match.params;
            const land = this.state.land.find(el => el.id === parseInt(id));
            return <LandPage
              id={id}
              land={land}
              handleFormChange={this.handleFormChange}
              mountEditForm={this.mountEditForm}
              editLand={this.editLand}
              landForm={this.state.landForm}
              deleteLand={this.deleteLand} />
          }}
        />
      </div>
    );
  }
}

export default withRouter(App);