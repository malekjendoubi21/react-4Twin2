import {useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Search from './fonction'
import Classcomponent from './components/Classcomponent'
import Functioncomponent from './components/Functioncomponent'
import Methods from "./components/ClassComponentLifeCycle/Methods.jsx";
import Counter from "./components/Counter.jsx";
import ListeManager from "./components/ListeManager.jsx";
import ColorChanger from "./components/ColorChanger.jsx";
import ListeDesNotes from "./components/ListeDesNotes.jsx";
import TodoList from "./components/TodoList.jsx";

function App() {
    const [count, setCount] = useState(0)
    findLongestWord(words);
    let somme=(a,b)=>{
        return a+b ;
    }
    console.log(somme(5,5));
    const [{color,backgroungColor}, setColors] = useState({color:'black',backgroungColor:'white'});
    useEffect(() => {
        console.log('useEffect');

    },[
        count
    ]);

    const listIems = ["angular","react","vue"];
    const initialColor = '#FF0000'; // Rouge
    const colorOptions = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF'];
    const notes = [12, 15, 9, 18, 14];
    const todoList =[
        { name: 'Finir le projet React', priority: 'Haute', completed: false },
        { name: 'Préparer le repas', priority: 'Moyenne', completed: false },
        { name: 'Aller courir', priority: 'Basse', completed: true },
    ];
    return (
        <>
            <Classcomponent name="malek"/>

            <Functioncomponent/>

            <Methods/>
            <Counter step={5}/>
            <ListeManager lists={listIems}
                          placeholder="Ajouter une liste"
            />
            <ColorChanger initialColor={initialColor} colorOptions={colorOptions} />
            <ListeDesNotes initialNotes={notes} />
            <TodoList todoList={todoList}/>

            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <h2>le couleur est {color} et le background {backgroungColor}</h2>
                <input type="text" onChange={e => {
                    setColors(c => ({...c, color: e.target.value}))
                }}/>
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>

        </>


    )
}

const tab = [1, 2, 3, 5, 9];
const newtab = tab.map((e) => e * 2);
console.log(newtab);
const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter((word) => word.length > 6);
console.log(result);
const array1 = [1, 2, 6, 5];
const findLongestWord = (x) => {
    let newtab = x.map(e => {
        return ("le mot est :" + e, "la longueur est :" + e.length);
    });
    return newtab.reduce((acc, curr) => {
        return acc.length > curr.length ? acc : curr;

    })
}

const initialValue = 0;
const sommetab = array1.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue,
);

console.log(sommetab);

let p ={
    name:"malek",
    prenom: "malek",
    age : 23
}
p={... p ,classe:"4twin2"}
console.log(p)

let studs=[{name:'malek',id:1,marks:5},
              {name:'dhia',id:2,marks:16},
              {name:'skander',id:3,marks:100},
              {name:'hedi',id:4,marks:40},
              {name:'mahdi',id:5,marks:74}
            ]
console.log("tableau initiale  :" ,studs)

  const Bonus=studs.map((stud)=>
    stud.marks<50 ?{ ...stud,marks : stud.marks+15}:stud );
const maxNote=Bonus.filter((stud)=>stud.marks>50);
const total=maxNote.reduce((acc,curr)=>acc+curr.marks,0);
console.log("update + 15 : ", Bonus)
console.log("maximum de note ",maxNote)
console.log("totale" ,total);


let tab1=[
    {name:'malek',age:20},
    {name:'hedi',age:25},
  ];
  console.log(tab1)
  let ID =0;

  tab1=tab1.map((i)=>{
    ID++;
    return {...i,id:ID};
  })
  tab1.push({name:"skander",age:45,id :ID++});

  console.log("apres push ",tab1)

  const chercher=Search(tab1,1);
  console.log("l'id a chercher " ,chercher);


export default App 