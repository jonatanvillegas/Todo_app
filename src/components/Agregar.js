import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { db } from '../../firebaseConfig';
import { addDoc, collection } from 'firebase/firestore';
import uuid from 'react-native-uuid';
import { useContexData } from '../Context/Context';
import { useUser } from '@clerk/clerk-expo';

export default function Agregar() {

    const {user} = useUser()
    
    const { gastoAct,handlerActualizarGasto } = useContexData();

    useEffect(() => {
        setGasto(gastoAct)
    }, [gastoAct])

    const [gasto, setGasto] = useState({
        nombre: "",
        valor: ""
    })

    const AgregarNombre = (e) => {
        setGasto({ ...gasto, nombre: e })
    }

    const AgregarValor = (e) => {
        setGasto({ ...gasto, valor: e })
    }

    const AgregarGasto = async (gasto) => {
        try {
            await addDoc(collection(db, "gastos"), {
                id: uuid.v4(),
                key: user.id,
                nombre: gasto.nombre,
                valor: gasto.valor,
            });
            
            setGasto({
                nombre: "",
                valor: ""
            })
        } catch (error) {
            console.error("Error al crear el registro:", error);
        }

    }


    return (
        <View className='pb-4 mt-6'>
            <Text className='text-3xl font-bold text-white text-center'>Añade tus gasto {user?.firstName} </Text>
            <TextInput className=' mr-4 ml-4 mt-4 p-2  rounded-md  h-10 bg-white border border-gray-300 '
                placeholder='  Nombre Gasto Ej: Transporte'
                onChangeText={AgregarNombre}
                value={gasto.nombre}
            />

            <TextInput keyboardType='numeric' className='mr-4 ml-4 mt-4 p-2 mb-4 rounded-md  h-10 bg-white border border-gray-300 '
                placeholder='  Cantidad Gastos Ej: 100'
                onChangeText={AgregarValor}
                value={gasto.valor}
            />
            {gasto.id ?
                <TouchableOpacity className='flex  bg-white items-center m-4 p-2 rounded-md'
                    onPress={() => {
                        handlerActualizarGasto(gasto)
                    }}
                >
                    <Text className='text-sky-600 font-bold text-sm'>Actualizar</Text>
                </TouchableOpacity>
                :
                <TouchableOpacity className='flex bg-white items-center m-4 p-2 rounded-md'
                    onPress={() => {
                        AgregarGasto(gasto)
                    }}
                >
                    <Text className='text-sky-600 font-bold text-sm'>Agregar</Text>
                </TouchableOpacity>
            }
        </View>
    )
}