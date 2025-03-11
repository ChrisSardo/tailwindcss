import { use } from "react";
import { Link,useLocation,useParams} from "react-router-dom";


function Profile() {
    const location = useLocation();
    const {username,email,password} = location.state || {};

    return (
        <>
            <div className="h-screen flex flex-col itens-center justify-center bg-blue-0"
                onMouseMove={(e) => {
                    const x = e.clientX;
                    const y = e.clientY;
                    const bg = `radial-gradient(circle 1000px at ${x}px ${y}px,rgb(255, 255, 255),rgb(222, 178, 243))`;
                    e.currentTarget.style.background = bg;
                }}>
                <h1 className="text-2xl font-bold text-center"> Area do Usuario</h1>

                <hr className="w-screen" />
                <p className="test-1sm text-center text-black">Bem vindo, {username} Aqui você pode ver suas informações</p>
                <p className="text-center text-black">Email: {email}</p>
                <p className="text-center text-black">Senha: {password}</p>

                <Link className="m4-4 text-purple-300 hover:text-purple-500" to="/">Voltar</Link>
                </div>






        </>
    )
}

export default Profile
