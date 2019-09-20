import React, {Component} from 'react';
import {View, Text} from 'react-native';
import axios from 'axios';
import ItensComponent from './ItensComponent';

const url = 'http://faus.com.br/recursos/c/dmairr/api/itens.html';

export default class ListaComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {listaItens: []};
  }

  async UNSAFE_componentWillMount() {
    const itens = await axios.get(url);
    this.setState({listaItens: itens.data});
    console.log(itens);
  }

  render() {
    return (
      <View>
        {this.state.listaItens.map(item => (
          <ItensComponent
            key={item.titulo}
            titulo={item.titulo}
            local={item.local_anuncio}
            valor={item.valor}
            dia={item.data_publicacao}
          />
        ))}
      </View>
    );
  }
}
