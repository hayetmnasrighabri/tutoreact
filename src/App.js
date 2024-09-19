import { LoremIpsum} from 'react-lorem-ipsum';
const title= "bonjour les gens"

function App() {
  const handleClick=(e)=>{
    e.preventDefault()
    
    alert("j'ai cliqué sur le titre")
  }
  return (
    <>
      <h1 type="text" className="title" style={{color:"red", backgroundColor: "beige"}} onClick={handleClick}>{title}</h1>
      <input type="text"/>
      <LoremIpsum p={3} />
      
    </>
  );
}

export default App;
