import React from 'react';
import { View, Text, Button } from 'react-native';
import { observer } from 'mobx-react-lite';
import { useNavigation } from '@react-navigation/native';

const CompletedTodosScreen = () => {
  const { goBack } = useNavigation();
  return (
    <View>
      <Text>Hello Boys</Text>
      <Button title="Go back" onPress={() => goBack()} />
    </View>
  );
};

export default observer(CompletedTodosScreen);
