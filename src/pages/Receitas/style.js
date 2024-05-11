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
      backgroundColor:'white',
      width:"80%",
      height:"70%",
      flexDirection: 'row',
      justifyContent: 'space-between',
    
      gap:10,
    },
    img: {
      width: 250,
      height: 100,
      padding:50,
      // Permite modificar o tamanho da img
      resizeMode:"contain",
     
    },
     divimg:{
       marginBottom:40,
     },
   
    column: {
      flex:1,
      gap:100,
      marginHorizontal:10,
      height:'100%',
      justifyContent:'center',

    },
    button: {
      flex: 1,
      margin:400,
      height: 150,
      paddingTop:200,


      
    },
  
  });

export default estilos