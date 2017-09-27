import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchMessages } from '../actions';
import Message from '../components/message';
import MessageForm from '../containers/message_form';

class MessageList extends Component {
  componentWillMount() {
    this.fetchMessages();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.channelFromParams !== nextProps.channelFromParams) {
      this.props.fetchMessages(nextProps.channelFromParams);
    }
  }

  componentDidMount() {
    // this.refresher = setInterval(this.fetchMessages, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.refresher);
  }

  componentDidUpdate() {
    this.list.scrollTop = this.list.scrollHeight;
  }

  fetchMessages = () => {
    this.props.fetchMessages(this.props.channelFromParams);
  }

  render () {
    return (
      <div className="channel-container">
        <div className="channel-title">
          <span>Channel #{this.props.channel}</span>
        </div>
        <div className="channel-content" ref={list => this.list = list}>
          {
            this.props.messages.map((message) => {
              return <Message key={message.id} {...message} />;
            })
          }
        </div>
        <MessageForm channelFromParams={this.props.channelFromParams} />
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    messages: state.messages
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchMessages }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
