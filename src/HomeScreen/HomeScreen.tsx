import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { observer } from 'mobx-react-lite';
import { TodoStore } from '../store/store';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>{JSON.stringify(TodoStore.todos)}</Text>
      <Button onPress={() => navigation.navigate('Completed')}>
        Completed
      </Button>
      <Button onPress={() => navigation.navigate('AddEdit')}>Add</Button>
    </View>
  );
};

export default observer(HomeScreen);
