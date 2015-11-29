import React, { Component }  from 'react';

import { Article } from './Article';
import { Sidebar } from './Sidebar';

export class ReaderContainer extends Component {
  render() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-9">
                    <Article/>
                </div>
                <div className="col-sm-3">
                    <Sidebar/>
                </div>
            </div>
        </div>
    );
  }
}
