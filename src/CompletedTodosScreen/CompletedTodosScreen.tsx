import React from 'react';
import { View, FlatList, Alert, TouchableOpacity } from 'react-native';
import { observer } from 'mobx-react-lite';
import { Todo } from '../store/store.types';
import { TodoStore } from '../store/store';
import ListItem from '../components/ListItem';
import { globalStyles } from '../global.styles';

const CompletedTodosScreen = () => {
  const { completedTodos, toggleCompleteTodo } = TodoStore;
  const setIncompleteTodo = (id: string) => {
    Alert.alert(
      'Recover Task?',
      ' Are you sure you want to mark task as incomplete?',
      [
        {
          text: 'No',
          style: 'cancel',
        },
        {
          text: 'Yes',
          onPress: () => {
            toggleCompleteTodo(id);
          },
        },
      ],
    );
  };
  const render = ({ item }: { item: Todo }) => (
    <TouchableOpacity onPress={() => setIncompleteTodo(item.id)}>
      <ListItem date={item.date} taskName={item.name} />
    </TouchableOpacity>
  );
  return (
    <View style={globalStyles.container}>
      <FlatList
        data={completedTodos()}
        renderItem={render}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default observer(CompletedTodosScreen);
