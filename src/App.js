import { LoremIpsum} from 'react-lorem-ipsum';
const title= "bonjour les gens"
const showTitle= true
const todos=[
  'présenter react',
  'présenter le jsx',
  'créer des composants'
]
function App() {
  //const handleClick=(e)=>{
    //e.preventDefault()
    //alert("j'ai cliqué sur le titre")
 // }
  return (
    <>
    {showTitle ?
     <h1 type="text" className="title" 
     style={{color:"red", backgroundColor: "beige"}}>
      {title}
      </h1>
      : <p>demo</p>
    }
       
      <input type="text"/>
      <LoremIpsum p={2} />
      
    
   <ul>
    {
      todos.map((todo)=>
      <li key={todo}>
        {todo}
      </li>
      )
    }
   </ul>
   </>
);
}

export default App;
