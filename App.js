import React from 'react';
import { AppRegistry, navi } from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';

import TaskForm from './TaskForm';
import TodoList from './TodoList';
import LoginContainer from './containers/LoginContainer';

const AppNavigator = createStackNavigator(
  {
    Login: { screen: LoginContainer },
    TodoList: {screen: TodoList},
    TaskForm: {screen: TaskForm}
  },
  {
    initialRouteName: "Login"
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

AppRegistry.registerComponent('app', () => App);
