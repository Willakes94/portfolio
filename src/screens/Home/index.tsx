import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import { StatusBar } from 'expo-status-bar'
import { styles} from './styles';
import foto from "../../assets/foto.jpg";

export default function Home() {

const url = 'https://www.linkedin.com/in/jose-willakes-88b019282/';
const gitHub = 'https://github.com/Willakes94';
const email = 'willakes@gmail.com';
   
    const abrirLinkedIn = (event: any) =>{
        Linking.openURL(url);
    };

    const abrirGitHub = (event :any) =>{
        Linking.openURL(gitHub);
    }


    const abrirEmail = () =>{
        Linking.openURL(`mailto:${email}`);
    }
  return (
    <View style={styles.container}>
         <View style={styles.buttonContainer}>
      
       <Image source={foto} style={styles.roundImage}/>
       
       <Text style={styles.name}>José Willakes</Text>
       <TouchableOpacity style={styles.button} onPress={abrirLinkedIn}>
       <Text style={styles.buttonText}>LinkedIn</Text>
       </TouchableOpacity>

       <TouchableOpacity style={styles.button} onPress={abrirGitHub}>
       <Text style={styles.buttonText}>GitHub</Text>
       </TouchableOpacity>

       <TouchableOpacity style={styles.button} onPress={abrirEmail}>
        <Text style={styles.buttonText}>Email</Text>
      </TouchableOpacity>
      </View>
      
    </View>
  );
};