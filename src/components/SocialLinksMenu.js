import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import SocialIcons from "./SocialIcons";
import DescriptiveLoader from "./DescriptiveLoader";

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
  render() {
    let listItems = "";
    if (this.props.hasListItems) {
      listItems = this.props.listItems
        .sort((a, b) => {
          return parseInt(a.weight) > parseInt(b.weight) ? 1 : -1;
        })
        .map((node, index) => {
          return (
            <a
              href={node.href}
              target="_blank"
              rel="noopener noreferrer"
              title={node.title}
              key={index}
            >
              <SocialIcons iconName={node.icon} iconSize="1.25em" />
            </a>
          );
        });
    }
    return (
      <SocialLinksMenuContainer id={this.props.id}>
        {this.props.loading ? (
          <IconContainer>
            <DescriptiveLoader
              message="Loading Social Links"
              messageColor="#FFF20075"
              animatedMessage="..."
            />
          </IconContainer>
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
    listItems: state.links.socialListItems,
    hasListItems: state.links.hasListItems,
    loading: state.links.loading
  };
};

export default connect(mapStateToProps)(SocialLinksMenu);
