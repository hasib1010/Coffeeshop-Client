import { Link, useLoaderData } from "react-router-dom"
import CoffeeLayout from "./CoffeeLayout";
import { useState } from "react";


function App() {
  const loadedCoffee = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffee)

  return (
    <div className="container mx-auto">
      <div className="w-fit mx-auto mt-3">
        <Link className="btn btn-primary " to={'/addCoffee'}>Add New Coffee</Link>
      </div>
      <div className="grid grid-cols-3 gap-7 ">
        {
          coffees.map(coffee => <CoffeeLayout
            coffee={coffee}
            key={coffee._id}
            coffees={coffees}
            setCoffees={setCoffees}
          ></CoffeeLayout>)
        }
      </div>
    </div>
  )
}

export default App
