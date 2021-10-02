import React from "react";

class NotFound extends React.Component {
    render() {
        return (

            <div class="flex h-screen bg-red-400">

                <div class="m-auto px-8 lg:px-0 lg:w-3/6 flex flex-col space-y-4 text-center">
                    <h3 class="font-semibold text-6xl text-red-900">UOOPS</h3>
                    <p class="text-red-900">No pudimos encontrar la ruta solicitada, a continuación te compartimos las rutas principales a las cuales puedes acceder:</p>
                </div>

            </div>

        );
    }
}

export default NotFound;