import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import API from "../../utils/AuthAPI";


class PrivateRoute extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Component: props.component,
      RenderComponent: props.render, 
      path: props.path
    }
  }

  componentDidMount() {
    this.authenticate();
  }

  authenticate = async () => {
    const response = await API.isAuthenticated();
    this.setState({ isAuth: response.data.isAuth })
  }


  render() {
    if (this.state.isAuth === undefined) {
      return <div>...</div> //load a thinking component here while it determines whether you're authorized to access the route
    }
    
    return (
      <Route path={this.state.path} render={(props) => (
        this.state.isAuth 
        ? <this.state.RenderComponent {...props} /> 
        : <Redirect to={{
              pathname: '/',
              state: { from: props.location }
            }} 
          /> 
        )} 
      />
    )
  }
}

export default PrivateRoute;




// const authenticated = async () => {
//   const response = await API.tryme();
//   console.log(response)
//   return response;
// }

// const PrivateRoute = ({ component: Component, ...rest }) => (
//   <Route {...rest} render={(props) => (
//       authenticated()
//       ? <Component {...props} /> 
//       : <Redirect to={{
//             pathname: '/',
//             state: { from: props.location }
//           }} 
//         /> 
//     )} 
//   />
// );