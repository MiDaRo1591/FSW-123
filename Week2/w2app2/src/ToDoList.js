function ToDoList(props) {
  
  console.log(props);
    return (
      <div className="ToDoList">
        List of ToDos
        <br></br>
        <div>
        <input type='checkbox'></input> {props.arraylist[0].text} <br></br>
        <input type='checkbox'></input> {props.arraylist[1].text}<br></br>
        <input type='checkbox'></input> {props.arraylist[2].text}<br></br>
        <input type='checkbox'></input> {props.arraylist[3].text}
        </div>
      </div>
    );
  }
  
  export default ToDoList;
  