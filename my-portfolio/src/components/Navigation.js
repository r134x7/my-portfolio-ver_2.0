import React, { useState } from "react";
import Header from "./Header";
import Project from "./Project";
import Footer from "./Footer";
import About from "./pages/About";
import Videos from "./pages/Videos";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";

export default function Navigation() {
    const [currentPage, setCurrentPage] = useState("About");

    const renderPage = () => {
        if (currentPage === "About") {
            return <About />;
        }
        if (currentPage === "Portfolio") {
            return <Project />;
        }
        if (currentPage === "Videos") {
            return <Videos />;
        }
        if (currentPage === "Contact") {
            return <Contact />;
        }
        if (currentPage === "Resume") {
            return <Resume />;
        }
    }

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <Header currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
            <Footer />
        </div>
    );
}