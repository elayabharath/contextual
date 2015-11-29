import React, { Component }  from 'react';

class Reader extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h1>
        Hello world!
      </h1>
    );
  }
}

export class App extends Component {
  render() {
    return (
      <div>
        <Reader/>
      </div>
    );
  }
}
