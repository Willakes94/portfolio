import { View, Text, Image, TouchableOpacity, Linking} from 'react-native';
import { styles} from './styles';
import foto from "../../assets/foto.jpg";

export default function Home() {


  const email = 'willakes@gmail.com';

  const abrirEmail = () =>{
    Linking.openURL(`mailto:${email}`);
}

  return (
    <View style={styles.container}>
       <View style={styles.buttonContainer}>
      
       <Image source={foto} style={styles.roundImage}/>
       
       <Text style={styles.name}>Minhas Habilidades</Text>

       <Text style={styles.habilidades}>React Native: ⭐ ⭐ ⭐   </Text>
       <Text style={styles.habilidades}>PHP:  ⭐ ⭐ ⭐ ⭐  </Text>
       <Text style={styles.habilidades}>JAVA:  ⭐ ⭐ ⭐ ⭐  </Text>
       
       <TouchableOpacity style={styles.button} onPress={abrirEmail}>
        <Text style={styles.buttonText}>Fale comigo</Text>
      </TouchableOpacity>
      </View>
      
      
    </View>
  );
};