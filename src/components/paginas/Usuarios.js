import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import FormularioUsuario from '../ui/FormularioUsuario';


const Usuarios= () => {
      // definir el state para los platillos
      const [ usuarios1, guadarUsuarios ] = useState([]);

    //fetch('http://localhost:8080/api/user/all')
   // .then(response =>{
     //   return response.json();
 //   })
  //  .then(response =>{
       // console.log(response);
   //     guadarUsuarios(response);
//    })
    
       return( 
        <>
         <h1 className="text-3xl font-light mb-4">Usuarios</h1>
         <Link to="/nuevo-usuario" className="  bg-blue-800 hover:bg-blue-700, inline-block mb-5 p-2 text-white uppercase font-bold">
                Agregar Usuario
            </Link>

            {usuarios1.map( usuario => (
                <FormularioUsuario
                    key={usuario.id}
                    usuario={usuario}
                />
            ))}
        </>
     );
}
 
export default Usuarios;