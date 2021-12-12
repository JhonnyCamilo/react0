import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup'

const NuevoUsuario = () => {
     // validación y leer los datos del formulario
     const formik = useFormik({
      initialValues: {
         id:'', 
         identificacion:'',
         nombre: '',
         cumpleaños: '',
         mescumpleaños: '',
         direccion: '',
         celular: '',
         email: '',
         password: '',
         zona: '',
         tipo: '',
      }, 
      validationSchema: Yup.object({
         id: Yup.number()
                  .min(1, 'Debes agregar un número')
                  .required('El id es obligatorio'),
         identificacion: Yup.number()
                  .min(1, 'Debes agregar un número')
                  .required('la identificación es obligatoria'),        
         nombre: Yup.string()
                      .min(3, 'Los Platillos deben tener al menos 3 caracteres')
                      .required('El Nombre del platillo es obligatorio'),
         celular: Yup.number()
                      .min(1, 'Debes agregar un número de celular')
                      .required('el celular es obligatorio'), 
         
                      
      }),
      onSubmit: datos => {
        
              console.log(datos);
        
      }
   });
       return( 
        <>
         <h1 className="text-3xl font-light mb-4">nuevo usuario</h1>
         <div className="flex justify-center mt-10">
                <div className="w-full max-w-3xl">
                    <form
                        onSubmit={formik.handleSubmit}
                    >
                         <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="precio">ID</label>
                            <input 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="id"
                                type="number"
                                placeholder="1"
                                min="0"
                                value={formik.values.id}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </div>
                        { formik.touched.id && formik.errors.id ? (
                            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                                <p className="font-bold">Hubo un error:</p>
                                <p>{formik.errors.id} </p>
                            </div>
                        ) : null }




                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="precio">Identificación</label>
                            <input 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="identificacion"
                                type="number"
                                placeholder="1"
                                min="0"
                                value={formik.values.identificacion}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </div>

                        { formik.touched.identificacion && formik.errors.identificacion ? (
                            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                                <p className="font-bold">Hubo un error:</p>
                                <p>{formik.errors.identificacion} </p>
                            </div>
                        ) : null }
                        
                        
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Nombre</label>
                            <input 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="nombre"
                                type="text"
                                placeholder="Nombre Platillo"
                                value={formik.values.nombre}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </div>
                        { formik.touched.nombre && formik.errors.nombre ? (
                            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                                <p className="font-bold">Hubo un error:</p>
                                <p>{formik.errors.nombre} </p>
                            </div>
                        ) : null }


                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="precio">Celular</label>
                            <input 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="celular"
                                type="number"
                                placeholder="0"
                                min="0"
                                value={formik.values.celular}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </div>

                        { formik.touched.celular && formik.errors.celular ? (
                            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                                <p className="font-bold">Hubo un error:</p>
                                <p>{formik.errors.celular} </p>
                            </div>
                        ) : null }

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Zona</label>
                            <select
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="zona"
                                name="zona"
                                value={formik.values.zona}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            >
                                <option value="">-- Seleccione --</option>
                                <option value="ZONA 1">ZONA 1</option>
                                <option value="ZONA 2">ZONA 2</option>
                              

                            </select>
                        </div>

                        { formik.touched.zona && formik.errors.zona ? (
                            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                                <p className="font-bold">Hubo un error:</p>
                                <p>{formik.errors.zona} </p>
                            </div>
                        ) : null }


                  



                        <input
                            type="submit"
                            className="bg-gray-800 hover:bg-gray-900 w-full mt-5 p-2 text-white uppercase font-bold"
                            value="Agregar Usuario"
                        />
                    </form>
                </div>
            </div>
        </>
     );
}
 
export default NuevoUsuario;