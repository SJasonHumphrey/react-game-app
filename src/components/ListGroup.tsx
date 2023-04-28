import { useState } from "react";


function ListGroup() {

    let items = ["New York", "Nashville"];
    

    const [selectedIndex, setSelectedIndex] = useState (-1)

    return (
      <>
        <h1>List</h1>
        {items.length === 0 && <p>Items Not found</p>}
        <ul className="list-group">
          {items.map((item, index) => (
            <li key={index} 
                onClick={() => {
                  setSelectedIndex(index)
                }}
                className={selectedIndex === index ? 'list-group-item active' : 'list-group-item'}>
              {item}
            </li>
          ))}
        </ul>
      </>
    );
  }

export default ListGroup