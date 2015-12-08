var React = require('react');
var ReactDOM = require('react-dom');
var PropTypes = React.PropTypes;
var coverflow = require('coverflow');

var Coverflow = React.createClass({
  componentDidMount: function () {
    coverflow.initialize(ReactDOM.findDOMNode(this), this.props);
  },
  componentDidUpdate: function() {
    coverflow.initialize(ReactDOM.findDOMNode(this), this.props);
  },
  render: function() {
    return (
      <div style={{width: '100%'}}>
        {this.props.children}
      </div>
    );
  }
});

module.exports = Coverflow;
