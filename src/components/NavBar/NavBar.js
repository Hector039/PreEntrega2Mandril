import CartWidget from "../CartWidget/CartWidget";
import Logo from "./assets/logo.png";
import FacebookIcon from "./assets/facebook-icon.jpg";
import InstagramIcon from "./assets/instagram-icon.jpg";
import WhatsappIcon from "./assets/WhatsApp.svg.png";


export default function NavBar() {
        return (
                <nav className="navbar">
                        <div className="top-navbar">
                                <button className="button-top-navbar">Cuenta</button>
                                <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="network-icon"><img src={FacebookIcon}  alt="Facebook Icono"  /></a>
                                <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="network-icon"><img src={InstagramIcon}  alt="Instagram Icono"  /></a>
                                <a href="https://web.whatsapp.com/" target="_blank" rel="noreferrer" className="network-icon"><img src={WhatsappIcon}  alt="Whatsapp Icono"  /></a>
                        </div>
                        <div className="bottom-navbar">
                                <div className="navbar-brand">
                                        <img src={Logo} alt="Tienda Logo" />
                                </div>

                                <div className="navbar-menu">
                                        <button className="navbar-item">Inicio</button>
                                        <button className="navbar-item">Mercadito</button>
                                        <button className="navbar-item">Mi Cuenta</button>
                                        <button className="navbar-item">Carrito</button>
                                        <button className="navbar-item">Contacto</button>
                                        <CartWidget />
                                </div>
                        </div>
                </nav>
        )
}