import { useState } from "react";

export default function ListeManager(props) {
    const [listItems, setListItems] = useState(props.lists);
    console.table(listItems);
    const [newItem, setNewItem] = useState('');
    return (
        <div>
            <input onChange={(e)=>setNewItem(e.target.value)} type="text" placeholder={props.placeholder} value={newItem}/>
            <button onClick={()=>setListItems([...listItems,newItem])}>Ajouter</button>
            <ul>
                {listItems.map((item, index) => (
                    <li key={index}>{item} <button onClick={()=>setListItems(listItems.filter((e,i)=>i !== index))}>Delete</button></li>
                ))}
            </ul>

        </div>
    )
}
