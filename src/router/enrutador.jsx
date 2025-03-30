/*El enrutador siempre sera un arreglo de objetos */
import Inicio from "../pages/inicio/Inicio"
import Clubes from "../pages/Clubes/Clubes"
import Seleccion from "../pages/Seleccion/Seleccion"

export let enrutador = [
    {
        path: "/",
        element:<Inicio />
    },
    {
        path: "/Clubes",
        element:<Clubes />
    },
    {
        path: "/Seleccion",
        element:<Seleccion />
    }
]