var React = require('react');
var PropTypes = React.PropTypes;
var coverflow = require('coverflow');
var isEquivalent = require('./isEquivalent.lib.js');

var Coverflow = React.createClass({
  activateCoverflow: function () {
    if (this.props.children.length != 0 && this.node) {
      coverflow.initialize(this.node, this.props);
      coverflow.setActive(parseInt(this.props.active));
    }
  },
  componentDidUpdate: function() {
    this.activateCoverflow()
  },
  shouldComponentUpdate: function(nextPropsReadOnly) {
    var nextProps = {};
    Object.assign(nextProps, nextPropsReadOnly);
    if(isEquivalent(this.props, nextProps)) return false;
    else {
      var temp = parseInt(nextProps.active);
      nextProps.active = this.props.active;
      if(isEquivalent(this.props, nextProps)) {
        if (temp >= 0 && temp < this.props.children.length) coverflow.setActive(temp);
        return false;
      } else return true;
    }
  },
  render: function() {
    return (
      <div style={{width: '100%'}} onLoad={this.activateCoverflow}
           ref={node => this.node = node}>
        {this.props.children}
      </div>
    );
  }
});

module.exports = Coverflow;
