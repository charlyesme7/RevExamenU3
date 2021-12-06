import React, { useContext } from 'react';
import { StyleSheet, Text, View, Button, TextInput} from 'react-native';
import { Header,Card } from 'react-native-elements';

import { CineContext } from '../Context/CineContext';

const DetailsScreen = ({ route, navigation }) => {
  const { compra, eliminarcompra, calcular, comprar } = useContext(CineContext);

  return (
    <View >
    <Header
       centerComponent={{ text: 'AMC', style: { color: '#ffffff'}}}
        
      />
      <Card style={styles.container}>
        <Card.Title>{compra.nombre}</Card.Title>
        <View>
          <Text>Horario: {compra.horario}</Text>
          <Text>{compra.idioma}</Text>
          <TextInput
            placeholder="Ingrese numero de tickets"
            keyboardType="numeric"
            onChangeText={(e)=>calcular(e,compra)}
          />
           <Text>Total= $ {compra.total*compra.cantidad}.00</Text>
        </View>
        <View>
          <Button title="Cancelar" color="#ea232b" onPress={()=>{navigation.goBack(); eliminarcompra}} />
          <Button title="Comprar"  color="#3fdd4e" onPress={()=>{navigation.goBack(); comprar(compra.cantidad)}}/>
      </View>
      </Card>
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ea232b',
    justifyContent: 'center',
  },
});
