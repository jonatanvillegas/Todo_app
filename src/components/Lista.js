import { View, Text } from 'react-native'
import React from 'react'

export default function Lista(props) {

    return (
        <View className='mt-4'>
            {props.gastos && props.gastos.length > 0 ? (
                props.gastos.map((gasto, index) => (

                    <View key={index} className='border-gray-700 border-2 mx-4  flex-row justify-between items-center'>
                        <Text className='mx-2 p-3'>
                            {gasto.nombre}
                        </Text>
                        <Text className='mx-2 p-3'>
                            {gasto.valor}
                        </Text>
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