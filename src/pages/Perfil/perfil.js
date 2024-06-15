import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import estilos from './style.js';
import junior from '/src/img/junior.png';

export default function Perfil() {
  return (
    <View style={estilos.container}>
      <View style={estilos.view1}>
        <Image
          source={junior}
          style={estilos.image}
        />
      </View>
      
      <View style={estilos.view2}>
        <Text style={estilos.text1}>Cha Eun-woo</Text>
      </View>
      
      <View style={estilos.view}>
        <Text style={estilos.text1}>E-mail:</Text>
        <TextInput
          style={estilos.input}
          placeholder="Eun-woo*****@gmail.com"
        />
      </View>

      <View style={estilos.view4}>
        <Text style={estilos.text}>Senha:</Text>
        <TextInput
          style={estilos.input}
          placeholder="012******"
          secureTextEntry={true}
        />
      </View>

      <TouchableOpacity style={estilos.button}>
        <Text style={estilos.buttonText}>Favoritos</Text>
      </TouchableOpacity>
    </View>
  );
}
