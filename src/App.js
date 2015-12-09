var React = require('react');
var ReactDOM = require('react-dom');
var PropTypes = React.PropTypes;
var coverflow = require('coverflow');
Object.is = require('object-is');

var Coverflow = React.createClass({
  componentDidMount: function () {
    coverflow.initialize(ReactDOM.findDOMNode(this), this.props);
    coverflow.setActive(this.props.active);
  },
  componentDidUpdate: function() {
    coverflow.initialize(ReactDOM.findDOMNode(this), this.props);
    coverflow.setActive(this.props.active);
  },
  shouldComponentUpdate: function(nextProps) {
    if(Object.is(this.props, nextProps)) return false;
    else {
      var temp = nextProps.active;
      nextProps.active = this.props.active;
      if(Object.is(this.props, nextProps)) {
        coverflow.setActive(temp);
        return false;
      } else return true;
    }
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
