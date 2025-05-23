import React from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

class DetailUser extends React.Component {
  state = {
    user: {},
  };
  async componentDidMount() {
    if (this.props.match && this.props.match.params) {
      let id = this.props.match.params.id;
      try {
        let res = await axios.get(`https://reqres.in/api/users/${id}`, {
          headers: {
            "x-api-key": "reqres-free-v1",
          },
        });
        this.setState({
          user: res?.data?.data || {},
        });
        console.log(">>> check res user: ", res);
      } catch (error) {
        console.error("❌ Lỗi khi fetch user:", error);
      }
    }
  }

  handleBackButton = () => {
    this.props.history.push("/user");
  };
  render() {
    let { user } = this.state;
    let isEmptyObj = Object.keys(user).length === 0;

    return (
      <>
        <div>hello anh em id: {this.props.match.params.id}</div>
        {isEmptyObj === false && (
          <>
            <div>
              User's Name: {user.first_name} - {user.last_name}
            </div>
            <div>User's Email: {user.email}</div>
            <div>
              <img src={user.avatar} />
            </div>
            <div>
              <button type="button" onClick={() => this.handleBackButton()}>
                Back
              </button>
            </div>
          </>
        )}
      </>
    );
  }
}

export default withRouter(DetailUser);
