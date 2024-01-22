import './App.css'
import FormAdd from './components/Form/FormAdd'
// import LeButton from './components/Button/Button'
// import AdminModif from './components/Button/AdminButton'
import Login from './components/Login/Login'
// import AddButton from './components/Button/AddButton'
// import Listbox from './components/Listbox/Listbox'
// import CardsMui from './components/Cards/Cards'
// import { useState } from 'react'

export default function App() {

  // const [style, setStyle] = useState("");

  return (
    <>
      {/* <div className='container'>
          <LeButton/>
      </div> */}
      {/* <div className='container'>
        <AdminModif/>
        </div> */}
        {/* <div className='container'>
          <AddButton/>
        </div> */}
        <div className='container'>
          <Login/>
        </div>
        {/* <div className='container'> */}
          {/* Permet le changement d'etat des styles de musiques */}
        {/* <Listbox setStyle={setStyle}/>
        </div> */}
        {/* <div className="container"> */}
          {/* contient la donnée du style de music permettant de le changer plus tard avec setStyle */}
        {/* <CardsMui musicstyle={style}/>
        </div> */}
        <div className='container'>
          <FormAdd/>
        </div>
    </>
  )
}
