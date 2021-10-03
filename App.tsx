import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/HomeScreen/HomeScreen';
import AddEditTodoScreen from './src/AddEditTodoScreen/AddEditTodoScreen';
import CompletedTodosScreen from './src/CompletedTodosScreen/CompletedTodosScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Edit" component={AddEditTodoScreen} />
          <Stack.Screen name="Completed" component={CompletedTodosScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
