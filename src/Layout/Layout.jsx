import { Outlet } from "react-router-dom"
import Home from "../pages/Home"
import Header from "../components/Header"



export default function Layout (){



    return(


        <>
            <Header/>
            <main>
                <Outlet/>
            </main>
        </>
    )
}