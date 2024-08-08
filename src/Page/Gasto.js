import { View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { collection, onSnapshot, query, where } from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import { useUser } from '@clerk/clerk-expo';
import { Link } from '@react-navigation/native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Header from '../components/Header';
import Graphic from '../components/Graphic';
import Lista from '../components/Lista';

const obtenerCategoria = (user, setCategorias) => {
    const q = query(collection(db, 'categoria'), where("create_by", "==", user.id));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const categoriasData = [];
        querySnapshot.forEach((doc) => {
            const data = doc.data();
            data.id = doc.id; // Añade el ID del documento a los datos
            categoriasData.push(data);
        });
        setCategorias(categoriasData);
    }, (error) => {
        console.error('Error al obtener las categorías: ', error);
    });

    return unsubscribe;
};

export default function Gasto() {
    const [categorias, setCategorias] = useState([]);
    const { user } = useUser();
    const [refreshing, setRefreshing] = useState(false);

    useEffect(() => {
        if (!user) return;

        const unsubscribe = obtenerCategoria(user, setCategorias);

        return () => {
            unsubscribe();
        };
    }, [user]);

    const onRefresh = () => {
        setRefreshing(true);
        obtenerCategoria(user, setCategorias);
        setRefreshing(false);
    };

    return (
        <View className='flex-1 mt-5'>
            <View className="p-5 bg-slate-950 h-60">
                <Header />
            </View>
            <View className='p-6 -mt-48 flex-1'>
                <Graphic />
                <Lista
                    categorias={categorias}
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                />
            </View>
            <View className='absolute bottom-5 right-5'>
                <Link to={{ screen: 'AgregarCategoria' }}>
                    <MaterialIcons name="add-circle" size={48} color="black" />
                </Link>
            </View>
        </View>
    );
}
