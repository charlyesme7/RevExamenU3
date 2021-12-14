import React, { useContext } from "react";
import { Text, View, StyleSheet,  Button } from 'react-native';
import {Card} from 'react-native-elements';
import { quotesContext } from "../Context/quotesContext";


const today = ({ }) => {
const {cita, zenquotes} = useContext(quotesContext);

  return (
    <View style={styles.container}>
      <Card borderRadius={20}>
            <Card.Title>Quotes Zen</Card.Title>
            <View>
              <View style={styles.container2}>
              <Text>Cita aleatoria: {cita[0].q}</Text> 
              </View>
              <View>
              <Text>Autor: {cita[0].a}</Text> 
              <Button title="Random" onPress={() => {zenquotes("random");}}/>
              </View>
            </View>
      </Card>

    </View>
  );
};
export default today;
const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#512A42',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',

  },


});