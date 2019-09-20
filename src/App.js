import React, {Component} from 'react';
import {View, Text, ScrollView} from 'react-native';
import ListaComponent from './components/ListaComponent';

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  UNSAFE_componentWillMount() {
    console.log('componentwillMont');
  }
  render() {
    console.log('render');
    return (
      <ScrollView>
        <ListaComponent />
      </ScrollView>
    );
  }
}
