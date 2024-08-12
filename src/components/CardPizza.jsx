
const CardPizza = ({ name, price, image, ingredients }) => {
    return (
      <div className="card w-75">
        <img src={image} className="card-img-top" alt={name} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
        </div>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">
          <p className="card-text text-center">Ingredientes:</p>
          <p className="card-text text-center fw-lighter">{ingredients.join(", ")}</p>
        </li>
        <li class="list-group-item"><p className="card-text text-center"><strong>Precio: ${price}</strong></p></li>
      </ul>
        <div class="card-body ">
          <div class="row text-center">
            <div class="col">
              <button type="button" class="btn btn-outline-info btn-sm">Ver más 👀</button>
            </div>
            <div class="col">
              <button type="button" class="btn btn-dark btn-sm">Añadir 🛒</button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default CardPizza;
  