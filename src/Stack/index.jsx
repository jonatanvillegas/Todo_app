import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Gasto from '../Page/Gasto';
import { createStackNavigator } from '@react-navigation/stack';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import History from '../Page/History';
import Perfil from '../Page/Perfil';
import AgregarCategoria from '../Page/AgregarCategoria';

const AppStack = createBottomTabNavigator();
const RootStack = createStackNavigator();

const AppNavigator = () => (
    <AppStack.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'Gasto') {
                    iconName = 'home';
                } else if (route.name === 'History') {
                    iconName = 'history';
                } else if (route.name === 'Perfil') {
                    iconName = 'user';
                }

                return <FontAwesome name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'black', 
            tabBarInactiveTintColor: 'grey', 
        })}
    >
        <AppStack.Screen name="Gasto" component={Gasto} options={{ headerShown: false }} />
        <AppStack.Screen name="History" component={History} options={{ headerShown: false }} />
        <AppStack.Screen name="Perfil" component={Perfil} options={{ headerShown: false, presentation: 'modal' }} />
    </AppStack.Navigator>
);

export const RootNavigator = () => {

    return (
        <NavigationContainer>
            <RootStack.Navigator screenOptions={{ headerShown: false }}>
                <RootStack.Screen name="App" component={AppNavigator} />
                <RootStack.Screen name="AgregarCategoria" component={AgregarCategoria} options={{ headerShown: true, presentation: 'modal' }} />
            </RootStack.Navigator>
        </NavigationContainer>
    );
};
/*
id
created_at fecha de creacion
name       text
create_by   text
icon    text
color   text
assigned_budget int

*/