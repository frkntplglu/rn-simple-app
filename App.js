/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  Image,
  View,
  Text,
  StatusBar,
  Alert,
} from 'react-native';
import {v4 as uuidv4} from 'uuid';

import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

const App = () => {
  const [items, setItems] = useState([
    {id: uuidv4(), text: 'Milk'},
    {id: uuidv4(), text: 'Eggs'},
    {id: uuidv4(), text: 'Bread'},
    {id: uuidv4(), text: 'Juice'},
  ]);

  const deleteItem = (id) => {
    setItems((prevItems) => {
      return prevItems.filter((item) => item.id != id);
    });
  };

  const addItem = (text) => {
    if (!text) {
      Alert.alert('Error', 'Please enter an item', [
        {
          text: 'OK',
        },
      ]);
    } else {
      setItems((prevItems) => [
        ...prevItems,
        {
          id: uuidv4(),
          text: text,
        },
      ]);
    }
  };
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <Header title="Shopping List" />
        <AddItem addItem={addItem} />
        <FlatList
          data={items}
          renderItem={({item}) => (
            <ListItem item={item} deleteItem={deleteItem} />
          )}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 24,
    right: 0,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
  },
  body: {
    backgroundColor: 'white',
  },
});

export default App;
