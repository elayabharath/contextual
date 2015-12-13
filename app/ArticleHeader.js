var React = require('react');

var ArticleHeader = React.createClass({

	render: function() {
        return (
            <div className="article-header" style={{backgroundImage: 'url('+this.props.image+')', backgroundSize: 'cover'}}>
                <div style={{background: 'rgba(0, 0, 0, 0.6)'}}>
                    <div style = { {textAlign: "center", fontSize: "22px" } }>{this.props.header}</div>
                    <div style = { {textAlign: "center", fontSize: "14px", fontStyle: "italic"} }>{this.props.description}</div>
                </div>
            </div>
        );
	}

});

module.exports = ArticleHeader;
