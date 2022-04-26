import React from 'react'

const NuevoPresupuesto = ({presupuesto, setPresupuesto}) => {
    const handlePresupuesto = (e) => {
        e.preventDefault()
        if(!Number(presupuesto)){
            console.log('No es un numero')
        } else {
            console.log('Si es un numero')
        }
    }
  return (
    <div className='contenedor-presupuesto contenedor sombra'>
        <form onSubmit={handlePresupuesto} className='formulario'>
            <div className='campo'>
                <label>Definir Presupuesto</label>
                <input
                    className='nuevo-presupuesto'
                    type="text"
                    placeholder='Añade tu Presupuesto'
                    value={presupuesto}
                    onChange={e => setPresupuesto(e.target.value)}
                />
            </div>
            <input
                type="submit"
                value="Añadir"
            />
        </form>
    </div>
  )
}

export default NuevoPresupuesto