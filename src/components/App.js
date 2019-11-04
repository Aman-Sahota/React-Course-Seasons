import React from "react";

class App extends React.Component {
  state = { lat: 0, errorMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  }
  render() {
    return (
      <div>
        latitude:{this.state.lat}
        <br />
        error:{this.state.errorMessage}
      </div>
    );
  }
}

export default App;
