import React, { useContext } from 'react';
import { StyleSheet, Text, View, Button, TextInput} from 'react-native';
import { Header,Card } from 'react-native-elements';

import { CineContext } from '../Context/CineContext';

const DetailsScreen = ({ route, navigation }) => {
  const { compra, eliminarcompra, calcular, comprar } = useContext(CineContext);

  return (
    <View style={styles.content1}>
    <Header
       centerComponent={{ text: 'AMC', style: { color: '#ffffff'}}}
      />
      <View style={styles.content2}>

        <Text>{compra.nombre}({compra.idioma})</Text>
        <Text>Horario: {compra.horario}</Text>

        <View style={styles.content3}>
        <Text>Cantidad: </Text>
            <TextInput
              placeholder="Ingrese numero de tickets"
              keyboardType="numeric"
              onChangeText={(e)=>calcular(e,compra)}
            />
            <Text>Total= $ {compra.total*compra.cantidad}.00</Text>
        </View >
          <View style={styles.boton1}>
            <Button title="Cancelar" color="#ea232b" onPress={()=>{navigation.goBack(); eliminarcompra(compra.cantidad)}} />
          </View>
          <View style={styles.boton2}>
          <Button title="Comprar"  color="#3fdd4e" onPress={()=>{navigation.goBack(); comprar(compra.cantidad)}}/>
          </View>
      </View>
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  content1: {
    flex: 1,
  },
  content2:{
    flex: 1,
    backgroundColor: '#ea232b',
    alignItems: "center",
    justifyContent: 'space-around',
  },
  content3:{
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  boton1: {
    marginBottom: 4,
    backgroundColor: '#ff0000',
  },
  boton2: {
    backgroundColor: '#008000',
    marginBottom: 4,
  },

});
