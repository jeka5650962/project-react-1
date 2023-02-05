import './App.css'

function App() {
    return (
        <div className="wrapper">
            <main className="page">
                <div className="cameras">
                    <div className="cameras__container">
                        <div className="cameras__body">
                            <div className="cameras__filter">
                                <div className="cameras__count">Товаров 143</div>
                                <h1 className="cameras__title">Камеры</h1>
                                <label htmlFor="min-price"
                                       className="cameras__shortcut cameras__shortcut_1 shortcut-style">Цена,
                                    ₽</label>
                                <div className="cameras__price">
                                    <input id="min-price" type="number" name="minimum-price" placeholder="0"
                                           className="cameras__price-input cameras__price-input_1"/>
                                    <input id="max-price" type="number" name="maximum-price" placeholder="499000"
                                           className="cameras__price-input cameras__price-input_2"/>
                                </div>
                                <div className="cameras__shortcut cameras__shortcut_2 shortcut-style">Бренд</div>
                                <div className="cameras__brands">
                                    <div className="cameras__brand">
                                        <label className="cameras__brand-label">
                                            <input type="checkbox" name="brand-canon" className="real-checkbox"/>
                                            <span className="custom-checkbox"></span>
                                            Canon
                                        </label>
                                    </div>
                                    <div className="cameras__brand">
                                        <label className="cameras__brand-label">
                                            <input type="checkbox" name="brand-nikon" className="real-checkbox"
                                                   checked/>
                                            <span className="custom-checkbox"></span>
                                            Nikon
                                        </label>
                                    </div>
                                    <div className="cameras__brand">
                                        <label className="cameras__brand-label">
                                            <input type="checkbox" name="brand-sony" className="real-checkbox"
                                                   disabled/>
                                            <span className="custom-checkbox"></span>
                                            Sony
                                        </label>
                                    </div>
                                    <div className="cameras__brand">
                                        <label className="cameras__brand-label">
                                            <input type="checkbox" name="brand-panasonic" className="real-checkbox"
                                                   checked
                                                   disabled/>
                                            <span className="custom-checkbox"></span>
                                            Olympus
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="cameras__items">
                                <div className="cameras__item item">
                                    <div className="item__body">
                                        <div className="item__image">
                                            <img src="images/photos/photo-1.jpg" alt="Olympus OM-D E-M5"/>
                                        </div>
                                        <div className="item__info">
                                            <div className="item__title">Olympus OM-D E-M5</div>
                                            <div className="item__price">
                                                <span className="item__cost shortcut-style">28 000 ₽</span>
                                                <span className="item__new">Новое</span>
                                            </div>
                                            <div className="item__bottom">
                                                <button className="item__btn">В корзину</button>
                                                <div className="item__like"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="cameras__item item">
                                    <div className="item__body">
                                        <div className="item__image">
                                            <img src="images/photos/photo-2.jpg" alt="Sony Alpha ILCE-A7M2 A7 mark II"/>
                                        </div>
                                        <div className="item__info">
                                            <div className="item__title">Sony Alpha ILCE-A7M2 A7 mark II</div>
                                            <div className="item__price">
                                                <span className="item__cost shortcut-style">118 000 ₽</span>
                                            </div>
                                            <div className="item__bottom">
                                                <button className="item__btn">В корзину</button>
                                                <div className="item__like"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="cameras__item item">
                                    <div className="item__body">
                                        <div className="item__image">
                                            <img src="images/photos/photo-3.jpg" alt="Fujifilm X-T20"/>
                                        </div>
                                        <div className="item__info">
                                            <div className="item__title">Fujifilm X-T20</div>
                                            <div className="item__price">
                                                <span className="item__cost shortcut-style">12 500 ₽</span>
                                            </div>
                                            <div className="item__bottom">
                                                <button className="item__btn">В корзину</button>
                                                <div className="item__like"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="cameras__item item">
                                    <div className="item__body">
                                        <div className="item__image">
                                            <img src="images/photos/photo-4.jpg" alt="Fujifilm X-T20"/>
                                        </div>
                                        <div className="item__info">
                                            <div className="item__title">Fujifilm X-T20</div>
                                            <div className="item__price">
                                                <span className="item__cost shortcut-style">15 000 ₽</span>
                                            </div>
                                            <div className="item__bottom">
                                                <button className="item__btn">В корзину</button>
                                                <div className="item__like"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="cameras__item item">
                                    <div className="item__body">
                                        <div className="item__novelty">новинка</div>
                                        <div className="item__image">
                                            <img src="images/photos/photo-5.jpg" alt="Nikon d61 Kit 70mm f/1.4"/>
                                        </div>
                                        <div className="item__info">
                                            <div className="item__title">Nikon d61 Kit 70mm f/1.4</div>
                                            <div className="item__price">
                                                <span className="item__cost shortcut-style">19 000 ₽</span>
                                            </div>
                                            <div className="item__bottom">
                                                <button className="item__btn">В корзину</button>
                                                <div className="item__like"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="cameras__item item">
                                    <div className="item__body">
                                        <div className="item__novelty">новинка</div>
                                        <div className="item__image">
                                            <img src="images/photos/photo-6.jpg" alt="Nikon d61 Kit 70mm f/1.4"/>
                                        </div>
                                        <div className="item__info">
                                            <div className="item__title">Nikon d61 Kit 70mm f/1.4</div>
                                            <div className="item__price">
                                                <span className="item__cost shortcut-style">96 000 ₽</span>
                                                <span className="item__new">Новое</span>
                                            </div>
                                            <div className="item__bottom">
                                                <button className="item__btn">В корзину</button>
                                                <div className="item__like"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="cameras__item item">
                                    <div className="item__body">
                                        <div className="item__image">
                                            <img src="images/photos/photo-7.jpg" alt="Fujifilm X-A1"/>
                                        </div>
                                        <div className="item__info">
                                            <div className="item__title">Fujifilm X-A1</div>
                                            <div className="item__price">
                                                <span className="item__cost shortcut-style">19 000 ₽</span>
                                            </div>
                                            <div className="item__bottom">
                                                <button className="item__btn">В корзину</button>
                                                <div className="item__like"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="cameras__item item">
                                    <div className="item__body">
                                        <div className="item__image">
                                            <img src="images/photos/photo-8.jpg" alt="Fujifilm X10 Back"/>
                                        </div>
                                        <div className="item__info">
                                            <div className="item__title">Fujifilm X10 Back</div>
                                            <div className="item__price">
                                                <span className="item__cost shortcut-style">96 000 ₽</span>
                                                <span className="item__new">Новое</span>
                                            </div>
                                            <div className="item__bottom">
                                                <button className="item__btn">В корзину</button>
                                                <div className="item__like"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default App