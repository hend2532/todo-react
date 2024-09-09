import { Component } from "react";

class Todo extends Component {
  constructor() {
    super();
    this.state = {
      note: "",
      data: [],
    };
  }
  handelData = (e) => {
    this.setState({
      note: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const newNode = {
      note: this.state.note,
      id: Date.now(),
      completed: false,
    };
    this.setState((notes) => ({
      data: [...notes.data, newNode],
      note: "",
    }));
  };
  handleDelete = (id) => {
    this.setState({
      data: this.state.data.filter((el) => el.id !== id),
    });
  };
  handleComplete = (id) => {
   
    this.setState({
      data: this.state.data.map((el) => el.id===id ?({ ...el, completed: !el.completed }):el),
    });
  };
  render() {
    return (
      <>
        <div className="bg-slate-600 m-6 text-center text-slate-50 p-4 text-lg rounded-md">
          Todo List
        </div>
        <div className="flex flex-row justify-center container m-auto gap-3">
          <input
            placeholder="Note..."
            value={this.state.note}
            onChange={this.handelData}
            className=" text-slate-500 rounded-md p-2 outline-none border-slate-500 border-2"
            type="text"
          />
          <button
            onClick={this.handleSubmit}
            className="bg-slate-500 text-slate-50 rounded-md px-3 py-2 hover:bg-slate-800 "
          >
            Add
          </button>
        </div>
        {this.state.data.map((el) => {
          return (
            <div
              key={el.id}
              onClick={()=>this.handleComplete(el.id)}
              className={`${el.completed ? "bg-slate-400 line-through  hover:bg-slate-400" : "bg-slate-100"} hover:bg-slate-50 m-4 p-3 rounded-md text-slate-600 flex justify-between`}
            >
              {el.note}{" "}
              <span
                onClick={(e) => { e.stopPropagation(); this.handleDelete(el.id)}}
                key={el.id}
                className="text-slate-50 w-6 h-6  pl-2 pb-1 float-end cursor-pointer bg-red-600 rounded-full"
              >
                X
              </span>
            </div>
          );
        })}
      </>
    );
  }
}
export default Todo;
