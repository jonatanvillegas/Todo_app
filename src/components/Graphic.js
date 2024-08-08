import { View, Text } from 'react-native'
import React from 'react'
import PieChart from 'react-native-pie-chart'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function Graphic() {
    const widthAndHeight = 190
    const series = [123, 321, 123, 789, 537]
    const sliceColor = ['#666666', '#808080', '#A9A9A9', '#C0C0C0', '#D3D3D3'];

    return (
        <View className='mt-6 p-10 bg-white rounded-3xl flex  shadow-2xl'>
            <Text className=' text-lg'>Total Estimado: <Text className="font-bold">0$</Text> </Text>
            <View className='flex items-center flex-row gap-4 mt-3'>
                <PieChart
                    widthAndHeight={widthAndHeight}
                    series={series}
                    sliceColor={sliceColor}
                    coverRadius={0.45}
                    coverFill={'#FFF'}
                />
                <View className='flex-col gap-1'>
                    <View className="flex-row gap-3">
                        <MaterialCommunityIcons
                            name="checkbox-blank-circle"
                            size={24}
                            color="#666666" />
                        <Text>Foot</Text>
                    </View>
                    <View className="flex-row gap-3">
                        <MaterialCommunityIcons
                            name="checkbox-blank-circle"
                            size={24}
                            color="#666666" />
                        <Text>Foot</Text>
                    </View>
                    <View className="flex-row gap-3">
                        <MaterialCommunityIcons
                            name="checkbox-blank-circle"
                            size={24}
                            color="#666666" />
                        <Text>Foot</Text>
                    </View>
                    <View className="flex-row gap-3">
                        <MaterialCommunityIcons
                            name="checkbox-blank-circle"
                            size={24}
                            color="#666666" />
                        <Text>Foot</Text>
                        
                    </View>
                    <View className="flex-row gap-3">
                        <MaterialCommunityIcons
                            name="checkbox-blank-circle"
                            size={24}
                            color="#666666" />
                        <Text>Foot</Text>
                        
                    </View>
                </View>
            </View>
        </View>
    )
}