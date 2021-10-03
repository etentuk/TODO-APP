import React from 'react';
import {View, Text, Button} from 'react-native';
import {observer} from 'mobx-react-lite';
import {TodoStore as store} from '../store/store';

const CompletedTodosScreen = ({navigation}) => {
  console.log('nn', store.name);
  return (
    <View>
      <Text>Hello Boys</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default observer(CompletedTodosScreen);
