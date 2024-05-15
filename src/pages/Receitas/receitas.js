import { Text, View,Image,TouchableOpacity} from 'react-native';
import estilos from './style.js';
import logoImage2 from '/src/img/logoBlogRecipe2.png';
import bolodeCenoura from '/src/img/bolodeCenoura.png';
import {MaterialIcons} from '@expo/vector-icons'

export default function Receitas() {

  return (
    
   
    <View style={estilos.container}>
      <View style={estilos.divimg}> <Image style={estilos.img}  source={logoImage2} /></View>
  
       <View style={estilos.view2}>

       <View style={estilos.column}>
        <TouchableOpacity style={estilos.button} > 
        <Image style={estilos.imgBotao}  source={bolodeCenoura} />

        <View style={{alignItems:'flex-start',flexDirection: 'row', justifyContent: 'space-around'}}>
        <View>
        <Text style={estilos.texto}>Bolo de </Text>
        <Text style={estilos.quebraLinha}>cenoura</Text>
        </View>
        <MaterialIcons  style={{ justifyContent: 'center',alignItems: 'center',paddingTop:10,}}name="favorite-border" size={30} color='#FFFFFF'></MaterialIcons>

        </View>
        
        
        
        </TouchableOpacity> 
        <TouchableOpacity style={estilos.button} > button 2 </TouchableOpacity> 
        <TouchableOpacity style={estilos.button} > button 3 </TouchableOpacity> 
      </View>
      
      <View style={estilos.column}>
      <TouchableOpacity style={estilos.button} > button 4 </TouchableOpacity> 
      <TouchableOpacity style={estilos.button} > button 5 </TouchableOpacity> 
      <TouchableOpacity style={estilos.button} > button 5 </TouchableOpacity> 
      </View>
  
       </View>
       

    </View>
  );
}

    
    
    