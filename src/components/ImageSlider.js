import React, { Component } from "react";

/*
  1. shallow merge
  2. async
*/

export default class ImageSlider extends Component {
  state = {
    images: [
      "https://i.pinimg.com/236x/6f/bf/23/6fbf23ad60ad9e93dc07da807f3de379.jpg",
      "https://i.pinimg.com/236x/9b/97/d8/9b97d82b9522f12ec1a417beba4ae4b8.jpg",
      "https://i.pinimg.com/236x/3f/d4/f6/3fd4f677318258a270219b383e8d1639.jpg",
    ],
    idx: 0,
  };

  handleNext = () => {
    this.setState({ idx: this.state.idx + 1 });
  };

  handlePrev = () => {
    this.setState({ idx: this.state.idx - 1 });
  };

  render() {
    return (
      <div>
        {this.state.images[this.state.idx] ? (
          <img
            style={{ width: 200, height: 200 }}
            src={this.state.images[this.state.idx]}
            alt="kim-minju"
          />
        ) : (
          <div>image not found</div>
        )}
        <div>
          <button onClick={this.handlePrev}>prev</button>
          <button onClick={this.handleNext}>next</button>
        </div>
      </div>
    );
  }
}
