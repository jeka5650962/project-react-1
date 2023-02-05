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
                                <CameraItem/>
                                <CameraItem/>
                                <CameraItem/>
                                <CameraItem/>
                                <CameraItem/>
                                <CameraItem/>
                                <CameraItem/>
                                <CameraItem/>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default App