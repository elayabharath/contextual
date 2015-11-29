import React, { Component }  from 'react';

class ReaderContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-9">News asdasd</div>
                <div className="col-sm-3">Side bar</div>
            </div>
        </div>
    );
  }
}

export class App extends Component {
  render() {
    return (
      <div>
        <ReaderContainer/>
      </div>
    );
  }
}
