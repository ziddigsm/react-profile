import { Fragment } from "react/jsx-runtime";

function ListGroup() {
  let items = [
    "New York",
    "Cincinnati",
    "Los Angeles",
    "San Fransisco",
    "Chicago",
  ];
  //items = [];
 function getMessage() {
    return  items.length === 0 ? <p>No item Found</p> : null;
 }
  return (
    <>
      <h1>List</h1>
      {getMessage()}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
