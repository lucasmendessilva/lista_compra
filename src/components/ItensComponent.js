import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';

const ItensComponent = props => {
  return (
    <View style={estilo.container}>
      <View style={estilo.foto}>
        <Image style={{width: 100, height: 100}} source={{uri: props.foto}} />
      </View>
      <View style={estilo.detalhes}>
        <Text>{props.titulo}</Text>
        <Text style={estilo.valor}>R$ {props.valor}</Text>
        <Text>Local: {props.local}</Text>
        <Text>Dt. Publicação{props.dia}</Text>
      </View>
    </View>
  );
};

const estilo = StyleSheet.create({
  container: {
    borderWidth: 0.5,
    borderColor: '#999',
    margin: 10,
    padding: 10,
    flexDirection: 'row',
  },
  foto: {
    marginLeft: 20,
    flex: 1,
  },
  detalhes: {
    marginLeft: 20,
    flex: 1,
    backgroundColor: '#fff',
  },
  titulo: {
    fontSize: 18,
    color: 'blue',
    marginBottom: 5,
  },
  valor: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ItensComponent;
