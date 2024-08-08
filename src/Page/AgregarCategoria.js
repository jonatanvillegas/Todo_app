import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import SelectColor from '../components/SelectColor'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import { useUser } from '@clerk/clerk-expo';

export default function AgregarCategoria() {
    const {user} = useUser()
    const [SelectIcon, SetSelectIcon] = React.useState("IC")
    const [SeleColor, SetSelectColor] = React.useState("grey")

    const [nombreCategoria,SetNombreCategoria]= React.useState('')
    const [presupuesto,SetPresupuesto] = React.useState(0)


    const validarFormulario = () => {
        if (nombreCategoria.trim() === '') {
            Alert.alert("Error", "El nombre de la categoría no puede estar vacío.");
            return false;
        }
        if (!presupuesto || isNaN(presupuesto) || Number(presupuesto) <= 0) {
            Alert.alert("Error", "El presupuesto debe ser un número positivo.");
            return false;
        }
        return true;
    };

    const handlerCrearCategoria = async () => {
        if (!validarFormulario()) {
            return;
        }
        // Lógica para crear la categoría
        try {
            await addDoc(collection(db, 'categoria'), {
                created_at: serverTimestamp(),
                name: nombreCategoria,
                create_by: user?.id, 
                icon: SelectIcon,
                color: SeleColor,
                assigned_budget: Number(presupuesto),
            });
            SetNombreCategoria('');
            SetPresupuesto(0);
            Alert.alert("Éxito", "Categoría creada exitosamente.");
            
        } catch (error) {
            Alert.alert("Error", "Hubo un problema al crear la categoría.");
            console.error("Error adding document: ", error);
        }
    };
    return (
        <View className='mt-5 p-10'>
            <View className='flex items-center rounded-full '>
                <TextInput className='text-center text-xl font-bold text-white p-8  rounded-full' maxLength={2}
                    style={{ backgroundColor: SeleColor }}
                    onChangeText={(value) => SetSelectIcon(value)}
                >
                    {SelectIcon}
                </TextInput>
                <SelectColor
                    SeleColor={SeleColor}
                    SetSelectColor={(color) => SetSelectColor(color)}
                />
            </View>
            {/* agregar categoria */}

            <View className='flex-row items-center gap-2 mt-5 p-3 bg-white border border-gray-300 shadow-2xl rounded-lg'>
                <MaterialIcons name="local-offer" size={24} color="black" />
                <TextInput className='flex-1 p-2  border-gray-300 rounded-lg' placeholder='Nombre de la Categoria'
                    onChangeText={(value)=>SetNombreCategoria(value)}
                    value={nombreCategoria}
                >

                </TextInput>
            </View>
            <View className='flex-row items-center gap-2 mt-5 p-3 bg-white border border-gray-300 shadow-2xl rounded-lg'>
                <FontAwesome name="dollar" size={24} color="black" />
                <TextInput className='flex-1 p-2  border-gray-300 rounded-lg' keyboardType='numeric' placeholder='Presupuesto'
                    onChangeText={(value)=>SetPresupuesto(value)}
                    value={presupuesto}
                >

                </TextInput>
            </View>
            <View className='bg-black p-4 rounded-lg mt-8 '>
                <TouchableOpacity 
                    disabled={!nombreCategoria||!presupuesto}
                    onPress={handlerCrearCategoria}
                    
                >
                    <Text className='text-white font-bold text-center'>Crear Categoria</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}