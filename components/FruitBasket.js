import React from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

export default function FruitBasket(props){
  return (
    <div className="fruit-basket">
      <Filter
        filters={props.filters}
        handleChange={props.updateFilterCallback} />
      <FilteredFruitList
        fruit={props.fruit}
        filter={props.currentFilter} />
    </div>
  );
}
FruitBasket.defaultProps = {
  fruit: [],
  filters: [],
  currentFilter: null,
  updateFilterCallback: () => {}
};
