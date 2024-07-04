import { collection, deleteDoc, getDocs, query, updateDoc, where } from "firebase/firestore";
import { createContext, useContext, useState } from "react";
import { db } from "../../firebaseConfig";

const Context = createContext();

export const CreateProvider = ({ children }) => {

    const [gastoAct, setGastoAct] = useState({})
  
    
    const ObtenerGasto = async (id) => {
        try {
            const querySnapshot = await getDocs(query(collection(db, 'gastos'), where('id', '==', id)));

            querySnapshot.forEach((doc) => {

                const data = doc.data();
                setGastoAct(data)
            });
            console.log(gastoAct)
        } catch (error) {
            console.log('error al conseguir el gasto', error)
        }
    }

    const handlerDelete = async (id) => {
        try {
            const querySnapshot = await getDocs(query(collection(db, 'gastos'), where('id', '==', id)));
            querySnapshot.forEach(async (doc) => {
                await deleteDoc(doc.ref);
                console.log("Registro eliminado correctamente");
            });
            setGastoAct({})
        } catch (error) {
            console.error("Error al eliminar el registro:", error);
        }
    }

    const handlerActualizarGasto = async (gasto) => {
        try {
            const querySnapshot = await getDocs(query(collection(db, 'gastos'), where('id', '==', gasto.id)));
            querySnapshot.forEach(async (doc) => {
                await updateDoc(doc.ref, {
                    nombre: gasto.nombre,
                    valor: gasto.valor
                });
                console.log("Registro actualizado correctamente");
            });
            setGastoAct({})
        } catch (error) {
            console.error("Error al eliminar el registro:", error);
        }
    }

    
    

    return (
        <Context.Provider
            value={{
                ObtenerGasto,
                gastoAct,
                handlerDelete,
                handlerActualizarGasto
            }}
        >
            {children}
        </Context.Provider>
    )
}
export const useContexData = () => {
    return useContext(Context)
}

