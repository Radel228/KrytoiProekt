import { createBrowserRouter } from "react-router"
import Layout from "../layout/layout"
import SpacePage from "../../pages/space/space-page"


export const router = createBrowserRouter([{
    path: "/",
    element: <Layout />,
    children: [
        {
            path: "/space",
            element: <SpacePage />,
        }
    ]
}])