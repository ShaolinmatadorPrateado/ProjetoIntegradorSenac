import Produto from "@/components/Produto";
import Cabecalho from "@/components/Cabecalho";
import axios from "axios";
import { useEffect, useState } from "react";
import Rodape from "@/components/Rodape";

export default function Home() {

  const [listaProduto, setListaProduto] = useState([])

  useEffect(() => {
    axios
      .get('https://localhost:7134/api/Produto/ListaAsync')
      .then(resp => {
        setListaProduto(resp.data);
        console.log(resp, listaProduto)
      }

      )
  })

  return (
    <>
      <Cabecalho />
      <div className="container-fluid mt-2">
        <div className="row ">
          {
            listaProduto.map((dado, index) => <Produto
              nome={dado.nome}
              key={index}
              descricao={dado.descricao}
              novidade={dado.novidade}
              preco={dado.preco}
              disponivel={dado.disponivel}
              imagem={dado.imagem} />)

          }
        </div>
        <Rodape />

        
       
        <div>
          <h3></h3>
        </div>
      </div></>
  );
}
