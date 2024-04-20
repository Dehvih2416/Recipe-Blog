
import { View ,Image} from 'react-native';
import logoImage from '/src/img/logoBlogRecipe.png';
import { StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';




export default function Inicio() {
const navigation=useNavigation()


setTimeout(()=>{
navigation.navigate('Cadastro');
},3000)

  return (
    <View style={estilos.container}>

      <Image style={estilos.img} source={logoImage} />
     
    </View>
  );

  }

  const estilos = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FF6601',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    img: {
      width: "30",
      height: "42",
      padding: 100,
      // Permite modificar o tamanho da img
      resizeMode:"contain",
    
     
    }
  });






