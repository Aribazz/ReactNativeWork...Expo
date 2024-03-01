import React from 'react';
import { View, Text, Button, TextInput, TouchableOpacity } from 'react-native';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <TouchableOpacity onPress={()=>navigation.navigate("ContactDetails",{contact:item})}>
      <TextInput placeholder='Tittle' />
      <TextInput placeholder='Name' />
      <TextInput placeholder='Phone Number' />
      <TextInput placeholder='Address ' />
      <TextInput placeholder='City' />
      <TextInput placeholder='State' />
      <TextInput placeholder='Date Created' />
    </TouchableOpacity>
      <Button
        onPress={() => navigation.navigate('ContactDetails')}
      />
    </View>
  );
}

export default HomeScreen;
