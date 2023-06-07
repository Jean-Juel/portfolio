import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './styles/tailwind.css';
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import Header from "./components/Navbar";
import Footer from "./components/Footer";
// import Error from "./error/Error";
import HomePage from "./pages/HomePage";
import Contact from "./pages/Contact";
import {ThemeProvider} from "./utils/context";

export default function Layout() {

    return (
        <>
            <Header/>
                <Outlet/>
            <Footer/>
        </>
    );
}


const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        errorElement: <Error/>,
        children: [
            {
                path: '/',
                element: <HomePage/>,
                errorElement: <Error/>,
            },
            {
                path: '/contact',
                element: <Contact/>,
                errorElement: <Error/>,
            },
            {
                path: `*`,
                element: <Error/>,
            },
        ]
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
    <React.StrictMode>
        <RouterProvider router={router}>
            <ThemeProvider/>
        </RouterProvider>
    </React.StrictMode>
);
