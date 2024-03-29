import './App.css'
import Navbar from './Navbar'
import Notifcations from './Notifications'

function App() {
  return (
    <div className='App rounded-lg bg-white shadow-lg p-6 md:mx-72 md:my-10'>
    <Navbar />
    <Notifcations />
    </div>
  )
}

export default App