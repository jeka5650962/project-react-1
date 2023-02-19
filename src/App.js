import "./App.css"
import SideBar from "./components/SideBar"
import CameraItem from "./components/CameraItem"
import cameras from "./assets/cameras.json"

function App() {
    fetch('https://63f1fa824f17278c9a1dae33.mockapi.io/cameras')
        .then(response => {
            return response.json()
        })
        .then(json => {
            console.log(json)
        })

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