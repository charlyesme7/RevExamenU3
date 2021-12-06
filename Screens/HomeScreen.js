import React, { useContext } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { Header, Card } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';

import { CineContext } from '../Context/CineContext';

const HomeScreen = ({ navigation }) => {
  const { cartelera, agregar } = useContext(CineContext);
  return (
    <View style={styles.container}>
      <Header
       centerComponent={{ text: 'cinepolis', style: { color: '#fff'}}}       
      />
      <ScrollView>
        {cartelera.map((p) => (
          <Card>
            <Card.Title>{p.nombre}</Card.Title>
            <View>
              <View>
                <Card.Image style={styles.logo} source={{ uri: p.url }} />
              </View>
              <View style={styles.container2}>
                <Text>{p.clasificacion}</Text>
                <Text>{p.idioma}</Text>
                <Button
                  title={p.horarios[0]}
                  color="#9e9e9e"
                  onPress={() => {
                    navigation.navigate('DetailsScreen');
                    agregar(p, p.horarios[0]);
                  }}
                />
                <Button
                  title={p.horarios[1]}
                  color="#808080"
                  onPress={() => {
                    navigation.navigate('DetailsScreen');
                    agregar(p, p.horarios[1]);
                  }}
                />
                <Button
                  title={p.horarios[2]}
                  color="#454545"
                  onPress={() => {
                    navigation.navigate('DetailsScreen');
                    agregar(p, p.horarios[2]);
                  }}
                />
              </View>
            </View>
          </Card>
        ))}
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  logo: {
    height: 225,
    width: 150,
  },
});
