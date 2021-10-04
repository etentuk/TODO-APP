import React, { FC } from 'react';
import { View, FlatList, TouchableOpacity, Alert } from 'react-native';
import { Button, List } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { observer } from 'mobx-react-lite';
import { TodoStore } from '../store/store';
import { Todo } from '../store/store.types';

const HomeScreen: FC = () => {
  const { navigate } = useNavigation();
  const { completeTodo, incompleteTodos, setTodoWithID, resetTodo } = TodoStore;

  console.log(TodoStore.todos);

  const completeAlert = (id: number) => {
    Alert.alert(
      'Complete Task?',
      ' Are you sure you want to mark task as completed?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            completeTodo(id);
          },
        },
      ],
    );
  };

  const editTask = (id: number) => {
    setTodoWithID(id);
    navigate('Edit');
  };

  const addTask = () => {
    resetTodo();
    navigate('Add');
  };

  const render = ({ item }: { item: Todo }) => (
    <TouchableOpacity
      onPress={() => completeAlert(item.id)}
      onLongPress={() => editTask(item.id)}>
      <List.Item title={item.name} description={item.details} />
    </TouchableOpacity>
  );
  return (
    <View>
      <FlatList data={incompleteTodos()} renderItem={render} />
      <Button onPress={() => navigate('Completed')}>Completed</Button>
      <Button onPress={addTask}>Add</Button>
    </View>
  );
};

export default observer(HomeScreen);
