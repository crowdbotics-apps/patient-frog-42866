import { StyleSheet } from "react-native";
import React from 'react';
import { SafeAreaView, View, Text, Image, TextInput, Button, FlatList } from 'react-native';

const App = () => {
  const suppliers = [{
    name: 'Supplier 1',
    rating: 4.5,
    phone: '1234567890',
    description: 'Lorem ipsum',
    price: '2.5'
  }, {
    name: 'Supplier 2',
    rating: 4.2,
    phone: '0987654321',
    description: 'Dolor sit amet',
    price: '3.0'
  } // Add more suppliers as needed
  ];
  return <SafeAreaView style={_styles.ewOadbKx}>
      <View style={_styles.XlYXLEjV}>
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={_styles.oZOrUXVe} />
        <Text style={_styles.OHCTXNfS}>App Name</Text>
        <View style={_styles.cIebPSSF}>
          <Text style={_styles.BBBWoecB}>1</Text>
        </View>
      </View>

      <TextInput placeholder="Search..." style={_styles.BhWEfltB} />

      <FlatList data={suppliers} keyExtractor={item => item.phone} renderItem={({
      item
    }) => <View style={_styles.BVPpeEck}>
            <Text style={_styles.pHrQaDAq}>{item.name}</Text>
            <Text>Rating: {item.rating}</Text>
            <Text>Phone: {item.phone}</Text>
            <Text>Description: {item.description}</Text>
            <Text>Price per liter: {item.price}</Text>
            <Button title="Show more" onPress={() => {}} />
          </View>} />

      <View style={_styles.QEpEJeeQ}>
        <Button title="Home" onPress={() => {}} />
        <Button title="My requests" onPress={() => {}} />
        <Button title="Settings" onPress={() => {}} />
      </View>
    </SafeAreaView>;
};

export default App;

const _styles = StyleSheet.create({
  ewOadbKx: {
    flex: 1,
    backgroundColor: "#fff"
  },
  XlYXLEjV: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  oZOrUXVe: {
    width: 50,
    height: 50
  },
  OHCTXNfS: {
    fontSize: 20,
    fontWeight: "bold"
  },
  cIebPSSF: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center"
  },
  BBBWoecB: {
    color: "white",
    fontSize: 14
  },
  BhWEfltB: {
    margin: 20,
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ddd"
  },
  BVPpeEck: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd"
  },
  pHrQaDAq: {
    fontSize: 18,
    fontWeight: "bold"
  },
  QEpEJeeQ: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 20
  }
});