import React from 'react';
import {View, Text, Button} from 'react-native';

const AddEditTodoScreen = ({navigation}) => {
  return (
    <View>
      <Text>Hello Boys</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default AddEditTodoScreen;