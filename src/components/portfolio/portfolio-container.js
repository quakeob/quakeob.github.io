import React, { Component } from "react";

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
  // State
  // Lifecycle hooks
  constructor() {
    super();

    this.state = {
      pageTitle: "Welcome to my portfolio",
      data: [
        {title:"Ice Castles"},
        {title:"Vail Resorts"},
        {title:"Victory Ranch"}
      ]
    };
    this.handlePageTitleUpdate = this.handlePageTitleUpdate.bind(this);
  }

  PortfolioItems() {
    return this.state.data.map(item => {
      return <PortfolioItem title={item.title} />;
    })
  }

  handlePageTitleUpdate() {
    this.setState({
      pageTitle: "Somthing else"
    })
  }

  render() {
    return (
      <div>
        <h2>{this.state.pageTitle}</h2>

      {this.PortfolioItems()}

      <hr/>
      <button onClick={this.handlePageTitleUpdate}>Change Title</button>
      </div>
    );
  }
}