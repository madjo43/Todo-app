import { useState } from 'react';
import { ToDoItem } from './components/ToDoItem';
import { TodoItemForm } from './components/TodoItemForm';

function App() {
  
  const [items, setItems] = useState([]);
  const[sort, setSort] = useState("createdAtDesc");
  
  const handleCreateItem = (item) => {
  setItems([...items, item]);
  }

  const handleSortChange = (event) => {
    setSort(event.target.value);
  }

  const handleMarkItemasDone = (id, done) => {
    console.log('handle change for item',  );
    setItems(items.map(newItem => {
      if (newItem.id === id){
        return {...newItem, done: !done};
      }
      return newItem;
    }));
  };


  const handleDeleteItem = (id) => {
    setItems(items.filter(newItem =>{
      return newItem.id !== id;
    }));
  };


  const itemComponents = items
  .sort((a,b) => {
    if(sort === "createdAtAsc") {
     return a.createdAt - b.createdAt;
    }
     return b.createdAt - a.createdAt;
  })
  .map(item =>{
    return <ToDoItem key={item.id}  id={item.id} done={item.done} text={item.text} createdAt={item.createdAt} onDeleteItem={handleDeleteItem} onMarkItemAsDone={handleMarkItemasDone} />;
    });

 function handleDeleteButton() {
   setItems([]);
 }
  
  return (
    <div> 
      <h1>Todo-app</h1>
      <TodoItemForm onCreateItem={handleCreateItem} />
      <select onChange={handleSortChange} defaultValue={sort}>
        <option value="createdAtAsc">Created at (Ascending)</option>
        <option value="createdAtDesc">Created at (Descending)</option>
      </select>
      {itemComponents}
      <button onClick={handleDeleteButton}>Reset</button>
    </div>
  )
}

export default App
