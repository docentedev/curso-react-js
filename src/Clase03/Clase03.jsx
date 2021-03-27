import Mod01 from "./Mod01/Mod01"
import Mod02 from "./Mod02/Mod02"
import Mod03 from "./Mod03/Mod03"
import Mod04 from "./Mod04/Mod04"

const title = '3º SESIÓN :CONDICIONANDO EL RENDERING Y MÁS'

const Clase03 = () => {

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

export default Clase03
