import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/dist/FontAwesome';

function AddItem({addItem}) {
  const [item, setItem] = useState('');

  const onChange = (textValue) => setItem(textValue);

  return (
    <View style={styles.header}>
      <TextInput
        placeholder="Add Item..."
        onChangeText={onChange}
        value={item}
        style={styles.input}
      />
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          setItem('');
          addItem(item);
        }}>
        <Text style={styles.btnText}>
          <Icon name="plus" size={20} />
          Add Item
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 60,
    padding: 8,
    fontSize: 16,
  },
  btn: {
    backgroundColor: '#c2bad8',
    padding: 9,
    margin: 5,
  },
  btnText: {
    color: 'darkslateblue',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default AddItem;
