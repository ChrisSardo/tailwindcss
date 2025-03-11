import { useEffect, useState } from "react";
import { getUsuarios } from "../../api";

function Users() {
  const [usuarios, setUsuarios] = useState<any[]>([]); // Inicializando o estado como um array de objetos

  const fetchUsuarios = async () => {
    const data = await getUsuarios();
    setUsuarios(data);
  };

  useEffect(() => {
    fetchUsuarios(); // Carrega os dados quando o componente é montado
  }, []);

  return (
    <div className="h-screen flex flex-col itens-center justify-center bg-blue-0"
      onMouseMove={(e) => {
        const x = e.clientX;
        const y = e.clientY;
        const bg = `radial-gradient(circle 3000px at ${x}px ${y}px,rgb(75 89 111), rgb(45 54 67))`;
        e.currentTarget.style.background = bg;
      }}>
            <h1 className="text-2xl font-bold text-center"> Lista de usuarios cadastrados</h1>
            
            <ul>
                {usuarios.map((usuario) => (
                    <li key={usuario.id}>
                        {usuario.nome}
                        {usuario.email} 
                        {usuario.senha}
                    </li>
                    )
                )}
            </ul>
            

          
        
            
        
      </div>
        
  );
}

export default Users;