import React from 'react';
import { View, Button, Modal } from 'react-native';
import { TextInput } from 'react-native-paper';
import { TodoStore as store } from '../store/store';
import DateTimePicker from '@react-native-community/datetimepicker';
import { observer } from 'mobx-react-lite';
import { state } from './addEditState';

const containerStyle = { backgroundColor: 'white', padding: 20 };

const AddEditTodoScreen = ({ navigation }) => {
  const { date, setDate, open, setOpen } = state;
  const { todo, setTodo } = store;

  const onConfirmDate = () => {
    setTodo({ ...todo, date });
    setOpen(false);
  };

  const addTodo = () => {
    store.addTodo(todo);
    navigation.navigate('Home');
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
      <Button title="Create Task" onPress={addTodo} />
    </View>
  );
};

export default observer(AddEditTodoScreen);
