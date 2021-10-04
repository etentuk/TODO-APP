import React, { FC } from 'react';
import { View, Button, Modal, Alert } from 'react-native';
import { TextInput } from 'react-native-paper';
import { TodoStore as store } from '../store/store';
import DateTimePicker from '@react-native-community/datetimepicker';
import { observer } from 'mobx-react-lite';
import { state } from './addEditState';
import { useNavigation } from '@react-navigation/native';

const containerStyle = { backgroundColor: 'white', padding: 20 };

const AddEditTodoScreen: FC = () => {
  const { navigate } = useNavigation();
  const { date, setDate, open, setOpen } = state;
  const { todo, setTodo } = store;

  const onConfirmDate = () => {
    setTodo({ ...todo, date });
    setOpen(false);
  };

  const saveTodo = () => {
    if (todo.name && todo.details) {
      store.addTodo(todo);
      navigate('Home');
      return;
    }
    Alert.alert('Enter Name and Details!', 'To save task, fill both fields!', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
    ]);
  };

  return (
    <View>
      <TextInput
        label="Name"
        value={todo.name}
        onChangeText={name => setTodo({ ...todo, name })}
      />
      <TextInput
        label="Details"
        value={todo.details}
        onChangeText={details => setTodo({ ...todo, details })}
      />
      <Modal visible={open} style={containerStyle}>
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="date"
          display="spinner"
          minimumDate={new Date()}
          onChange={(e, selectedDate) => setDate(selectedDate!)}
        />
        <Button title="Confirm" onPress={onConfirmDate} />
        <Button title="Cancel" onPress={() => setOpen(false)} />
      </Modal>
      <Button title={todo.date.toDateString()} onPress={() => setOpen(true)} />
      <Button title="Save Task" onPress={saveTodo} />
    </View>
  );
};

export default observer(AddEditTodoScreen);
