import React, { Component } from "react";
import { Modal, Line } from "../../ui/atoms";
import { PrefItem } from "../../ui/organisms";
import { connect } from "react-redux";
import { SET_SEND_TYPE } from "../../redux/actions";

class SendType extends Component {
  constructor(props) {
    super(props);

    this.senderType = this.senderType.bind(this);
  }

  senderType(evt) {
    const { value } = evt.target;
    this.props.dispatch({ type: SET_SEND_TYPE, payload: value });
  }

  render() {
    return (
      <Modal w="140px" h="70px" bg="#efefef" prefGroup>
        <input
          type="radio"
          name="sendType"
          id="chat"
          value="chat"
          onChange={this.senderType}
        />
        <PrefItem htmlFor="chat">
          <i className="fas fa-comments" />
        </PrefItem>
        <Line vertical />
        <input
          type="radio"
          name="sendType"
          id="mail"
          value="mail"
          onChange={this.senderType}
        />
        <PrefItem htmlFor="mail">
          <i className="fas fa-envelope" />
        </PrefItem>
      </Modal>
    );
  }
}

export default connect()(SendType);