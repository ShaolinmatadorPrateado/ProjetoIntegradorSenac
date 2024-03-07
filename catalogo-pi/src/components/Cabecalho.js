import Image from "next/image";
import Link from "next/link";
export default function Cabecalho(props) {
 
  return (<nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
    <div>
      <Link className="Menu ms-2 link" href="/">Home</Link>
      <Link className="Cadastro ms-2 link" href="/cadastro">Cadastro</Link>
    </div>
    <div>
      <input onChange={props.pesquisar}/>
     
 
 
 
 
      <button className="carrinho " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
        <Image src={"/assets/Supla.png"} alt="..." width={35} height={35} />
      </button>
 
      <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabIndex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">Carrinho</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <p>Try scrolling the rest of the page to see this option in action.</p>
        </div>

        <div className="d-flex">
          <input
          className="form-control me-2"
          type="search"
          placeholder="Pesquisa"
          
          />
        </div>
      </div>
    </div>
  </nav>)
 
}

