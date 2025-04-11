import { createContext, useState } from "react";
import { carusel } from "./caruselitem";

export const ModalContext = createContext()

export default function ModalProvider({ children }) {
    const [modal, setModal] = useState("");
    const [active, setActive] = useState(false)
    const [index, setindex] = useState(0)

    const Openmodal = (e, i) => {
        setActive(true)
        setModal(e)
        setindex(i)
    }

    const Nexmodal = () => {
        let curetindex = carusel.indexOf(modal)
        if (curetindex >= carusel.length - 1) {
            setModal(carusel[0])
        }
        else {
            let nextshow = carusel[curetindex + 1]
            setModal(nextshow)
        }
    }

    const Prevmodal = () => {
        let curetindex = carusel.indexOf(modal)
        if (curetindex <= 0) {
            setModal(carusel[carusel.length - 1])
        }
        else {
            let prevmodal = carusel[curetindex - 1]
            setModal(prevmodal)
        }
    }

    return <ModalContext.Provider value={{ setModal, modal, Openmodal, setActive, active, Nexmodal, Prevmodal }}>{children}</ModalContext.Provider>
}