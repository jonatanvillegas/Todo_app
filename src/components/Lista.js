import { View, Text, TouchableOpacity, RefreshControl } from 'react-native';
import React from 'react';
import { SwipeListView } from 'react-native-swipe-list-view';
import { useContexData } from '../Context/Context';
import { formatCurrency } from '../utils';

export default function Lista({ categorias, refreshing, onRefresh }) {
    const { ObtenerGasto, handlerDelete } = useContexData();

    return (
        <View className='flex-1  mt-4'>
            {categorias && categorias.length > 0 ? (
                <SwipeListView
                    data={categorias}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item: categoria }) => (
                        <View key={categoria.id} className='bg-white mx-4 rounded-lg mb-3 p-4'>
                            <View className='flex-row gap-5 items-center'>
                                <View className='p-3 rounded-xl' style={{ backgroundColor: categoria.color }}>
                                    <Text className='text-2xl flex items-center'>{categoria.icon}</Text>
                                </View>
                                <View className='flex-row justify-between items-center w-[70%]'>
                                    <View>
                                        <Text className="font-bold text-xl">{categoria.name}</Text>
                                        <Text>0 items</Text>
                                    </View>
                                    <Text className='font-semibold text-base'>{formatCurrency(categoria.assigned_budget)}</Text>
                                </View>
                            </View>
                        </View>
                    )}
                    renderHiddenItem={({ item }) => (
                        <View className='flex-row justify-end bg-red-600 rounded-lg mb-3 mx-4'>
                            <TouchableOpacity
                                className='p-8'
                                onPress={() => handlerDelete(item.id)}
                            >
                                <Text className='text-white'>Delete</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                    rightOpenValue={-85}
                    stopRightSwipe={-75}
                    disableRightSwipe
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={onRefresh}
                        />
                    }
                    showsVerticalScrollIndicator={false}
                />
            ) : (
                <View className='border-gray-700 border-2 mx-4'>
                    <Text className='mx-2 p-3 text-center'>
                        Tienes que agregar un nuevo gasto
                    </Text>
                </View>
            )}
        </View>
    );
}
