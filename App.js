import React, { useState } from "react";
import { View, TextInput, StyleSheet, Button, Text } from 'react-native'


const textInput = () => {

  const [Name, SetName] = useState('')
  const [data, SetData] = useState('')
 
  return (

    <View>
      <TextInput
        style={styles.input}
        // value={text}
        placeholder="Input Name"
        numberOfLines={2}
        onChangeText={(value) => SetName(value)}

      />
      <Button
        title='BUTTON'
        onPress={() => {
          SetData(Name)
        }} />

      <Text>
        {data}
      </Text>


    </View>


  );

};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 20,
    borderWidth: 1,
    padding: 10,
    borderColor: "white"
  },
});
export default textInput;