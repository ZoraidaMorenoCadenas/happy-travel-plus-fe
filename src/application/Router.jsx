import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/homepage/HomePage";

export default function Router() {
    return(
        <>
            <Routes>
                <Route exact path='/' element={<HomePage/>}/>
             
            </Routes>
        </>
    )
}