"use client"
import Container from "./Container"
import styles from "@/styles/header.module.css"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { FiSearch, FiShoppingCart } from "react-icons/fi"
const Header = () => {
    return (
        <>
            <header className={`${styles.header} py-3 px-1 shadow`}>
                <Container className="flex justify-between">
                    <div className="flex items-center">
                        <span className="text-fuchsia-500 font-bold text-4xl">
                            Klicksy <b className="text-black">.</b>
                        </span>
                    </div>
                    <div className={`${styles.searchBar}`}>
                        <input
                            className={`${styles.searchInput}`}
                            type="text"
                            placeholder="Search for products..."
                        />
                        <button className={styles.searchButton}>
                            <FiSearch size={18} />
                        </button>
                    </div>
                    <NavBar />
                </Container>
            </header>
        </>
    )
}

export default Header

const NavBar = () => {
    const pathname = usePathname();
    return (
        <>
            <div className="flex items-center gap-6">
                <ul className="flex gap-4">
                    <li  className={pathname === "/" ? styles.active : ""}>
                        <Link href={"/"}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/store" className={pathname === "/store" ? styles.active : ""}>
                            Store
                        </Link>

                    </li>
                </ul>
                <div>
                    <FiShoppingCart color="black" size={24} />
                </div>
            </div>
        </>

    )
}