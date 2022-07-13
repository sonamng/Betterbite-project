function Cards(props) {
  return (
    <div class="container">
      <div class="container">
        <div className="cards">
          <div className="card">
            <img
              class="card-img-top"
              src={props.img}
              alt="Card image cap"
              height={"50%"}
              width={"100%"}
            />
            <div class="card-body">
              <div className="card_info">
                <h4 className="card_title">{props.name}</h4>
                <h2 className="card_contain">Price : {props.price}</h2>

                <button
                  className="btn"
                  onClick={(event) => props.handleClick(props.price)}
                >
                  add
                </button>
                <button
                  className="btn1"
                  onClick={(event) => props.handleRemove(props.price)}
                >
                  remove
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
