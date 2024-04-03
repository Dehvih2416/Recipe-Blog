
import { StyleSheet, Text, View ,Image} from 'react-native';
import logoImage from './src/img/logoBlogRecipe.png';

export default function App() {
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
