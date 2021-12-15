function getData(props) {
  return <h2>I am a {props.altitude} Car!</h2>;
}

ReactDOM.render(<Car color="red" />, document.getElementById("root"));
