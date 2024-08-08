import { View, Text, Button } from 'react-native'
import React from 'react'
import { useAuth } from '@clerk/clerk-expo'

export default function Barra(props) {
    const {signOut} = useAuth()
    return (
        <View className='border-2 p-4 m-4  flex-row justify-between w-28'>
            <Text className='uppercase font-bold'>Total</Text>
            <Text className='text-sky-600 font-bold'>${props.sumatoria}</Text>
            <Button className= "p-5 bg-blue-400" title='Salir' onPress={signOut}/>
        </View>
    )
}