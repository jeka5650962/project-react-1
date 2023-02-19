import React from "react"
import "./App.css"
import SideBar from "./components/SideBar"
import CameraItem from "./components/CameraItem"

function App() {
    const [cameras, setCameras] = React.useState([])

    React.useEffect(() => {
        fetch('https://63f1fa824f17278c9a1dae33.mockapi.io/cameras')
            .then(response => response.json())
            .then(json => setCameras(json))
    }, [])

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
                                        <CameraItem key={item.id} {...item}/>
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