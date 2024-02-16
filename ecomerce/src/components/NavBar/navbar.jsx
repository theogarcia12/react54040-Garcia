import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav>
            <h3>Primera Entrega</h3>
            <div>
                <button>Productos</button>
                <button>Carrito</button>
                <button>Galeria</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar