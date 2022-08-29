import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


import Inputs from './components/Inputs';
import Button from './components/Button';
import Img from './components/assets/img/Img';
import logo from './logo.svg';
import './App.css';
import Button1 from './components/Button';

function App() {

  const[nombre,setNombre]= useState("");
  const[password,setPassword]= useState("");
  const [boton, setMensaje] = useState(false);
    // validad campos//
  const validarPassword = (e) => {
    e.preventDefault();
  e.target.reset()
  setMensaje(true)
  // reinicia pagina a los 5 segundos//
setTimeout(() => {
  window.location.reload(true);
}, 5000);

  }

  return (
    <div className="App">
        
     <>
  <div className='row'>
	<div class="col-12 col-sm-12 d-flex justify-content-center">
  <form  onSubmit={validarPassword}>
<h1 >formulario</h1>
<div className='img'>
<img src={Img.img1}></img>
</div>

<Inputs setNombre={setNombre} setPassword={setPassword} />
{password==="252525" ? (
       <div>
  <Button1 texto_boton={"Presioname para enviar"} />
          
       </div>
    
      ) : <h4>debes validar los campos y contraseña</h4>}

 {boton? (
  <div>
     <h2> los datos enviados son:</h2>
    <h3 className='mostrando-texto'>{nombre}{"-contraseña:"}{password}</h3></div>
   
      ) : null}
</form>
			
			</div>

  </div>

     </>
    </div>
  );
}

export default App;
