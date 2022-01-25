import React, { Component } from "react";
import axios from "axios";

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
  // State
  // Lifecycle hooks
  constructor() {
    super();

    this.state = {
      pageTitle: "Welcome to my portfolio",
      isLoading: false,
      data: [
        {title:"Ice Castles", category: "Tourism", slug: 'ice-castles' },
        {title:"Vail Resorts", category: "Tourism", slug: 'vail-resorts' },
        {title:"Victory Ranch", category: "Golf", slug: 'victory-ranch' }
      ]
    };
   
    this.handleFilter = this.handleFilter.bind(this);
    this.getPortfolioItems = this.getPortfolioItems.bind(this);
  }

  handleFilter(filter) {
    this.setState({
      data: this.state.data.filter(item => {
        return item.category === filter;
      })
    })
  }

  getPortfolioItems() {
    axios
      .get("https://jakedavis.devcamp.space/portfolio/portfolio_items")
      .then(response => {
        console.log("response data", response);
      })
      .catch(error => {
        console.log(error);
      });
  }

  PortfolioItems() {
    return this.state.data.map(item => {
      return <PortfolioItem title={item.title} url={"google.com"} slug={item.slug} />;
    });
  }


  render() {
    if (this.state.isLoading) {
      return <div>Loading...</div>;
    }

    this.getPortfolioItems();

    return (
      <div>
        <h2>{this.state.pageTitle}</h2>

        <button onClick={() => this.handleFilter('Tourism')}>
          Tourism
          </button>
        <button onClick={() => this.handleFilter('Golf')}>
          Golf
          </button>

      {this.PortfolioItems()}

      </div>
    );
  }
}