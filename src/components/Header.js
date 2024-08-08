import { View, Text, Image } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo'
import Ionicons from '@expo/vector-icons/Ionicons';
import { StatusBar } from 'expo-status-bar';

export default function Header() {
    const { user } = useUser()
    
    return (
        <>
            <StatusBar backgroundColor='black' style='light' />
            <View>

            <View className=" flex-row gap-3 items-center">
                <Image className='w-12 h-12 rounded-full' source={{ uri: user?.imageUrl }} />
                <View className="flex-row justify-between w-[80%] items-center">
                    <View className=" ">
                        <Text className="text-white">Vienvenido</Text>
                        <Text className="text-white font-bold text-xl ">{user?.firstName}</Text>
                    </View>
                    <Ionicons name="notifications" size={24} color="white" />
                </View>
            </View>
            </View>
        </>
    )
}