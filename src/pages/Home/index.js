import "./home.css";
import { React, useEffect, useState } from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdMenu, MdAddShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import imgrr11 from "../../img/sobre-nos-rr11.webp";
import logo from "../../img/logo.webp";
import api from "../../services/api";

export default function Home() {
  const [showmenu, setShowmenu] = useState(false);
  const [categoria, setCategoria] = useState([]);

  useEffect(() => {
    const header = document.getElementById("header");

    document.addEventListener("scroll", function () {
      //guardando a posicao da pagina no eixo y
      var posicaoy = window.pageYOffset;
      if (posicaoy !== 0) {
        document.getElementById("redes").setAttribute("style", "display:none");
        document.getElementById("menu").setAttribute("style", "display:none");
        document
          .getElementById("btnarea")
          .setAttribute("style", "display:flex");
        document.querySelector(".header").classList.add("animationheader");
      } else {
        document.querySelector(".header").classList.remove("animationheader");
        document.getElementById("redes").setAttribute("style", "display:flex");
        document
          .getElementById("btnarea")
          .setAttribute("style", "display:none");
        document.getElementById("menu").setAttribute("style", "display:flex");
        // header.setAttribute('style', 'background-attachment:fixed;')
      }
    });
  }, []);

  function closemenu() {
    setShowmenu(false);
  }

  function opemMenu() {
    setShowmenu(true);
  }

  return (
    <div className="container-home">
      {showmenu != false ? (
        <div id="main-menu">
          <div
            style={{
              width: "90%",
              height: "40px",
              display: "flex",
              justifyContent: "flex-end",
              marginBottom: "15rem",
            }}
          >
            <button
              style={{
                border: "0",
                background: "transparent",
                color: "#fff",
                fontSize: "2rem",
                cursor: "pointer",
                marginTop: "20px",
              }}
              onClick={closemenu}
            >
              X
            </button>
          </div>
          <button className="btnmenu">Home</button>
          <button className="btnmenu">Contato</button>
          <button className="btnmenu">Sobre-nos</button>
          <Link
            to={"/login"}
            className="btnmenu"
            style={{ textDecoration: "none", textAlign: "center" }}
          >
            Minha conta
          </Link>
        </div>
      ) : (
        ""
      )}
      <header id="header" className="header">
        <div className="redes-sociais" id="redes">
          <Link to={""}>
            <FaFacebook size={25} color="grey"></FaFacebook>
          </Link>
          <Link to={""}>
            <FaInstagram size={25} color="grey"></FaInstagram>
          </Link>
          <Link to={""}>
            <FaLinkedin size={25} color="grey"></FaLinkedin>
          </Link>
        </div>
        <div className="logo-home">
          <img style={{ width: "100px" }} src={logo}></img>
        </div>
        <div id="btnarea">
          <button>Home</button>
          <button>Contato</button>
          <button>Sobre-nos</button>
          <Link to={"/login"} className="minhaconta">
            Minha conta
          </Link>
          <button>
            <MdAddShoppingCart size={30} color="#fff"></MdAddShoppingCart>
          </button>
        </div>
        <button className="menu" id="menu">
          <MdMenu color="#fff" size={40} onClick={opemMenu}></MdMenu>
        </button>
      </header>
      <section className="section1">
        <h1 style={{ color: "#fff" }}> aqui vai o slide</h1>
      </section>
      <section className="section2">
        <div className="categoryArea">
          <Link className="box-category" id="box1" to="/sutian">
            <h2>SUTIANS</h2>
          </Link>
          <Link className="box-category" id="box2" to="/calcinha">
            <h2>CALCINHAS</h2>
          </Link>
          <Link className="box-category" id="box3">
            <h2>Item</h2>
          </Link>
          <Link className="box-category" id="box4">
            <h2>Item</h2>
          </Link>
        </div>
      </section>
      <div className="text-area">
        <h1>Texto</h1>
      </div>
      <section className="section3">
        <div className="banner1">
          <h1 style={{ color: "#fff" }}>banner1</h1>
        </div>
        <div className="banner2">
          <h1 style={{ color: "#fff" }}>banner2</h1>
        </div>
      </section>
      <section className="section4">
        <div className="imagem">
          <img src={imgrr11}></img>
        </div>
        <div className="text-sobrenos">
          <h2 style={{ color: "#fff" }}>SOBRE NÓS</h2>
          <p>
            A <strong>RR11</strong> surgiu da nossa vontade de oferecer produtos
            produtos de qualidade e ideias inovadoras.
          </p>
          <br></br>
          <p>Nosso maior comprometimento é com a satisfação dos clientes!</p>
        </div>
      </section>
      <footer>
        <div className="send-email-area">
          <div className="nome-title">
            <p>NEWSLETTER</p>
            <span>LISTA VIP</span>
          </div>
          <div className="input-send-email">
            <input type="text"></input>
          </div>
        </div>
      </footer>
    </div>
  );
}
