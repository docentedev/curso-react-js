import Mod01 from "./Mod01/Mod01"
import Mod02 from "./Mod02/Mod02"
import Mod03 from "./Mod03/Mode03"
import Mod04 from "./Mod04/Mod04"

const title = '1º SESIÓN :NIVELACIÓN ES6, JAVASCRIPT FUNCIONAL'

const Clase01 = () => {

    return (
        <div>
            <h1>{title}</h1>
            <div className="my-4 card">
                <div className="card-body">
                    <Mod01 />
                </div>
            </div>
            <div className="my-4 card">
                <div className="card-body">
                    <Mod02 />
                </div>
            </div>
            <div className="my-4 card">
                <div className="card-body">
                    <Mod03 />
                </div>
            </div>
            <div className="my-4 card">
                <div className="card-body">
                    <Mod04 />
                </div>
            </div>
        </div>
    )
}

export default Clase01
