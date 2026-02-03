import { useState } from 'react'
import './App.css'
import Card from './Components/card.jsx'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <h1 className='text-3xl bg-lime-500'>Vite with tailwind</h1>
      {/* <Card/> */}
      {/* <Card/> */}
      {/* props in react */}
      <Card
        title="Tailwind Card"
        description="This is a reusable card component built with Tailwind CSS."
        image="https://via.placeholder.com/400"
        buttonText="Learn More"
      />
      <Card
        // title="Tailwind Card"
        description="This is a reusable card component built with Tailwind CSS."
        image="https://via.placeholder.com/400"
        buttonText="Learn More"
      />
    </>
  )
}

export default App