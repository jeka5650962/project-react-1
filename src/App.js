import './App.css'
import SideBar from './components/SideBar'
import CameraItem from './components/CameraItem'

function App() {

    const cameras = [
        {
            id: 0,
            title: 'Olympus OM-D E-M5',
            price: 28000,
            image: 'images/photos/photo-1.jpg',
            like: false
        },
        {
            id: 1,
            title: 'Sony Alpha ILCE-A7M2 A7 mark II',
            price: 118000,
            image: 'images/photos/photo-2.jpg',
            like: false
        },
        {
            id: 2,
            title: 'Fujifilm X-T20',
            price: 12500,
            image: 'images/photos/photo-3.jpg',
            like: false
        },
        {
            id: 3,
            title: 'Fujifilm X-T20',
            price: 15000,
            image: 'images/photos/photo-4.jpg',
            like: false
        },
        {
            id: 4,
            title: 'Nikon d61 Kit 70mm f/1.4',
            price: 19000,
            image: 'images/photos/photo-5.jpg',
            like: false
        },
        {
            id: 5,
            title: 'Nikon d61 Kit 70mm f/1.4',
            price: 96000,
            image: 'images/photos/photo-6.jpg',
            like: false
        },
        {
            id: 6,
            title: 'Fujifilm X-A1',
            price: 19000,
            image: 'images/photos/photo-7.jpg',
            like: false
        },
        {
            id: 7,
            title: 'Fujifilm X10 Back',
            price: 96000,
            image: 'images/photos/photo-8.jpg',
            like: false
        }
    ]

    return (
        <div className="wrapper">
            <main className="page">
                <div className="cameras">
                    <div className="cameras__container">
                        <div className="cameras__body">
                            <SideBar/>
                            <div className="cameras__items">
                                {
                                    cameras.map(item => (
                                        <CameraItem
                                            key={item.id}
                                            title={item.title}
                                            price={item.price}
                                            image={item.image}
                                            like={item.like}
                                        />
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default App