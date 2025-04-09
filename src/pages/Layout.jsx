import { Outlet } from "react-router-dom/dist"
import ScrollToTop from "../components/ScrollToTop"
import { ContactCard } from "../components/ContactCard"
import { Footer } from "../components/Footer"

// Base component that maintains the navbar and footer throughout the page and the scroll to top functionality.
export const Layout = () => {
    return (
        <ScrollToTop>
            <ContactCard />
                <Outlet />
            <Footer />
        </ScrollToTop>
    )
}