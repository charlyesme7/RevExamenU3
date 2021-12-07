import React, { createContext, useState } from 'react';

import {
  Text,
  View,
  StyleSheet,
  Button,
  StatusBar,
  ToastAndroid,
  Platform,
  AlertIOS,
} from 'react-native';

export const CineContext = createContext();

const CineProvider = (props) => {
  const [compra, setCompra] = useState({});
  const [cartelera, setCartelera] = useState([
    {
      codigo:1,
      nombre:"Avengers", 
      idioma:'DOB', 
      clasificacion:'B',
      horarios:['13:00','17:50','20:30'],
      duracion:'120 min',
      url:'https://m.media-amazon.com/images/I/71xZtfOsHdL._AC_SY679_.jpg'},
    {
      codigo:2,
      nombre:"Avengers: Age of Utron", 
      idioma:'DOB', 
      clasificacion:'A',
      horarios:['9:00','11:30','13:30'],
      duracion:'130 min',
      url:'https://capitanspoiler.files.wordpress.com/2015/02/10869325_591589580977275_2778898650041679518_o.jpg'},
    {
      codigo:3,
      nombre:"Avengers: Infinity War", 
      idioma:'SUB', 
      clasificacion:'B',
      horarios:['11:00','13:50','19:40'],
      duracion:'148 min',
      url:'https://m.media-amazon.com/images/I/81OmkfFqvsL._AC_SY741_.jpg'},
    {
      codigo:4,
      nombre:"Avengers: Endgame", 
      idioma:'SUB', 
      clasificacion:'B',
      horarios:['10:30','14:20','18:30'],
      duracion:'160 min',
      url:'https://m.media-amazon.com/images/I/81ai6zx6eXL._AC_SL1304_.jpg'},
  ]);

  const agregar = (_selection, _showtime) => {
    const objpeliselect = {
      cantidad: 0,
      clasificacion: _selection.clasificacion,
      duracion: _selection.duracion,
      horario: _showtime,
      idioma: _selection.idioma,
      nombre: _selection.nombre,
      total: 0,
    };

    setCompra(objpeliselect);
  };

  const eliminarcompra = () => {
    setCompra({});
  };

  const calcular = (_e, _pelicalcular) => {
    let objpeliselect = {};

    if (_e >= 1) {
      if (_pelicalcular.clasificacion === 'A') {
        objpeliselect = {
          cantidad: _e,
          clasificacion: _pelicalcular.clasificacion,
          duracion: _pelicalcular.duracion,
          horario: _pelicalcular.horario,
          idioma: _pelicalcular.idioma,
          nombre: _pelicalcular.nombre,
          total: 50,
        };
      } else {
        if (_pelicalcular.clasificacion === 'B') {
          objpeliselect = {
            cantidad: _e,
            clasificacion: _pelicalcular.clasificacion,
            duracion: _pelicalcular.duracion,
            horario: _pelicalcular.horario,
            idioma: _pelicalcular.idioma,
            nombre: _pelicalcular.nombre,
            total: 80,
          };
        } else {
          objpeliselect = {
            cantidad: _e,
            clasificacion: _pelicalcular.clasificacion,
            duracion: _pelicalcular.duracion,
            horario: _pelicalcular.horario,
            idioma: _pelicalcular.idioma,
            nombre: _pelicalcular.nombre,
            total: 95,
          };
        }
      }

      setCompra(objpeliselect);
    }
  };

  const comprar = (_cantidad) => {
    if (_cantidad >= 1 && _cantidad) {
      if (Platform.OS === 'android') {
        ToastAndroid.show('compra exitosa, Disfruta la pelicula', ToastAndroid.SHORT);
      } else {
        AlertIOS.alert('compra exitosa');
      }
      setCompra({});
    } else {
       if (Platform.OS === 'android') {
        ToastAndroid.show('compra no exitosa', ToastAndroid.SHORT);
      } else {
        AlertIOS.alert('compra no exitosa');
      }
    }
  };

  return (
    <CineContext.Provider
      value={{
        cartelera,
        compra,
        agregar,
        eliminarcompra,
        calcular,
        comprar,
      }}>
      {props.children}
    </CineContext.Provider>
  );
};

export default CineProvider;
