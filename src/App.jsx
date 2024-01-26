import { Link } from "react-router-dom"


function App() {


  return (
    <>
      <div className="w-fit mx-auto mt-3">
        <Link className="btn btn-primary " to={'/addCoffee'}>Add New Coffee</Link>
      </div>
    </>
  )
}

export default App
