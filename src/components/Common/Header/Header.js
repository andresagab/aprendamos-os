import React from "react";

class Header extends React.Component {
    render() {
        return (
            <nav className="fixed w-full bg-white shadow-sm">
                <div className="flex flex-row p-4">
                    <div className="flex-grow">AprendamosDeSO</div>
                    <div className="flex space-x-6">
                        <a href="/" className="px-2 border-b border-white hover:border-gray-500 transition duration-300 ease select-none">Inicio</a>
                        <a href="/temas" className="px-2 border-b border-white hover:border-gray-500 transition duration-300 ease select-none">Temas</a>
                        <a href="/acerca-de" className="px-2 border-b border-white hover:border-gray-500 transition duration-300 ease select-none">Acerca de</a>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Header;