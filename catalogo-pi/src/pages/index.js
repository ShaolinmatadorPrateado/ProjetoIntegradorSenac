
import { Anybody, Inter } from "next/font/google";
import Produto from "@/components/Produto";
import Rodape from "@/components/Cabecalho";
import axios from "axios";
import { useEffect, useState } from "react";
import Cabecalho from "@/components/Cabecalho";

const inter = Inter({ subsets: ["latin"] });

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
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
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
        <Rodape></Rodape>
        <div>
          <h3></h3>
        </div>
      </div></>
  );
}
