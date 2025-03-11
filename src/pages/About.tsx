import { Link } from "react-router-dom";

function About() {

    return (
      <>
      <div className="h-screen flex flex-col itens-center justify-center"
      onMouseMove={(e) => {
        const x = e.clientX;
        const y = e.clientY;
        const bg = `radial-gradient(circle 1000px at ${x}px ${y}px,rgb(255, 255, 255),rgb(255, 255, 227))`;
        e.currentTarget.style.background = bg;
      }}>
            <h1 className="text-2xl font-bold text-center"> Conheça a minha página</h1>
            <p className="text-center">Aqui você vai encontrar um pouco sobre mim e meus projetos</p>
            

          
        
            
        
      </div>
        
      </>
    )
  }
  
  export default About
  