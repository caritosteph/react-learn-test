import React, {Component, PropTypes} from 'react';
import Header from './common/Header';

class App extends Component {
  render() {
    return (
      <div className = "container-fluid">
        <Header />
        {/*{this.props.children}*/}
        {React.cloneElement(this.props.children, this.props)}
      </div>
    );
  }
}
App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
