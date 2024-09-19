import { LoremIpsum} from 'react-lorem-ipsum';
const title= "bonjour les gens"
const showTitle= true
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
      <LoremIpsum p={3} />
      
    </>
  );
}

export default App;
