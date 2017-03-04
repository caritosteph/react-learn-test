import React, { Component } from 'react';
import { Link } from 'react-router';

class HomePage extends Component {
  render() {
    return (
      <div className = "jumbotron">
        <h1>Pluralsight Adminitration</h1>
        <p>React, Redux and React Router in ES& for ultra-responsive web apps.</p>
        <Link to="about" className = "btn btn-primary btn-lg" />
      </div>
    );
  }
}
HomePage.propTypes = {

};
export default HomePage;
