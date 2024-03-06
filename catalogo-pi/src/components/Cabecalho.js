import Image from "next/image";
import Link from "next/link";
export default function Menu() {
 
  return (<nav class="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
    <div>
      <Link className="Menu ms-2 link" href="/">Home</Link>
      <Link className="Cadastro ms-2 link" href="/cadastro">Cadastro</Link>
    </div>
    <div>
      <input />
      <button className="btn btn-primary ms-2">Pesquisar</button>
 
 
 
 
      <button className="carrinho " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
        <Image src={"/assets/Supla.png"} width={35} height={35} />
      </button>
 
      <div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">Carrinho</h5>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <p>Try scrolling the rest of the page to see this option in action.</p>
        </div>
      </div>
    </div>
  </nav>)
 
}

