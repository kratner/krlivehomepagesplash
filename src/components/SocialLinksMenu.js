import React, { Component } from "react";
import { connect } from "react-redux";
import { getSocialLinks } from "../actions/SocialLinksActions";
import styled from "styled-components";
import { CircularProgress } from "@material-ui/core";
import SocialIcons from "./SocialIcons";

const SocialLinksMenuContainer = styled.div``;
const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: #ffffff25;
  padding: 0.25em;
  border-radius: 1em 0 0 1em;
  box-shadow: 0.1em 0.2em 0.15em 0.1em #000000;
  width: 100%;
  @media (max-width: 640px) {
    border-radius: 0;
  }
`;

class SocialLinksMenu extends Component {
  componentDidMount() {
    this.props.dispatch(getSocialLinks());
  }
  render() {
    let listItems = "";
    if (this.props.hasListItems) {
      listItems = this.props.listItems.map((node, index) => {
        return (
          //<div key={index}>
          <a
            href={node.href}
            target="_blank"
            rel="noopener noreferrer"
            title={node.title}
            key={index}
          >
            <SocialIcons iconName={node.icon} iconSize="1.25em" />
          </a>
          //</div>
        );
      });
    }
    return (
      <SocialLinksMenuContainer id={this.props.id}>
        {this.props.loading ? (
          <div>
            <CircularProgress />
          </div>
        ) : (
          ""
        )}
        {this.props.hasListItems ? (
          <IconContainer>{listItems}</IconContainer>
        ) : (
          ""
        )}
      </SocialLinksMenuContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    listItems: state.socialLinks.listItems,
    hasListItems: state.socialLinks.hasListItems,
    loading: state.socialLinks.loading
  };
};

export default connect(mapStateToProps)(SocialLinksMenu);
