import React, { useEffect, useState } from "react"
import api from "../../services/api"
import { useParams, Link } from 'react-router-dom'
import './produto.css'

export default function Produtoview() {
    const { produtoparamer } = useParams();

    const [produto, setProduto] = useState([])
    const [modaldetails, setModaldetails] = useState(false)
    const [iteminfo, setIteminfo] = useState([])

    useEffect(() => {
        async function loadprodutos() {
           
          const response = await  api.get(`/produto?produto=${produtoparamer}`)
              setProduto(response.data)
        }
        loadprodutos()
    }, [])

    function showdetalhes(item) {
        setIteminfo(item)
        setModaldetails(true)
    }


    return (
        <div id="content-main">
            {produto.map((item) => {
                return (
                    <div id="item" key={item.id}>
                        <img style={{ width: "300px", height: "300px", objectFit: "cover" }} src={item.imgurl}></img>
                        <span>{item.modelo}</span>
                        <span>{item.cor}</span>
                        <strong>R${item.preco},00</strong>
                        <button id="btn-maisdetails" onClick={() => showdetalhes(item)}>Mais detalhes</button>
                    </div>
                )
            })}
            {modaldetails != false ? <div className="modaldetails">
                <div id="closemodaldetails">
                    <button onClick={() => setModaldetails(false)} id='btnclosedetails'>X</button>
                </div>
                <img style={{ width: "300px", height: "300px", objectFit: "cover" }} src={iteminfo.imgurl}></img>
                <span>{iteminfo.modelo}</span>
                <span>{iteminfo.cor}</span>
                <strong>R${iteminfo.preco},00</strong>
                <div style={{ display: "flex" }}></div>
                <button id="addcarrinho">Adicionar no carrinho</button>
            </div> : ''}
        </div>

    )
}