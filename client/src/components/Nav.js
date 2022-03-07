import React, { useRef, useState } from 'react';
import Home from './pages/Home';
import Lobby from './pages/Lobby';
import Profile from './pages/Profile';
import Game from './pages/Game';

function Nav() {
    const [currentPage, setCurrentPage] = useState('Home');

    const renderPage = () => {
        if (currentPage === 'Home')
        {
            return <Home currentPage={currentPage} handlePageChange={handlePageChange}/>
        }
        if (currentPage === 'Lobby')
        {
            return <Lobby currentPage={currentPage} handlePageChange={handlePageChange}/>
        }
        if (currentPage === 'Profile')
        {
            return <Profile currentPage={currentPage} handlePageChange={handlePageChange}/>
        }
        return <Game  currentPage={currentPage} handlePageChange={handlePageChange}/>
    }

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            {renderPage()}
        </div>
    )
}

export default Nav;