import { createBrowserRouter, redirect } from "react-router-dom"
import Login from "../pages/Login"
import RegisterAdmin from "../pages/RegisterAdmin"
import AddMovie from '../pages/AddMovie'
import Movies from '../pages/Movies'
import AddGenre from '../pages/AddGenre'
import Genres from '../pages/Genres'
import EditGenre from "../pages/EditGenre"
import BaseLayout from "../components/BaseLayout"
import DetailsMovie from "../pages/DetailsMovie"
import EditMovie from "../pages/EditMovie"


const router = createBrowserRouter([
    {
        path: "/",
        element: <BaseLayout />,
        loader: () => {
            if (!localStorage.getItem("access_token")) throw redirect("/login")
            return null
        },
        children: [
            {
                path: "",
                element: <Movies />,
                children: [
                    {
                        path: "movies/add-movie",
                        element: <AddMovie />
                    },
                    {
                        path: "movies/:id",
                        element: <DetailsMovie />
                    },
                    {
                        path: "movies/:id/edit-movie",
                        element: <EditMovie />
                    }
                ]
            },
            {
                path: "/genres",
                element: <Genres />,
                children: [
                    {
                        path: "add-genre",
                        element: <AddGenre />
                    },
                    {
                        path: ":id/edit-genre",
                        element: <EditGenre />
                    }
                ]
            },
            {
                path: "/register",
                element: <RegisterAdmin />
            }
        ]
    },
    {
        path: "/login",
        loader: () => {
            if (localStorage.getItem("access_token")) throw redirect("/")
            return null
        },
        element: <Login />
    }
])

export default router