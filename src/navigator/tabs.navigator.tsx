import React, { FC } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import HomeScreen from '../HomeScreen/HomeScreen';
import {
  faHome,
  faPlusCircle,
  faTasks,
} from '@fortawesome/free-solid-svg-icons';
import AddEditTodoScreen from '../AddEditTodoScreen/AddEditTodoScreen';
import CompletedTodosScreen from '../CompletedTodosScreen/CompletedTodosScreen';
import { StyleSheet } from 'react-native';
import { globalStyles } from '../global.styles';

type TabParams = {
  Home: undefined;
  Completed: undefined;
  AddEdit: { action: 'Add New Task' | 'Edit Task' };
};

const Tabs: FC = () => {
  const Tab = createBottomTabNavigator<TabParams>();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'My Tasks',
          tabBarIcon: ({ focused }) => (
            <FontAwesomeIcon
              icon={faHome}
              style={styles.icon}
              color={focused ? '#0080ff' : '#9e9898'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="AddEdit"
        component={AddEditTodoScreen}
        options={() => ({
          tabBarIcon: ({ focused }) => (
            <FontAwesomeIcon
              icon={faPlusCircle}
              size={50}
              style={styles.icon}
              color={focused ? '#0080ff' : '#9e9898'}
            />
          ),
        })}
      />
      <Tab.Screen
        name="Completed"
        component={CompletedTodosScreen}
        options={{
          title: 'Completed',
          tabBarIcon: ({ focused }) => (
            <FontAwesomeIcon
              icon={faTasks}
              style={styles.icon}
              color={focused ? '#0080ff' : '#9e9898'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  icon: {
    top: 15,
    padding: 15,
    margin: 2,
    flex: 1,
  },
  tabBar: {
    ...globalStyles.shadowButton,
    flex: 1,
    position: 'absolute',
    bottom: 25,
    left: 20,
    right: 20,
  },
  plusCircle: {
    top: 15,
  },
});

export default Tabs;
