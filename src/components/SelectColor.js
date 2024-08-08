import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'


export default function SelectColor({ SeleColor, SetSelectColor }) {
    const Colors = ['grey', '#ff6c00', '#009688', '#3f51b5', '#e91e63'];

    return (
        <View className='flex-row gap-5 mt-5 items-center justify-center '>
            {
                Colors.map((color, index) => (
                    <TouchableOpacity
                        key={index}
                        className='w-10 h-10 rounded-full'
                        style={[{
                            backgroundColor: color
                        }, SeleColor == color && { borderWidth: 4 }]}
                        onPress={() => SetSelectColor(color)}
                    >
                    </TouchableOpacity>
                ))
            }
        </View>
    )
}