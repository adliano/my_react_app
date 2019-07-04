import React from "react";

function List(props) {
  // Use Array method
  // map(function callback(currentValue[, index[, array]]) { Return element for new_array }
  let items = props.groceries.map((item) => <li className='list-group-item' key={item.id}>{item.name}</li>)
  
  return (
    <ul className="list-group">
      {items}
    </ul>
  );
}

export default List;
