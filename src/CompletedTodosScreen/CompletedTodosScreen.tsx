import React from 'react';
import { View, FlatList, Alert } from 'react-native';
import { observer } from 'mobx-react-lite';
import { Todo } from '../store/store.types';
import { List } from 'react-native-paper';
import { TodoStore } from '../store/store';

const CompletedTodosScreen = () => {
  const { completedTodos, toggleCompleteTodo } = TodoStore;
  const setIncompleteTodo = (id: number) => {
    Alert.alert(
      'Complete Task?',
      ' Are you sure you want to mark task as incomplete?',
      [
        {
          text: 'No',
          onPress: () => console.log('Cancel Pressed'),
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
    <List.Item
      title={item.name}
      description={item.details}
      onPress={() => setIncompleteTodo(item.id)}
    />
  );
  return (
    <View>
      <FlatList data={completedTodos()} renderItem={render} />
    </View>
  );
};

export default observer(CompletedTodosScreen);
