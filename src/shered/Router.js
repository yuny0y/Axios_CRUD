import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../pages/Home";
import TodoList from "../pages/TodoList";
import TodoRecord from "../pages/TodoRecord";
import Header from "../components/Header"
import { Layout } from "../components/Layout";
import Modal from "../pages/Modal";

const Router = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Header />
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="todorecord" element={<TodoRecord/>}/>
                        <Route path="todolist" element={<TodoList/>}/>
                        <Route path="todolist/:id" element={<Modal/>}/>
                    </Routes>
            </Layout>
        </BrowserRouter>
    )
}

export default Router;