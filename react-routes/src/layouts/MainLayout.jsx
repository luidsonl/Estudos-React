import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const MainLayout = ()=>{
  return(
    <div className="app-container">
        <header>
          <Navbar />
        </header>
        <main>
          <Outlet/>
        </main>
        <footer>
          <p>© 2024 My React App. All rights reserved.</p>
        </footer>
    </div>
  )
}

export default MainLayout