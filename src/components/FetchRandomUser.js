import React, { Component } from "react";

export default class FetchRandomUser extends Component {
  state = {
    loading: true,
    people: [],
  };

  // fetch is async/await function
  async componentDidMount() {
    const url = "https://api.randomuser.me/?results=5";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ people: data.results, loading: false });
  }

  render() {
    if (this.state.loading) {
      return <div>loading..</div>;
    }

    if (!this.state.people.length) {
      return <div>didnt get a person</div>;
    }

    // const peopleJsx = this.state.people.map((person, idx) => (
    //   <div key={person.login.uuid}>
    //     <div>{person.name.title}</div>
    //     <div>{person.name.first}</div>
    //     <div>{person.name.last}</div>
    //     <img src={person.picture.large} alt={person.picture.large}></img>
    //   </div>
    // ));

    // let peopleJsx = [];
    // this.state.people.forEach((person) => {
    //   peopleJsx.push(
    //     <div key={person.login.uuid}>
    //       <div>{person.name.title}</div>
    //       <div>{person.name.first}</div>
    //       <div>{person.name.last}</div>
    //       <img src={person.picture.large} alt={person.picture.large}></img>
    //     </div>
    //   );
    // });

    return (
      <div>
        {this.state.people.map((person, idx) => (
          // key must be included and unique string
          // avoid using index
          <div key={person.login.uuid}>
            <div>{person.name.title}</div>
            <div>{person.name.first}</div>
            <div>{person.name.last}</div>
            <img src={person.picture.large} alt={person.picture.large}></img>
          </div>
        ))}
      </div>
    );
  }
}
