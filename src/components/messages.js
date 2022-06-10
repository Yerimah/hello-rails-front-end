import React from 'react';
import { Component } from 'react';
import axios from 'axios';

class Messages extends Component {
    constructor(props) {
      super(props);
      this.state = {
        messages: [],
      };
    }
  
    componentDidMount() {
      this.loadMessages();
    }
  
    loadMessages() {
      axios
        .get('http://localhost:3000/api/v1/messages')
        .then((res) => {
          this.setState({ messages: res.data });
        })
        .catch((error) => console.log(error));
    }
  
    render() {
      const { messages } = this.state;
      return (
        <div>
          <div className="taskContainer" />
          <div className="wrapItems">
            <ul className="listItems">
              {messages.slice(0, 1).map((message) => (
                <li className="item" message={message} key={message.id}>
                  <span className="itemDisplay">{message.greeting}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      );
    }
  }

export default Messages;
