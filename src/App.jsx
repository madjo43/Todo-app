import { useState } from 'react'

const defaultItems = [
  {
    id: 1,
    text: "Kupi mlijeko",
    done: false,
  },
  {
    id: 2,
    text: "Kupi brašno",
    done: true,
  },
];


function App() {
  const [items, setItems] = useState(defaultItems);
  const [formState, setFormState] = useState({text: ""});

  const itemComponents = items.map(item =>{
    const handleChange = () => {
      console.log('handle change for item', item);
      setItems(items.map(newItem => {
        if (newItem.id === item.id){
          return {...newItem, done: !item.done};
        }
        return newItem;
      }));
    };

    const handleClick = () => {
      setItems(items.filter(newItem =>{
        return newItem.id !== item.id;
      }));
    };

    return (
      <div key ={item.id}>
        <input type="checkbox" checked={item.done} onChange={handleChange} />{item.text}
        <button onClick={handleClick}>X</button>
      </div>
    );
  });
 const handleChange = (event) =>{
   setFormState({...formState,
  [event.target.name]: event.target.value,});
 }

 const handleSubmit = (event) =>{
   event.preventDefault();
   setItems([...items,
  {
    id: Date.now(),
    text: formState.text,
    done:false,
  },
]);
    setFormState({...formState, text:''});  
 }

  
  return (
    <div> 
      <h1>Todo-app</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="text" value={formState.text} onChange={handleChange} />
        <button type="submit" >Add item</button>
      </form>
      {itemComponents}
    </div>
  )
}

export default App
