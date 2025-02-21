import './App.css'
import { useState } from 'react'
import NavBar from './Components/NavBar'
import SideBar from './Components/SideBar'
import MainContent from './Components/MainContent'

function App() {
    const [activePage, setActivePage] = useState('dashboard')

    return (
        <div className="flex">
            <SideBar activePage={activePage} setActivePage={setActivePage} />
            <div className="flex-1">
                <NavBar setActivePage={setActivePage} />
                <MainContent 
                    activePage={activePage} 
                    setActivePage={setActivePage} 
                />
            </div>
        </div>
    )
}

export default App
