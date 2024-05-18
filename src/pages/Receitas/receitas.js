import { Text, View, Image, TouchableOpacity } from 'react-native';
import estilos from './style.js';
import logoImage2 from '/src/img/logoBlogRecipe2.png';
import bolodeCenoura from '/src/img/bolodeCenoura.png';
import { MaterialIcons } from '@expo/vector-icons'
import React, { useState } from 'react';

export default function Receitas() {
  const [iconePreenchido, setIconePreenchido] = useState(false);

  const handlePress = () => {
    setIconePreenchido(!iconePreenchido);
  };

  return (


    <View style={estilos.container}>
      <View style={estilos.divimg}> <Image style={estilos.img} source={logoImage2} /></View>

      <View style={estilos.view2}>

        <View style={estilos.column}>

          {/*Replicar oque tem nesse bloco de dentro do botao nos outros botoes */}
          <TouchableOpacity style={estilos.button} >
            <Image style={estilos.imgBotao} source={bolodeCenoura} />

            <View style={{ alignItems: 'flex-start', flexDirection: 'row', justifyContent: 'space-around', height: 69 }}>
              <View>
                <Text style={estilos.texto}>Bolo de </Text>
                <Text style={estilos.quebraLinha}>cenoura</Text>

              </View>

              <TouchableOpacity onPress={handlePress} >
                <MaterialIcons
                  name={iconePreenchido ? 'favorite' : 'favorite-border'}
                  size={30}
                  color={iconePreenchido ? '#FFFFFF' : '#FFFFFF'}
                  style={{ justifyContent: 'center', alignItems: 'center', paddingTop: 27 }}
                ></MaterialIcons>
              </TouchableOpacity>

            </View>
          </TouchableOpacity>
          {/* final do bloco bolo de cenoura */}


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



