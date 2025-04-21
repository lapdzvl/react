import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";

class MyComponent extends React.Component {
  state = {
    arrJobs: [
      { id: "job1", title: "developer", salary: "500" },
      { id: "job2", title: "tester", salary: "400" },
      { id: "job3", title: "project Manager", salary: "1000" },
    ],
  };

  addNewJob = (job) => {
    console.log("check job from parent: ", job);
    // let currentJobs = this.state.arrJobs;
    // currentJobs.push(job);
    this.setState({
      arrJobs: [...this.state.arrJobs, job],
      // arrJobs: currentJobs,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("check data input:", this.state);
  };

  deleteAJob = (job) => {
    let currentJobs = this.state.arrJobs;
    currentJobs = currentJobs.filter((item) => item.id !== job.id);
    this.setState({
      arrJobs: currentJobs,
    });
  };
  componentDidUpdate(prevProps, prevState) {
    console.log(
      ">>run didUppdate: ",
      " prevState: ",
      prevState,
      "current state: ",
      this.state
    );
  }
  componentDidMount() {
    console.log(">>run component did mount");
  }
  render() {
    console.log("call render:", this.state);

    return (
      <>
        <AddComponent addNewJob={this.addNewJob} />

        <ChildComponent
          arrJobs={this.state.arrJobs}
          deleteAJob={this.deleteAJob}
        />
      </>
    );
  }
}

export default MyComponent;
