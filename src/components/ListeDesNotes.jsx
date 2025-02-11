import { useState } from "react";

export default function ListeDesNotes(props) {
    const [notes, setNotes] = useState(props.initialNotes);
    console.log(notes);
    const [newNote, setNewNote] = useState('');
    const addNote = () => {
        if (newNote>0 && newNote<20) {
            setNotes([...notes,newNote]);
            setNewNote('');
        }else {
            alert('La note doit être comprise entre 0 et 20');
        }}
    const moyenne = notes.reduce((acc, note) => acc + note, 0) / notes.length;
    return (
        <div>
            <input onChange={(e)=>setNewNote(e.target.value)} type="number" placeholder="Ajouter une note" value={newNote}/>
            <button onClick={addNote}>Ajouter</button>
            <ul>
                {notes.map((note, index) => (
                    <li key={index}>{note} <button onClick={()=>setNotes(notes.filter((e,i)=>i !== index))}>Delete</button></li>
                ))}
            </ul>
            <h2>la moyenne des notes {moyenne}</h2>

        </div>
    )
}