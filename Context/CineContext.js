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
      codigo: 1,
      nombre: 'Halloween Kills',
      idioma: 'SUB',
      clasificacion: 'C',
      horarios: ['13:00', '17:50', '20:30'],
      duracion: '106 min',
      url: 'https://static.cinepolis.com/img/peliculas/37049/1/1/37049.jpg',
    },
    {
      codigo: 2,
      nombre: 'Los Locos Addams 2',
      idioma: 'ESP',
      clasificacion: 'A',
      horarios: ['9:00', '11:30', '13:30'],
      duracion: '93 min',
      url: 'https://static.cinepolis.com/img/peliculas/37048/1/1/37048.jpg',
    },
    {
      codigo: 3,
      nombre: 'Sin Tiempo Para Morir',
      idioma: 'ESP',
      clasificacion: 'B',
      horarios: ['11:00', '13:50', '19:40'],
      duracion: '164 min',
      url: 'https://static.cinepolis.com/img/peliculas/36792/1/1/36792.jpg',
    },
    {
      codigo: 4,
      nombre: 'Venom: Carnage Liberado',
      idioma: 'ESP',
      clasificacion: 'B',
      horarios: ['10:30', '14:20', '18:30'],
      duracion: '98 min',
      url: 'https://static.cinepolis.com/img/peliculas/36934/1/1/36934.jpg',
    },
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
    if (_cantidad >= 1 && _cantidad < 11) {
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
