import "./App.css"
import SideBar from "./components/SideBar"
import CameraItem from "./components/CameraItem"
import cameras from "./assets/cameras.json"

function App() {

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
                                        <CameraItem {...item}/>
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