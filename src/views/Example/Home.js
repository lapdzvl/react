import React from "react";
import { withRouter } from "react-router";
import Color from "../HOC/color";
import logo from "../../assets/images/logoChannel.png";
class Home extends React.Component {
  // componentDidMount() {
  //   setTimeout(() => {
  //     this.props.history.push("/todo");
  //   }, 3000);
  // }
  render() {
    console.log(">>> check props: ", this.props);
    return (
      <>
        <div>hello</div>
        <div>
          <img
            src={logo}
            style={{
              width: "400px",
              height: "400px",
              marginTop: "10px",
              borderRadius: "50%",
            }}
          />
        </div>
      </>
    );
  }
}

// export default withRouter(Home);
export default Color(Home);
