export default function Produto(props) {
    return (
      <><div class="card" style={{ width: "18rem" }}>
        <img src={props.imagem} class="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.nome}</h5>
          <p className="card-text">{props.descricao}</p>
          <a href="#" class="btn btn-primary">{props.preco}</a>
        </div>

      </div>

        </>

    );
}
