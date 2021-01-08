import React from 'react'

const SideBar = () => {
    return (
        <div className="sidebar">
        <h1 className="brand">Kekeli Dogbevi Jiresse</h1>
            <nav className="side-nav">
                <ul className="nav-ul">
                    <li className="side-li"><a href="/" className="side-link">Home</a></li>
                    <li className="side-li"><a href="/about" className="side-link">About</a></li>
                    <li className="side-li"><a href="/projects" className="side-link">Projects</a></li>
                    <li className="side-li"><a href="/contact" className="side-link">Contact</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default SideBar
