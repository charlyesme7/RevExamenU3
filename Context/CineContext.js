import React, { createContext, useState } from 'react';
import {Alert} from 'react-native';
export const CineContext = createContext();

const CineProvider = (props) => {
  const [compra, setCompra] = useState({});
  const [cartelera] = useState([
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

  const agregar = (pelicula, hora) => {
    const temp = {
      nombre: pelicula.nombre,
      idioma: pelicula.idioma,
      clasificacion: pelicula.clasificacion,
      cantidad: 0,
      total: 0,
      duracion: pelicula.duracion,
      horario: hora
    };
    setCompra(temp);
  };


  const calcular = (pelicula, a) => {
    let precio;

    if (a > 0) {
      if (pelicula.clasificacion === 'A') {
        precio = 50; 
      }
      if (pelicula.clasificacion === 'B') {
        precio = 80;
      }
      if (pelicula.clasificacion === 'C') {
        precio = 95;
      }
      const temp = {
        nombre: pelicula.nombre,
        idioma: pelicula.idioma,
        clasificacion: pelicula.clasificacion,
        cantidad:a,
        total:precio,
        duracion: pelicula.duracion,
        horario: pelicula.horario,
      };
      setCompra(temp);
    }
  };

  const eliminarcompra = () => {
      Alert.alert("Tu compra ha sido cancelada.");
  };


  const comprar = (pelicula) => {
    if (pelicula.cantidad > 0) {
      setCompra({});
      Alert.alert('compra exitosa');
    } 
     else if (pelicula.cantidad === 0){
        Alert.alert('Ingrese cantidad de boletos.');
      }
    
  };

  return (
    <CineContext.Provider
      value={{
        cartelera,
        compra,
        setCompra,
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
