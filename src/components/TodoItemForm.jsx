import { useState } from "react";


export function TodoItemForm(props) {
    const [formState, setFormState] = useState({text: ""});
    const [items, setItems] = useState([]);

    const handleChange = (event) =>{
        setFormState({...formState,
       [event.target.name]: event.target.value,});
      }

      const handleSubmit = (event) =>{
        event.preventDefault();
        props.onCreateItem({
            id: Date.now(),
            text: formState.text,
            done:false,
            createdAt: Date.now(),
        });
         setFormState({...formState, text:''});  
      }
    
    return (
        <form onSubmit={handleSubmit}>
        <input type="text" name="text" value={formState.text} onChange={handleChange} />
        <button type="submit" >Add item</button>
        </form>
    );
}