import React from "react";
import { withRouter } from "react-router";
import Color from "../HOC/color";
class Home extends React.Component {
  // componentDidMount() {
  //   setTimeout(() => {
  //     this.props.history.push("/todo");
  //   }, 3000);
  // }
  render() {
    console.log(">>> check props: ", this.props);
    return <div>hello</div>;
  }
}

// export default withRouter(Home);
export default Color(Home);
