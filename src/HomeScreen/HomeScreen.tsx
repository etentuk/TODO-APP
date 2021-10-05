import React, { FC } from 'react';
import { View, FlatList, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { observer } from 'mobx-react-lite';
import { TodoStore } from '../store/store';
import { Todo } from '../store/store.types';
import { globalStyles } from '../global.styles';
import ListItem from '../components/ListItem';

const HomeScreen: FC = () => {
  const { navigate, setOptions } = useNavigation();
  const { toggleCompleteTodo, incompleteTodos, setTodoWithID } = TodoStore;

  const completeAlert = (id: string) => {
    Alert.alert(
      'Complete Task?',
      ' Are you sure you want to mark task as completed?',
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

  const editTask = (id: string) => {
    setTodoWithID(id);
    navigate('AddEdit', { title: 'Edit Task' }) &&
      setOptions({ title: 'Edit Task' });
  };

  const render = ({ item }: { item: Todo }) => (
    <TouchableOpacity
      onPress={() => completeAlert(item.id)}
      onLongPress={() => editTask(item.id)}>
      <ListItem taskName={item.name} date={item.date} />
    </TouchableOpacity>
  );
  return (
    <View style={globalStyles.container}>
      <FlatList
        data={incompleteTodos()}
        renderItem={render}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default observer(HomeScreen);
