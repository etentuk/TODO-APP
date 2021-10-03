import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {Button} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {observer} from 'mobx-react-lite';
import {TodoStore} from '../store/store';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Hello Boys</Text>
      <TextInput
        onChangeText={e => TodoStore.setName(e)}
        placeholder="Type here to translate!"
      />
      <Button onPress={() => navigation.navigate('Completed')}>
        Completed
      </Button>
      <Button onPress={() => navigation.navigate('Edit')}>Edit</Button>
    </View>
  );
};

export default observer(HomeScreen);
