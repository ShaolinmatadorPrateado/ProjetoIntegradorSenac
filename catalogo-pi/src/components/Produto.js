export default function Produto(props) {


  
    return (
      <div className="col-sm-6 col-md-4 col-xl-3 col-xxl-3 mb-3"><div className="card h-100 w-100 " style={{ width: "18rem" }}>
        <img src={props.imagem} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.nome}</h5>
          <p className="card-text">{props.descricao}</p>
    
        </div>

        <div className="card-footer ButaoValor text-center p-2">
        <a href="#" className="btn btn-primary">{Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(props.preco)}</a>
        </div>

      </div>

        </div>

    );
}
