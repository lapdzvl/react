import React from "react";
import { withRouter } from "react-router";
import Color from "../HOC/color";
import logo from "../../assets/images/logoChannel.png";
import { connect } from "react-redux";
class Home extends React.Component {
  // componentDidMount() {
  //   setTimeout(() => {
  //     this.props.history.push("/todo");
  //   }, 3000);
  // }
  handleDeleteUser = (user) => {
    console.log(">>> check user delete : ", user);
    this.props.deleteUserRedux(user);
  };
  handleCreateUser = () => {
    this.props.addUserRedux();
  };
  render() {
    console.log(">>> check props redux ", this.props.dataRedux);
    let listUsers = this.props.dataRedux;
    return (
      <>
        <div>hello ae</div>
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
        <div>
          {listUsers &&
            listUsers.length > 0 &&
            listUsers.map((item, index) => {
              return (
                <div key={item.id}>
                  {index + 1} - {item.name}{" "}
                  <span onClick={() => this.handleDeleteUser(item)}>x</span>
                  &nbsp; <span onClick={() => this.handleCreateUser()}>+</span>
                </div>
              );
            })}

          <button onClick={() => this.handleCreateUser()}>Add new</button>
        </div>
      </>
    );
  }
}

// export default withRouter(Home);
const mapStateToProps = (state) => {
  return {
    dataRedux: state.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteUserRedux: (userDelete) =>
      dispatch({ type: "DELETE_USER", payload: userDelete }),
    addUserRedux: () => dispatch({ type: "CREATE_USER" }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Color(Home));
