import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Skill from '../screens/Skill';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const {Navigator, Screen} = createBottomTabNavigator ()

export function BottonTabsRoutes(){
    return(
        <Navigator>
            <Screen 
            name='home' 
            component ={Home}
            options={{
                title:'Meu Perfil',
                tabBarIcon: ({color, size}) => (
                    <MaterialCommunityIcons
                        name='home'
                        color='#675c5c'
                        size={size}   // tamanho padrão do icon
                    />
                )
            }}      
            />
            <Screen 
            name='skill' 
            component ={Skill}
            options={{
                title:'Habilidades',
                tabBarIcon: ({color, size}) => (
                    <MaterialCommunityIcons
                        name='star'
                        color='#675c5c'
                        size={size}   // tamanho padrão do icon
                    />
                )
            }}      
            />
        </Navigator>
    )

}