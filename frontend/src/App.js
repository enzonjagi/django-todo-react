import React, { Component} from "react";

const todoItems = [
  {
    "id": 1,
    "title": "Shop for Desktop tech",
    "description": "We need to revamp the WFH Desktop by buying some:\r\n* Peripherals\r\n* Desktop lighting\r\n* New monitors",
    "completed": false
  },
  {
      "id": 2,
      "title": "buy oil",
      "description": "Buy some coconut oil for:\r\n* Cooking\r\n* Hair care",
      "completed": false
  },
  {
      "id": 3,
      "title": "Learn the djangorestframework",
      "description": "Learn more about the djangorestframework and django-cors-headers to gain a deeper understanding as to how we can build an API.",
      "completed": false
  }
];


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewCompleted: false,
      todoList: todoItems,
    };
  }

  displayCompleted = (status) => {
    if (status) {
      return this.setState({viewCompleted: true});
    }

    return this.setState({viewCompleted: false});
  };

  renderTabList = () => {
    return (
      <div className="nav nav-tabs">
        <span className={this.state.viewCompleted ? "nav-link active": "nav-link"}
        onClick={() => this.displayCompleted(false)}>
          Complete
        </span>

        <span className={this.state.viewCompleted ? "nav-link": "nav-link active"}
        onClick={() => this.displayCompleted(false)}>
          Incomplete
        </span>
      </div>
    );
  };

  renderItems = () => {
    const {viewCompleted} = this.state;
    const newItems = this.state.todoList.filter(
      (item) => item.completed == viewCompleted
    );

    return newItems.map((item) => (
      <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
        <span
          className={`todo-title mr-2 ${
            this.state.viewCompleted ? "completed-todo": ""
          }`}
          title={item.description}>
            {item.title}
          </span>
          <span>
            <button
              className="btn btn-secondary mr-2">
                Edit
              </button>
              <button
                className="btn btn-danger">
                  Delete
                </button>
          </span>
      </li>
    ));
  };

  render(){
    return (
      <main className="container">
        <h1 className="text-white text-uppercase text-center my-4">Todo app</h1>
        <div className="row">
          <div className="col-md-6 col-sm-10 mx-auto p-0">
            <div className="card p-3">
              <div className="mb-4">
                <button
                  className="btn btn-primary">
                    Add task
                  </button>
              </div>
              {this.renderTabList()}
              <ul className="list-group list-group-flush border-top-0">
                {this.renderItems()}
              </ul>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default App;