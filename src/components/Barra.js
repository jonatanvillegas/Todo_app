import { View, Text } from 'react-native'
import React from 'react'

export default function Barra(props) {
    return (
        <View className='border-2 p-4 m-4  flex-row justify-between'>
            <Text className='uppercase font-bold'>Total</Text>
            <Text className='text-pink-600 font-bold'>${props.sumatoria}</Text>
        </View>
    )
}