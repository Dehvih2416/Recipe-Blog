import { StyleSheet} from 'react-native';

const estilos = StyleSheet.create({
    //div pai de todas
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:'#0F0D0D'
      
    },
    view2: {
      alignItems: 'center',
      justifyContent: 'center',
      
      width:"80%",
      height:"70%",
      flexDirection: 'row',
      justifyContent: 'space-around',
    
      gap:20,
      marginBottom:45,
    },
    
    img: {
      width: 250,
      height: 100,
      padding:50,
      // Permite modificar o tamanho da img
      resizeMode:"contain",
     
    },
     divimg:{
      alignItems:'flex-start',
       marginBottom:5,
       height:110,
     },
   
    column: {
      flex:1,
      gap:60,
      height:'60%',
      justifyContent:'center',
      alignItems:'center',
      marginTop:0,

    },
    button: {
      height: 170,
      width:130,
      backgroundColor: "#ff6401",
      borderRadius:15,
    },
    quebraLinha:{
      fontFamily: 'Raleway-VariableFont',
      fontWeight: '700',
      alignContent:'center',
      paddingStart:8,
      color:"#fff",
    },
    texto:{
      fontFamily: 'Raleway-VariableFont',
      fontWeight: '700',
      paddingTop:15,
      alignContent:'center',
      paddingStart:8,
      color:"#fff",
      
    },
    imgBotao:{
      width: '100%',
      height: '60%',
      borderTopLeftRadius:15,
      borderTopRightRadius:15,
    }
  
  });

export default estilos