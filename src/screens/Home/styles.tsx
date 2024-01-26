import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor:'#c5c5c5',
    
  },
  roundImage:{
    width: 150,
    height: 150,
    borderRadius:75, 
    //marginTop:70,
    
  },

  name:{
    alignItems: 'center',
    fontSize:25,
    fontWeight:'bold',
    marginTop: 20,
  },
  buttonContainer:{
    marginTop: 70,
    alignItems: 'center',
   
    borderWidth: 0,
    borderColor: 'blue',
    padding: 50,
    borderRadius: 5,
    backgroundColor: '#9d9d9d',
  },
  button:{
    marginTop:20,
    backgroundColor: '#3b6dec',
    padding: 10,
    borderRadius:5,
    width: 200,
  },
  buttonText:{
    color:'white',
    fontSize: 16,
    textAlign:'center',
  }
});