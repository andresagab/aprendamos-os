import React from "react";

class Thematic extends React.Component {
    render() {
        return (

            <div class="flex h-screen">

                <div class="m-auto px-8 lg:px-0 lg:w-3/6 flex flex-col space-y-4 text-center">
                    <h3 class="font-semibold text-6xl">TEMÁTICAS</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    <button class="px-4 py-2 rounded-full bg-green-500 text-white hover:bg-green-700 transition duration-300 ease select-all w-40 self-center">Empezar</button>
                </div>

            </div>

        );
    }
}

export default Thematic;