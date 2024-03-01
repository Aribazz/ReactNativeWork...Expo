import React from 'react';
import { View, Text, } from 'react-native';

function ContactDetails({ route,navigation }) {
  const {contact} = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Title: {contact.title}</Text>
    <Text>Name: {contact.name}</Text>
    <Text>Phone Number: {contact.phone}</Text>
    <Text>Address: {contact.address}</Text>
    <Text>City: {contact.city}</Text>
    <Text>State: {contact.state}</Text>
    <Text>Date Created: {contact.dateCreated}</Text>
  </View>
  );
}

export default ContactDetails;
