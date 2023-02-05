function CameraItem(props) {
    return (
        <div className="cameras__item item">
            <div className="item__body">
                <div className="item__image">
                    <img src={props.image} alt={props.title}/>
                </div>
                <div className="item__info">
                    <div className="item__title">
                        {props.title}
                    </div>
                    <div className="item__price">
                        <span className="item__cost shortcut-style">
                            {props.price} ₽
                        </span>
                        <span className="item__new">
                            Новое
                        </span>
                    </div>
                    <div className="item__bottom">
                        <button className="item__btn">
                            В корзину
                        </button>
                        <div className="item__like"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CameraItem