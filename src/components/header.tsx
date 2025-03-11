import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-gray-800 text-center p-4 flex flex-row justify-between ">
        <div className='text-white p-4 flex justify-left p-2'>Christian's Site</div>
     <nav className=" p-2 justify-end flex gap-10">
                <Link className="m4-4 p-2 text-white hover:text-purple-500" to="/">Inicio</Link>
                <Link className="m4-4 p-2 text-white hover:text-purple-500" to="/sobre">Sobre Nós</Link>
                <Link className="bg-red-400 p-2 rounded-lg text-white hover:text-red-500 hover:bg-white" to="/cadastro">Se Cadastre-se</Link>
            </nav>    
    </header>
  );
}

export default Header;