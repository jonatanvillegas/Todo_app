import { View, Text, ScrollView, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import Agregar from '../components/Agregar';
import Lista from '../components/Lista';
import Barra from '../components/Barra';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import { StatusBar } from 'expo-status-bar';

export default function Gasto() {

    const [gastos, setGastos] = useState([]);

    useEffect(() => {
        const q = collection(db, 'gastos');
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const gastosData = [];
            querySnapshot.forEach((doc) => {
                gastosData.push(doc.data());
            });
            setGastos(gastosData)
        });

        return () => {
            unsubscribe();
        };
    }, []);

    const valorTotal = gastos.reduce((total, gasto) => total + parseInt(gasto.valor, 10), 0)
    return (
        <View className="bg-white h-full w-full">
            <StatusBar style='light' />
            <Image className='h-full w-full absolute' source={require('../../assets/background.png')} />
            <View className='flex-1 flex-col justify-between'>
                <Agregar />
                <Text className='font-bold text-3xl ml-4 text-white text-center'>Lista gastos </Text>
                <ScrollView>
                    <Lista gastos={gastos} />
                </ScrollView>
                <Barra sumatoria={valorTotal} />
            </View>
        </View>
    )
}