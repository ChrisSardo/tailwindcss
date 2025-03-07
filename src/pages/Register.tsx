import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Register() {
  const [username, setUsername] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/perfil/${username}`);
    
  }

  const navigate = useNavigate();

  return (
    <>
      <div className="h-screen flex flex-col itens-center justify-center"
        onMouseMove={(e) => {
          const x = e.clientX;
          const y = e.clientY;
          const bg = `radial-gradient(circle 1000px at ${x}px ${y}px,rgb(255, 255, 255),rgb(222, 255, 209))`;
          e.currentTarget.style.background = bg;
        }}>
        <h1 className="text-2xl font-bold text-center">Se cadastre-se na minha página</h1>
        <p className="text-center">Aqui você vai encontrar um pouco sobre mim e meus projetos</p>
        <nav className="mt-4 p-2 justify-center flex gap-10">

          <Link className="m4-4 text-green-300 hover:text-purple-500" to="/">Voltar</Link>
          <Link className="m4-4 text-green-300 hover:text-purple-500" to="/sobre">Sobre Nós</Link>
          <Link className="m4-4 text-green-300 hover:text-purple-500" to="/cadastro">Se Cadastre-se</Link>

        </nav>
        <div className="flex flex-col gap-4 items-center">

          <div className="flex flex-col w-100 bg-green-100 rounded-lg p-4">
            <h2 className="text-2xl font-bold text-center">Cadastrar</h2>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <input type="text" placeholder="Nome" 
                className="p-2 border-2 border-green-300 hover:border-green-400"
                value={username}
                onChange={(e) => setUsername(e.target.value)} />

              {/* <input type="email" placeholder="Email" 
              className="p-2 border-2 border-green-300 hover:border-green-400" 
              value={usermail}
                onChange={(e) => setUsermail(e.target.value)} />

              <input type="password" placeholder="Senha" 
              className="p-2 border-2 border-green-300 hover:border-green-400" 
              value={userpassword}
                onChange={(e) => setUsermail(e.target.value)} />
               */}
              <button className="bg-green-300 p-2 rounded-lg hover:bg-green-400" type="submit">Cadastrar</button>
            </form>
          </div>
        </div>





      </div>

    </>
  )
}

export default Register
