import './App.css'
import LeButton from './components/Button/Button'
import AdminModif from './components/Button/AdminButton'
import Login from './components/Login/Login'
import AddButton from './components/Button/AddButton'
import Listbox from './components/Listbox/Listbox'
import CardsMui from './components/Cards/Cards'

export default function App() {

  return (
    <>
      <div className='container'>
          <LeButton/>
      </div>
      <div className='container'>
        <AdminModif/>
        </div>
        <div className='container'>
          <AddButton/>
        </div>
        <div className='container'>
          <Login/>
        </div>
        <div className='container'>
        <Listbox/>
        </div>
        <div className="container">
        <CardsMui/>
        </div>
    </>
  )
}
