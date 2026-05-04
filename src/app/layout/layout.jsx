import { useContext } from "react"
import { Link, Outlet } from "react-router"
import GlobalContext from "../context/global-context"

function Layout() {
    const { setPage } = useContext(GlobalContext)
    return (
        <>
            <label>
                <a href='#' onClick={() => setPage(1)}>1</a>
                <a href='#' onClick={() => setPage(2)}>2</a>
                <a href='#' onClick={() => setPage(3)}>3</a>
                <a href='#' onClick={() => setPage(4)}>4</a>
                <a href='#' onClick={() => setPage(5)}>5</a>
                <a href='#' onClick={() => setPage(6)}>6</a>
                <a href='#' onClick={() => setPage(7)}>7</a>
                <a href='#' onClick={() => setPage(8)}>8</a>
                <a href='#' onClick={() => setPage(9)}>9</a>
                <a href='#' onClick={() => setPage(10)}>10</a>
            </label>
            <nav>
                <Link to={"/"}></Link>
                <Link to={"/space"}>Space</Link>
            </nav>
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default Layout
