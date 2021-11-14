import React from 'react'
import './Login_Administrador/estilo_Administrador.css'
import LoginA from './Login_Administrador/login'
  
class InSeAdministrador extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            isLogginActive: true,
        }
    }

    render() {
        const {isLogginActive} = this.state;
        return(
            <div className='Administrador'>
                <div className='LoginA'>
                    <div className='containerA'>
                        {isLogginActive && <LoginA containerRef={(ref) => this.current = ref} /> }
                    </div>
                </div>
            </div>
        )
    }
}


export default InSeAdministrador;