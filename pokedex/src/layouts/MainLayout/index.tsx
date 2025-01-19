import { ReactNode } from "react"
import Header from "../../components/Header"
import Footer from "../../components/Footer"

interface Types{
    children: ReactNode
}

function MainLayout({children} : Types){
    return(
        <>
            <Header></Header>
            <main>
                {children}
            </main>
            <Footer></Footer>
        </>
        
    )
}


export default MainLayout