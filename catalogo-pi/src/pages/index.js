import Produto from "@/components/Produto";
import Cabecalho from "@/components/Cabecalho";
import axios from "axios";
import { useEffect, useState } from "react";
import Rodape from "@/components/Rodape";

export default function Home() {

  const [listaProduto, setListaProduto] = useState([]);
  const [listaProdutoFiltrado, setListaProdutoFiltrado] = useState([]);


  useEffect(() => {
    axios
      .get('https://localhost:7134/api/Produto/ListaAsync')
      .then(resp => {
        setListaProduto(resp.data);
        setListaProdutoFiltrado(resp.data);
        console.log(resp, listaProduto)
      }

      );
  }, []);

  function handlePesquisar(filtro){
    const valorFiltro = filtro.target.value

    const filtrado = listaProduto.filter((dado) => 
    dado.nome.toLowerCase().includes(valorFiltro.toLowerCase()))

    setListaProdutoFiltrado(filtrado)
    console.log(filtro)

  }

  return (
    <>
      <Cabecalho pesquisar={handlePesquisar} />
      <div className="container-fluid mt-2">
        <div className="row ">
          {
            listaProdutoFiltrado.map((dado, index) => <Produto
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
