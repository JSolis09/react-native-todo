import React from 'react';
import { AppRegistry, navi } from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';

import TaskForm from './TaskForm';
import TodoList from './TodoList';

const AppNavigator = createStackNavigator(
  {
    TodoList: {screen: TodoList},
    TaskForm: {screen: TaskForm}
  },
  {
    initialRouteName: "TodoList"
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

AppRegistry.registerComponent('app', () => App);
