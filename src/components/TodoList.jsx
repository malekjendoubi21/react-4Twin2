import { useState } from "react";

export default function TodoList(props) {
    const [todo,setTodo] = useState(props.todoList);
    const [newTodo,setNewTodo] = useState({name:'',priority:'Haute'});
    const addTodo = () => {
        setTodo([...todo, {...newTodo,completed:false}]);
        setNewTodo({ name: '', priority: 'Haute' });
    }
    const countTodo = todo.filter(()=>newTodo).length;
    const completedTodo = todo.filter((e)=>e.completed).length;
    const markAsCompleted = (index) => {
        const updatedTodos = todo.map((tache, i) =>
            i === index ? { ...tache, completed: !tache.completed } : tache
        );
        setTodo(updatedTodos);
    };
    const [search, setSearch] = useState('');
    const filteredTodo = todo.filter((tache) => tache.name.toLowerCase().includes(search.toLowerCase()));
    return (
        <div>
            <input onChange={(e)=>setNewTodo({...newTodo,name:e.target.value})} type="text" placeholder="Ajouter une tache" value={newTodo.name}/>

            <select onChange={(e)=>setNewTodo({...newTodo,priority:e.target.value})} value={newTodo.priority} >
                <option value="Haute">Haute</option>
                <option value="Moyenne">Moyenne</option>
                <option value="Basse">Basse</option>
            </select>
            <button onClick={addTodo}>Ajouter</button>
            <ul>
                {filteredTodo.map((tache, index) => (
                    <li key={index} style={{backgroundColor: tache.completed? "green" : "grey"}}>{tache.name} - {tache.priority}
                        <button onClick={()=>setTodo(todo.filter((e,i)=>i !== index))}>  Delete</button>
                        <button onClick={()=>markAsCompleted(index)}>{tache.completed? "non terimné" : "terminé"}</button></li>
                ))}
            </ul>
            <div>
                <h2>Total des taches : {countTodo}</h2>
                <h2>Taches terminées : {completedTodo}</h2>
            </div>
            <div>
                <input onChange={(e)=>setSearch(e.target.value)} type="text" placeholder="Rechercher une tache" value={search}/>
            </div>
        </div>

    )
}
