import { Route, Routes } from "react-router-dom"
import "./App.css"
import Layout from "./components/Layout"
import HomePage from "./pages/HomePage"
import ReportsPage from "./pages/ReportsPage"
import NotFoundPage from "./pages/NotFoundPage"
import SingleMeasureInsert from "./pages/SingleMeasureInsert"

function App() {
    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path='reports' element={<ReportsPage />} />
                <Route path='singleMeasureInsert' element={<SingleMeasureInsert />} />
                <Route path='singleMeasureInsert/:id' element={<SingleMeasureInsert />} />
                <Route path='*' element={<NotFoundPage />} />
            </Route>
        </Routes>
    )
}

export default App
