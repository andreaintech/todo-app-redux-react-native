import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import ToDoHeader from './src/components/ToDoHeader';
import ToDoList from './src/components/ToDoList';

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
    <RootApp />
  );
}

const styles = StyleSheet.create({});

export default App;
