import React, { FC } from 'react';
import {
  StyleSheet,
  Button,
  Alert,
  TextInput,
  View,
  SafeAreaView,
  TouchableOpacity,
  Text,
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAlignLeft } from '@fortawesome/free-solid-svg-icons';
import { TodoStore as store } from '../store/store';
import { observer } from 'mobx-react-lite';
import { state } from './addEditState';
import { useNavigation } from '@react-navigation/native';
import { globalStyles } from '../global.styles';
import ConfirmDate from './ConfirmDate';

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
    <SafeAreaView style={globalStyles.container}>
      <View style={styles.myTaskView}>
        <TextInput
          style={styles.myTaskInput}
          placeholder="My Task"
          value={todo.name}
          onChangeText={name => setTodo({ ...todo, name })}
        />
      </View>
      <View style={styles.detailsView}>
        <View style={styles.detailsIcon}>
          <FontAwesomeIcon icon={faAlignLeft} color="#474747" />
        </View>
        <TextInput
          style={styles.detailsInput}
          placeholder="Details"
          value={todo.details}
          onChangeText={details => setTodo({ ...todo, details })}
        />
      </View>
      {open && (
        <ConfirmDate
          date={date}
          setDate={setDate}
          setOpen={setOpen}
          onConfirmDate={onConfirmDate}
        />
      )}
      {!open && (
        <View style={styles.dateTextContainer}>
          <TouchableOpacity onPress={() => setOpen(true)}>
            <Text style={styles.dateText}>{todo.date.toDateString()}</Text>
          </TouchableOpacity>
        </View>
      )}
      <View style={styles.saveButton}>
        <Button title="Save Task" onPress={saveTodo} color="black" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  myTaskInput: {
    fontSize: 30,
    marginLeft: 15,
    marginTop: 15,
  },
  myTaskView: { marginBottom: 10 },
  detailsInput: {
    flex: 9,
    fontSize: 15,
    alignItems: 'flex-end',
  },
  detailsView: {
    flexDirection: 'row',
  },
  detailsIcon: {
    marginLeft: 15,
    justifyContent: 'center',
    alignItems: 'flex-start',
    flex: 1,
  },
  saveButton: {
    padding: 10,
    bottom: 120,
    left: 20,
    right: 20,
    position: 'absolute',
    ...globalStyles.shadowButton,
  },
  dateTextContainer: {
    marginLeft: 15,
    marginTop: 10,
  },
  dateText: {
    fontSize: 15,
  },
});

export default observer(AddEditTodoScreen);
