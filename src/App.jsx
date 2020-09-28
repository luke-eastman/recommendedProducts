import React, { useState, useEffect } from 'react';
import List from './List.jsx';
import axios from 'axios';
import styles from './Styles.jsx';

const App = (props) => {

  const [allItems, setAllItems] = useState([]);
  const [shownItems, setShownItems] = useState([]);

  useEffect(() => {
    // when component mounts, and if no items have been populated:
    if (!allItems.length) {
      // 'garden' is a temporary query for now. It will likely be changed for later implementation
      axios.get('/products/dept/garden')
        .then(results => {
          setAllItems(results.data);
          setShownItems(results.data.slice(0, 6));
        })
        .catch(err => console.log('there was an error', err));
    }
  });

  return (
    <div>
      <styles.h4>More to consider</styles.h4>
      <div id="recommended-items">
        <List listItems={shownItems}/>
      </div>
    </div>
  );
}

export default App;