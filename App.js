
import { useState } from 'react';
import { ScrollView, View,Text } from 'react-native';
import Agregar from './src/components/Agregar';
import Lista from './src/components/Lista';
import Barra from './src/components/Barra';

export default function App() {
  const [gastos, setGastos] = useState([]);

  const AgregarGasto = (NuevoGasto) => {
    // Convertir el valor de nuevoGasto a entero antes de agregarlo
    NuevoGasto.valor = parseInt(NuevoGasto.valor, 10);
    setGastos([...gastos, NuevoGasto])
  }
  const valorTotal = gastos.reduce((total, gasto) => total + gasto.valor, 0)

  console.log(valorTotal)
  console.log(gastos)
  return (

    <View className='flex-1 flex-col justify-between'>
      <Agregar Agregar={AgregarGasto} />

      <Text className='font-bold text-3xl ml-4 text-center'>Lista gastos </Text>
      <ScrollView>

        <Lista gastos={gastos} />
      </ScrollView>
      <Barra sumatoria={valorTotal} />
    </View>


  );
}


