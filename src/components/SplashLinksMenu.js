import React, { Component } from "react";
import { connect } from "react-redux";
import { getSplashLinks } from "../actions/SplashLinksActions";
import styled from "styled-components";
import { CircularProgress } from "@material-ui/core";

const SplashLinksMenuContainer = styled.div``;

class SplashLinksMenu extends Component {
  componentDidMount() {
    this.props.dispatch(getSplashLinks());
  }
  render() {
    let listItems = "";
    if (this.props.hasListItems) {
      listItems = this.props.listItems.map((node, index) => {
        return (
          <li key={index}>
            <a
              href={node.href}
              target="_blank"
              rel="noopener noreferrer"
              title={node.title}
            >
              {node.linkText}
            </a>
          </li>
        );
      });
    }
    return (
      <SplashLinksMenuContainer id={this.props.id}>
        {this.props.loading ? (
          <div>
            <CircularProgress />
          </div>
        ) : (
          ""
        )}
        {this.props.hasListItems ? <ul>{listItems}</ul> : ""}
      </SplashLinksMenuContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    listItems: state.splashLinks.listItems,
    hasListItems: state.splashLinks.hasListItems,
    loading: state.splashLinks.loading
  };
};

export default connect(mapStateToProps)(SplashLinksMenu);
