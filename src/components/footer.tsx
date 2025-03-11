function Footer() {
const anoAtual = new Date().getFullYear();

  return (
    <>
    <footer className="bg-gray-800 text-white text-center p-4"
    onMouseMove={(e) => {
        const x = e.clientX;
        const y = e.clientY;
        const bg = `radial-gradient(circle 1000px at ${x}px ${y}px,rgb(255, 255, 255),#1e2939;  )`;
        e.currentTarget.style.background = bg;
    }}
    >
        <p>
            &copy; {anoAtual} - Todos os direitos reservados
        </p>
        <p>
            Marca registrada &reg;
        </p>

    </footer>
    </>
  );
}
export default Footer;