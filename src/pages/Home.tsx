import { Link } from "react-router-dom";

function Home() {

    return (
      <>
      <div className="h-screen flex flex-col itens-center justify-center bg-blue-0"
      onMouseMove={(e) => {
        const x = e.clientX;
        const y = e.clientY;
        const bg = `radial-gradient(circle 3000px at ${x}px ${y}px,rgb(75 89 111), rgb(45 54 67))`;
        e.currentTarget.style.background = bg;
      }}>
            <h1 className="text-2xl font-bold text-center"> Bem vindo a minha página</h1>
            <p className="text-center">Aqui você vai encontrar um pouco sobre mim e meus projetos</p>
            

          
        
            
        
      </div>
        
      </>
    )
  }
  
  export default Home
  