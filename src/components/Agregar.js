import { View, Text, TextInput, Touchable, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

export default function Agregar(props) {
    const [gasto, setGasto] = useState({
        nombre: "",
        valor: ""
    })

    const AgregarNombre = (e) => {
      setGasto({...gasto, nombre: e})
    }

    const AgregarValor = (e) => {
        setGasto({...gasto, valor: e})
      }

      const AgregarGasto = (gasto) => {

        props.Agregar(gasto)
        console.log("se ha guardado el gasto")
        setGasto({
            nombre: "",
            valor: ""
        })
      }
      
    
    return (
        <View className='pb-4 mt-10'>
            <Text className='text-3xl font-bold text-center'>Añade tus gastos</Text>
            <TextInput className='border-2 mr-4 ml-4 mt-2 p-2 border-gray-500 rounded-md' 
            placeholder='  Nombre Gasto Ej: Transporte' 
            onChangeText={AgregarNombre}
            value={gasto.nombre}
            />

            <TextInput keyboardType='numeric' className='border-2 mr-4 ml-4 mt-3 p-2 border-gray-500 rounded-md'
             placeholder='  Cantidad Gastos Ej: 100'
             onChangeText={AgregarValor}
             value={gasto.valor}
             />
        
            <TouchableOpacity className='flex bg-pink-600 items-center m-4 p-2 rounded-md'
            onPress={()=> {
                console.log(gasto)
                AgregarGasto(gasto)
            }}
            >
                <Text className='text-white font-bold text-sm'>Agregar</Text>
            </TouchableOpacity>
        </View>
    )
}