import { Text, View, Image, TouchableOpacity, } from 'react-native';
import estilos from './style.js';
import logoImage2 from '/src/img/logoBlogRecipe2.png';
import bolodeCenoura from '/src/img/bolodeCenoura.png';
import { MaterialIcons } from '@expo/vector-icons'
import React, { useState } from 'react';
import sopaMandioca from '/src/img/sopaMandioca.png';
import brigadeiro from '/src/img/Brigadeiro.png';
import paoDoce from '/src/img/PaoDoce.png';
import paoQueijo from '/src/img/paoQueijo.png';
import bolinhoFrango from '/src/img/BolinhoFrango.png';


export default function Receitas() {
  const [iconePreenchido1, setIconePreenchido1] = useState(false);
  const [iconePreenchido2, setIconePreenchido2] = useState(false);
  const [iconePreenchido3, setIconePreenchido3] = useState(false);
  const [iconePreenchido4, setIconePreenchido4] = useState(false);
  const [iconePreenchido5, setIconePreenchido5] = useState(false);
  const [iconePreenchido6, setIconePreenchido6] = useState(false);

  const handlePress1 = () => {
    setIconePreenchido1(!iconePreenchido1);
  };

  const handlePress2 = () => {
    setIconePreenchido2(!iconePreenchido2);
  };

  const handlePress3 = () => {
    setIconePreenchido3(!iconePreenchido3);
  };

  const handlePress4 = () => {
    setIconePreenchido4(!iconePreenchido4);
  };

  const handlePress5 = () => {
    setIconePreenchido5(!iconePreenchido5);
  };

  const handlePress6 = () => {
    setIconePreenchido6(!iconePreenchido6);
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
                <Text style={estilos.quebraLinha}>Chocolate</Text>

              </View>

              <TouchableOpacity onPress={handlePress1} >
                <MaterialIcons
                  name={iconePreenchido1 ? 'favorite' : 'favorite-border'}
                  size={30}
                  color={iconePreenchido1 ? '#FFFFFF' : '#FFFFFF'}
                  style={{ justifyContent: 'center', alignItems: 'center', paddingTop: 27 }}
                ></MaterialIcons>
              </TouchableOpacity>

            </View>
          </TouchableOpacity>
          {/* final do bloco bolo de cenoura */}
          <TouchableOpacity style={estilos.button} >
            <Image style={estilos.imgBotao} source={bolinhoFrango} />

            <View style={{ alignItems: 'flex-start', flexDirection: 'row', justifyContent: 'space-around', height: 69 }}>
              <View>
                <Text style={estilos.texto}>Bolinho de </Text>
                <Text style={estilos.quebraLinha}>Frango</Text>

              </View>

              <TouchableOpacity onPress={handlePress2} >
                <MaterialIcons
                  name={iconePreenchido2 ? 'favorite' : 'favorite-border'}
                  size={30}
                  color={iconePreenchido2 ? '#FFFFFF' : '#FFFFFF'}
                  style={{ justifyContent: 'center', alignItems: 'center', paddingTop: 27 }}
                ></MaterialIcons>
              </TouchableOpacity>

            </View>
          </TouchableOpacity>
          <TouchableOpacity style={estilos.button} >
            <Image style={estilos.imgBotao} source={paoDoce} />

            <View style={{ alignItems: 'flex-start', flexDirection: 'row', justifyContent: 'space-around', height: 69 }}>
              <View>
                <Text style={estilos.texto}>Pão Doce</Text>

              </View>

              <TouchableOpacity onPress={handlePress3} >
                <MaterialIcons
                  name={iconePreenchido3 ? 'favorite' : 'favorite-border'}
                  size={30}
                  color={iconePreenchido3 ? '#FFFFFF' : '#FFFFFF'}
                  style={{ justifyContent: 'center', alignItems: 'center', paddingTop: 27 }}
                ></MaterialIcons>
              </TouchableOpacity>

            </View>
          </TouchableOpacity>

        </View>

        <View style={estilos.column}>
          <TouchableOpacity style={estilos.button} >
            <Image style={estilos.imgBotao} source={sopaMandioca} />

            <View style={{ alignItems: 'flex-start', flexDirection: 'row', justifyContent: 'space-around', height: 69 }}>
              <View>
                <Text style={estilos.texto}>Sopa de </Text>
                <Text style={estilos.quebraLinha}>Mandioca</Text>
              </View>

              <TouchableOpacity onPress={handlePress4} >
                <MaterialIcons
                  name={iconePreenchido4 ? 'favorite' : 'favorite-border'}
                  size={30}
                  color={iconePreenchido4 ? '#FFFFFF' : '#FFFFFF'}
                  style={{ justifyContent: 'center', alignItems: 'center', paddingTop: 27 }}
                ></MaterialIcons>
              </TouchableOpacity>

            </View>
          </TouchableOpacity>

          <TouchableOpacity style={estilos.button} >
            <Image style={estilos.imgBotao} source={brigadeiro} />

            <View style={{ alignItems: 'flex-start', flexDirection: 'row', justifyContent: 'space-around', height: 69 }}>
              <View>
                <Text style={estilos.texto}>Brigadeiro</Text>
              </View>

              <TouchableOpacity onPress={handlePress5} >
                <MaterialIcons
                  name={iconePreenchido5 ? 'favorite' : 'favorite-border'}
                  size={30}
                  color={iconePreenchido5 ? '#FFFFFF' : '#FFFFFF'}
                  style={{ justifyContent: 'center', alignItems: 'center', paddingTop: 27 }}
                ></MaterialIcons>
              </TouchableOpacity>

            </View>
          </TouchableOpacity>
          <TouchableOpacity style={estilos.button} >
            <Image style={estilos.imgBotao} source={paoQueijo} />

            <View style={{ alignItems: 'flex-start', flexDirection: 'row', justifyContent: 'space-around', height: 69 }}>
              <View>
                <Text style={estilos.texto}>Pão de </Text>
                <Text style={estilos.quebraLinha}>Queijo</Text>
              </View>

              <TouchableOpacity onPress={handlePress6} >
                <MaterialIcons
                  name={iconePreenchido6 ? 'favorite' : 'favorite-border'}
                  size={30}
                  color={iconePreenchido6 ? '#FFFFFF' : '#FFFFFF'}
                  style={{ justifyContent: 'center', alignItems: 'center', paddingTop: 27 }}
                ></MaterialIcons>
              </TouchableOpacity>

            </View>
          </TouchableOpacity>

        </View>

      </View>
      

    </View>

  );
}



