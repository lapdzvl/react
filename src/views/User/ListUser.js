import React from "react";
import axios from "axios";
import "./ListUser.scss";
import { withRouter } from "react-router-dom";
class ListUser extends React.Component {
  state = {
    listUsers: [],
  };
  async componentDidMount() {
    try {
      const response = await fetch("https://reqres.in/api/users?page=2", {
        headers: {
          "x-api-key": "reqres-free-v1",
        },
      });
      const data = await response.json();
      console.log("✅ Dữ liệu fetch được:", data);
      this.setState({
        listUsers: data?.data || [],
      });
    } catch (error) {
      console.error("❌ Lỗi fetch bằng fetch():", error);
    }
  }

  handleViewDetailUser = (user) => {
    this.props.history.push(`/user/${user.id}`);
  };

  render() {
    let { listUsers } = this.state;
    return (
      <div className="list-user-container">
        <div className="title">Fetch all list users</div>
        <div className="list-user-content">
          {listUsers &&
            listUsers.length > 0 &&
            listUsers.map((item, index) => {
              return (
                <div
                  className="child"
                  key={item.id}
                  onClick={() => this.handleViewDetailUser(item)}
                >
                  {index + 1} - {item.first_name} - {item.last_name}
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}
export default withRouter(ListUser);
