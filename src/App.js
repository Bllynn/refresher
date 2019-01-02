const Pet = props => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed)
  ]);
};
class App extends React.Component {
  handleTitleClick() {
    alert("you clicked the title!");
  }
  render() {
    return React.createElement("div", {}, [
      React.createElement(
        "h1",
        { onClick: this.handleTitleClick },
        "Adopt Me!"
      ),
      React.createElement(Pet, {
        name: "Clairabelle",
        animal: "Dog",
        breed: "Malti-Poo"
      }),
      React.createElement(Pet, {
        name: "Alex",
        animal: "Bird",
        breed: "Parakeet"
      }),
      React.createElement(Pet, {
        name: "Geronimo",
        animal: "Cat",
        breed: "Mix"
      })
    ]);
  }
}

ReactDOM.render(React.createElement(App), document.getElementById("root"));
