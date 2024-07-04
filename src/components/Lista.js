import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { useContexData } from '../Context/Context';



export default function Lista(props) {

    const { ObtenerGasto, handlerDelete } = useContexData();

  

    return (
        <View className='mt-4'>
            {props.gastos && props.gastos.length > 0 ? (
                props.gastos.map((gasto) => (

                    <View key={gasto.id} className='border-gray-700 border-2 mx-4  flex-row justify-between items-center'>
                        <Text className='mx-2 p-3 flex-1'>
                            {gasto.nombre}
                        </Text>
                        <Text className='mx-2 p-3 flex-1'>
                            {gasto.valor}
                        </Text>
                        <TouchableOpacity className='flex bg-red-600 items-center m-4 p-2 rounded-3xl '
                            onPress={() => handlerDelete(gasto.id)}
                        >
                            <AntDesign name="delete" size={24} color="white" />
                        </TouchableOpacity>
                        <TouchableOpacity className='flex bg-sky-600 items-center m-4 p-2 rounded-3xl '
                            onPress={() => ObtenerGasto(gasto.id)}
                        >
                            <Entypo name="edit" size={24} color="white" />
                        </TouchableOpacity>
                    </View>

                ))
            ) : (
                <View className='border-gray-700 border-2 mx-4  '>
                    <Text className='mx-2 p-3 text-center'>
                        Tienes que agregar un nuevo gasto
                    </Text>
                </View>
            )}
        </View>
    )
}