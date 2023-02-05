function CameraItem() {
    return (
        <div className="cameras__item item">
            <div className="item__body">
                <div className="item__image">
                    <img src="images/photos/photo-1.jpg" alt="Olympus OM-D E-M5"/>
                </div>
                <div className="item__info">
                    <div className="item__title">
                        Olympus OM-D E-M5
                    </div>
                    <div className="item__price">
                        <span className="item__cost shortcut-style">
                            28 000 ₽
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