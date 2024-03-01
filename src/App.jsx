import { Fragment } from "react";

const title = "Bonjour les gensssss";
const style = {color : "red", backgroundColor: "grey"};
const showTitle = false;

const todos = [
  'Presenter react',
  'Presenter le JSX',
  'Créer des composants'
]

function App() {

  // const handleClick = (e) => {
  //   console.log(e)
  //   e.preventDefault()
  //   e.stopPropagation()
  //   alert("j'ai cliqué sur le titre")
  // }
  const handleClick = () => {
  
    alert("j'ai cliqué sur le titre")
  }
  return (
    // <Fragment></Fragment>
    <div>
      <Title color="green"  id="monid" className="demo" data-demo="demo">Mon composants</Title>
      {showTitle ?
      <h1 onClick={handleClick} id="title" className="title" style={style}>{title}</h1> 
      : <p>demo</p>
      }
    <input type="text" />
    <p>

      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta est dolorem perspiciatis, animi nihil totam odio mollitia repellat quas, dignissimos numquam, sapiente quis quae sint hic recusandae beatae error non.
    </p>
    <ul>
      {todos.map(todo =>(<li key={todo}>{todo}</li>))}
    </ul>
    </div>
  )
}

function Title ({color, hidden, ...props}) {
  if (hidden)
    return null

  return <h1 style={{color: color}} {...props} />
  
}

export default App


//dangerousSetInnerHTML = {{__html: title}}