import React, { useContext } from "react";
import { Text, View, StyleSheet, ScrollView, Button } from 'react-native';
import {Card} from 'react-native-elements';
import { quotesContext } from "../Context/quotesContext";


const today = ({ }) => {
const {cita, zenquotes} = useContext(quotesContext);

  return (
    <View style={styles.container}>  
    <ScrollView>
      
          <View>
          <Button title="Citas" onPress={() => {zenquotes("quotes");}}/>
          </View>
        {
              cita.map((citas, index)=>(
              
          <Card borderRadius={20}>
                <Card.Title>Quotes Zen</Card.Title>
                <View>
                  <View style={styles.container2}>
                  <Text key={index} >{index + 1}-Cita: {citas.q}</Text> 
                  </View>
                  <View>
                  <Text key={index}>Autor: {citas.a}</Text> 
                  </View>
                </View>
          </Card>
          ))
        }
        </ScrollView>
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