

const Inputs = (props) => {
    return (
        <>
        <div className="inpunts">
        <label htmlFor="nombre">Ingresa tu nombre</label>
  <input
    type="text"
    name="nombre"
    onChange={(e) => props.setNombre(e.target.value)}
  />
  <label htmlFor="nombre">Ingresa tu Password</label>
   <input
    type="text"
    name="Password"
    onChange={(e) => props.setPassword(e.target.value)}
  />

        </div>


        </>
    )
  
}




export default Inputs;