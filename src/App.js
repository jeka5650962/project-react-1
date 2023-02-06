import './App.css'
import SideBar from './components/SideBar'
import CameraItem from './components/CameraItem'

function App() {
    return (
        <div className="wrapper">
            <main className="page">
                <div className="cameras">
                    <div className="cameras__container">
                        <div className="cameras__body">
                            <SideBar/>
                            <div className="cameras__items">
                                <CameraItem
                                    title={'Olympus OM-D E-M5'}
                                    price={28000}
                                    image={'images/photos/photo-1.jpg'}/>
                                <CameraItem
                                    title={'Sony Alpha ILCE-A7M2 A7 mark II'}
                                    price={118000}
                                    image={'images/photos/photo-2.jpg'}/>
                                <CameraItem
                                    title={'Fujifilm X-T20'}
                                    price={12500}
                                    image={'images/photos/photo-3.jpg'}/>
                                <CameraItem
                                    title={'Fujifilm X-T20'}
                                    price={15000}
                                    image={'images/photos/photo-4.jpg'}/>
                                <CameraItem
                                    title={'Nikon d61 Kit 70mm f/1.4'}
                                    price={19000}
                                    image={'images/photos/photo-5.jpg'}/>
                                <CameraItem
                                    title={'Nikon d61 Kit 70mm f/1.4'}
                                    price={96000}
                                    image={'images/photos/photo-6.jpg'}/>
                                <CameraItem
                                    title={'Fujifilm X-A1'}
                                    price={19000}
                                    image={'images/photos/photo-7.jpg'}/>
                                <CameraItem
                                    title={'Fujifilm X10 Back'}
                                    price={96000}
                                    image={'images/photos/photo-8.jpg'}/>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default App