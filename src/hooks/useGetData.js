import { useState, useEffect } from 'react'
const api = 'https://us-central1-gndx-cv.cloudfunctions.net/me' // APi que devuelve un objeto con data para mostrar en las vistas

const useGetData = () => {
    const [ myData, setData ] = useState([]) // se guarda la data y una funcion set, lo inicializamos con arreglo vacío

    useEffect(() => {
        fetch(api)
        .then(response => {
            return response.json() // Parseamos la respuesta a formato json
        })
        .then(data => 
            setData(data) // Luego seteamos la data a myData
        )
    }, []) // El arreglo vacío es porque no tenemos propiedades que se ejecutarán cada vez que haya un cambio

    return myData // Retornamos la data ya seteada
}

export default useGetData