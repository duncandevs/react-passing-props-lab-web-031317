
import React from 'react';

export default function FilteredFruitList(props){
  const fruitList = !props.filter ?  props.fruit : props.fruit.filter(i => i.fruit_type == props.filter);

  return (
    <ul className="fruit-list">
      {fruitList.map((fruit, idx) => <li key={idx}>{fruit.char}</li>)}
    </ul>
  );
}

FilteredFruitList.defaultProps = {
  filter: null,
  fruit: []
};
