import React from 'react'

function CameraItem({title, price, image, like}) {
    const [count, setCount] = React.useState(0)

    const [liked, setLiked] = React.useState(like)

    return (
        <div className="cameras__item item">
            <div className="item__body">
                <div className="item__image">
                    <img src={image} alt={title}/>
                </div>
                <div className="item__info">
                    <div className="item__title">
                        {title}
                    </div>
                    <div className="item__price">
                        <span className="item__cost shortcut-style">
                            {price} ₽
                        </span>
                        <span className="item__new">
                            Новое
                        </span>
                    </div>
                    <div className="item__bottom">
                        <button onClick={() => setCount(count + 1)} className="item__btn">
                            В корзину
                        </button>
                        <span>
                            {count}
                        </span>
                        <div onClick={() => setLiked(!liked)}
                             className={liked === true ? 'item__like active' : 'item__like'}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CameraItem