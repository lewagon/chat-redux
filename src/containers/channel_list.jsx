import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchMessages } from '../actions/index';
import { Link } from 'react-router-dom';

class ChannelList extends Component {
  renderChannel = (channel) => {
    return (
      <li
        key={channel}
        className={channel === this.props.channel ? 'active' : null}
      >
        <Link to={`/${channel}`}>
          #{channel}
        </Link>
      </li>
    );
  }

  render() {
    return (
      <div className="channels-container">
        <span>Redux Chat</span>
        <ul>
          {this.props.channels.map(this.renderChannel)}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    channels: state.channels
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchMessages }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);
