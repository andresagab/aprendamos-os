import React from "react";

class Header extends React.Component {
    render() {
        return (
            <nav class="fixed w-full">
                <div class="flex flex-row p-4">
                    <div class="flex-grow">AprendamosDeSO</div>
                    <div class="flex space-x-6">
                        <a href="/" class="px-2 border-b border-white hover:border-gray-500 transition duration-300 ease select-none">Inicio</a>
                        <a href="/temas" class="px-2 border-b border-white hover:border-gray-500 transition duration-300 ease select-none">Temas</a>
                        <a href="/acerca-de" class="px-2 border-b border-white hover:border-gray-500 transition duration-300 ease select-none">Acerca de</a>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Header;