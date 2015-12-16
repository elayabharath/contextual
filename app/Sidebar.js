var React = require('react');
var People = require('./People.js');
var Interest = require('./Interest.js');

var ReaderContainer = React.createClass({
    render: function() {
        return (
            <div className="sidebar" style={{height: "100%"}}>
                <p className="sidebar-title">Key People</p>
                <div>
        	        {this.props.people.map((keyword, index) => (
        	        	<People key={index} name={keyword.name} id={index+keyword.name} />
        	        ))}
              	</div>
                <p className="sidebar-title">Interests</p>
                <div>
                    {this.props.interests.map((keyword, index) => (
                        <Interest key={index} name={keyword.name} id={index+keyword.name} />
        	        ))}
                </div>
          	</div>
        );
    }
});

module.exports = ReaderContainer;
