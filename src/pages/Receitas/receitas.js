import { Text, View,Image,Button} from 'react-native';
import estilos from './style.js';
import logoImage2 from '/src/img/logoBlogRecipe2.png';



export default function Receitas() {

  return (
    
   
    <View style={estilos.container}>
      <View style={estilos.divimg}> <Image style={estilos.img}  source={logoImage2} /></View>
  
       <View style={estilos.view2}>

       <View style={estilos.column}>
        <Button title="Button 1" style={estilos.button} />
        <Button title="Button 2" style={estilos.button} />
        <Button title="Button 3" style={estilos.button} />
      </View>
      
      <View style={estilos.column}>
        <Button title="Button 4" style={estilos.button} />
        <Button title="Button 5" style={estilos.button} />
        <Button title="Button 6" style={estilos.button} />
      </View>
  
       </View>
       

    </View>
  );
}

    
    
    