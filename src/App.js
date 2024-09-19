import { LoremIpsum} from 'react-lorem-ipsum';
//const title= "bonjour les gens"
//const showTitle= true
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
    
       <Title color="green" />
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
function Title ({color}){
  return(
  <h1 style={{color: color}}>bonjour les  gens</h1>
)}
export default App;
