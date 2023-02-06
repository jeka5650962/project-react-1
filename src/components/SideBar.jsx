function SideBar() {
    return (
        <div className="cameras__filter">
            <div className="cameras__count">
                Товаров 143
            </div>
            <h1 className="cameras__title">
                Камеры
            </h1>
            <label htmlFor="min-price" className="cameras__shortcut cameras__shortcut_1 shortcut-style">
                Цена, ₽
            </label>
            <div className="cameras__price">
                <input id="min-price" type="number" name="minimum-price" placeholder="0"
                       className="cameras__price-input cameras__price-input_1"/>
                <input id="max-price" type="number" name="maximum-price" placeholder="499000"
                       className="cameras__price-input cameras__price-input_2"/>
            </div>
            <div className="cameras__shortcut cameras__shortcut_2 shortcut-style">
                Бренд
            </div>
            <div className="cameras__brands">
                <div className="cameras__brand">
                    <label className="cameras__brand-label">
                        <input type="checkbox" name="brand-canon" className="real-checkbox"/>
                        <span className="custom-checkbox"/>
                        Olympus
                    </label>
                </div>
                <div className="cameras__brand">
                    <label className="cameras__brand-label">
                        <input type="checkbox" name="brand-nikon" className="real-checkbox"/>
                        <span className="custom-checkbox"/>
                        Sony
                    </label>
                </div>
                <div className="cameras__brand">
                    <label className="cameras__brand-label">
                        <input type="checkbox" name="brand-sony" className="real-checkbox"/>
                        <span className="custom-checkbox"/>
                        Fujifilm
                    </label>
                </div>
                <div className="cameras__brand">
                    <label className="cameras__brand-label">
                        <input type="checkbox" name="brand-panasonic" className="real-checkbox"/>
                        <span className="custom-checkbox"/>
                        Nikon
                    </label>
                </div>
            </div>
        </div>
    )
}

export default SideBar