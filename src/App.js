import React ,{useRef,useState}from 'react';
import ReCAPTCHA from "react-google-recaptcha";

const App = () => {

 const captcha = useRef(null);

   const [captchaValido, setcaptchaValido] = useState(null);
   const [usuarioValido, setusuarioValido] = useState(false);


	const onChange = ()=>{
		if(captcha.current.getValue()){
			console.log('El usuario no es UN ROBOT');
			setcaptchaValido(true);
		}
	}

	const submit = (e)=> {
 		e.preventDefault();
		 if(captcha.current.getValue()){
			console.log('El usuario no es UN ROBOT');
			setusuarioValido(true);
			setcaptchaValido(true);
		}else{
			console.log("Debes marcar la casilla 'No Soy un Robot' ");
			setusuarioValido(false);
			setcaptchaValido(false);
		}
	}


	return (
		<div className="contenedor">
			{!usuarioValido &&
			<div className="registrate">
				<h1>Registrate</h1>
				<form className="formulario" action="" onSubmit={submit}>
					<input type="text" name="usuario" id="usuario" placeholder="Usuario" />
					<input type="password" name="password" id="password" placeholder="Contraseña" />
					<input type="password" name="password2" id="password2" placeholder="Repetir Contraseña" />
					<div className="recaptcha">
                    <ReCAPTCHA
					        ref={captcha}
							sitekey="6LdqqMYhAAAAAAh7WpY8HLO7BLCmFm5Vb0G2WDoq"
							onChange={onChange}
						/>
					</div>
					{captchaValido=== false && <div className='error-captcha'>
					Debes marcar la casilla 'No Soy un Robot'
					</div>}
					<button type="submit">Iniciar Sesion</button>
				</form>
			</div>
			}
			{usuarioValido &&
			<div>
				<h1>Bienvenido</h1>
			</div>
			}
		</div>
	);
}
export default App;