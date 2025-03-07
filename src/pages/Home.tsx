import { Link } from "react-router-dom";

function Home() {

    return (
      <>
      <div className="h-screen flex flex-col itens-center justify-center bg-blue-0"
      onMouseMove={(e) => {
        const x = e.clientX;
        const y = e.clientY;
        const bg = `radial-gradient(circle 1000px at ${x}px ${y}px,rgb(255, 255, 255),rgb(178, 214, 243))`;
        e.currentTarget.style.background = bg;
      }}>
            <h1 className="text-2xl font-bold text-center"> Bem vindo a minha página</h1>
            <p className="text-center">Aqui você vai encontrar um pouco sobre mim e meus projetos</p>
            <nav className="mt-4 p-2 justify-center flex gap-10">
                
                    <Link className="m4-4 text-purple-300 hover:text-purple-500" to="/">Inicio</Link>
                    <Link className="m4-4 text-purple-300 hover:text-purple-500" to="/sobre">Sobre Nós</Link>
                    <Link className="m4-4 text-purple-300 hover:text-purple-500" to="/cadastro">Se Cadastre-se</Link>
                
                </nav>    

          
        
            
        
      </div>
        
      </>
    )
  }
  
  export default Home
  