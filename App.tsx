import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import ToDoHeader from './src/components/ToDoHeader';
import ToDoList from './src/components/ToDoList';
import store from './src/redux/store';
import {Provider} from 'react-redux';

function App(): JSX.Element {
  const RootApp = () => {
    return (
        <SafeAreaView>
            <ToDoHeader />
            <ToDoList />
        </SafeAreaView>
    )
}

  return (
    <Provider store={store}>
      <RootApp />
    </Provider>
  );
}

const styles = StyleSheet.create({});

export default App;
