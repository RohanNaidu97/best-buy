import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body"; 
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu"
import Cart from "./components/Cart";

const AppLayout = () => {
    return(
        <div className="app-layout">
            <Header />
            <Outlet />
        </div>
    );
}


const appRouter = createBrowserRouter( [
    {
        path : "/",
        element : <AppLayout></AppLayout>,
        children: [
            {
                path: "/",
                element : <Body />
            },
            {
                path : "/about",
                element : <AboutUs />
            },
            {
                path : "/contact",
                element : <ContactUs />
            },
            {
                path : "/restaurants/:resid",
                element : <RestaurantMenu />
            },
            {
                path : "/cart",
                element : <Cart />
            }
        ],
        errorElement : <Error />
    }
] )


const root = ReactDOM.createRoot( document.getElementById("root") );

root.render( <RouterProvider router = { appRouter } /> );


// const Title = () => (<h1 id = "title " tabIndex="5"> This is Component composition </h1>);

// const HeadingComponent = () => {
//     return (<><div id = "container">
//     {Title()}
//     <Title/>
//     { 123 + "321"}
//     <h1> Hello World from Functional Component! </h1>
//     </div></>)
    
// };