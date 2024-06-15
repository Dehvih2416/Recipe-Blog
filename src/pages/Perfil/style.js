import { StyleSheet } from 'react-native';

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
  },
  view1: {
    flex: 1,
    justifyContent: 'center',
  },
  view2: {  
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 30,
    padding: 10,
    width: '90%',
    marginTop: 10,
    color: '#fff',
    backgroundColor: '#fff',
  },
  view3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    paddingHorizontal: 15,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  text: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 5,
    padding: 10,
    width: '90%',
    marginTop: 10,
    color: '#fff',
  },
  button: {
    backgroundColor: '#f44336',
    padding: 15,
    borderRadius: 5,
    width: '90%',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text1: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default estilos;