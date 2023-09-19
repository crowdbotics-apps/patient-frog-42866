import React from 'react';
import { SafeAreaView, View, Text, Button, Image, StyleSheet } from 'react-native';

const ScreenComponent = () => {
  const supplierDetails = {
    name: 'Supplier Name',
    phoneNumber: '123-456-7890',
    description: 'This is a short summary of the supplier.',
    pricePerLiter: 2.5,
    currentPrice: 2.5,
    rating: 4.5
  };
  const requestDetails = {
    requestId: '12345',
    dateTime: '2022-01-01 12:00:00',
    pricePerLiter: 2.5,
    quantity: 100,
    price: 250,
    estimatedDelivery: '2022-01-02 12:00:00'
  };
  return <SafeAreaView style={styles.container}>
      <View style={styles.section}>
        <Image style={styles.image} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
        <Text>{`Supplier: ${supplierDetails.name}`}</Text>
        <Text>{`Phone: ${supplierDetails.phoneNumber}`}</Text>
        <Text>{`Description: ${supplierDetails.description}`}</Text>
        <Text>{`Price per Liter: ${supplierDetails.pricePerLiter}`}</Text>
        <Text>{`Current Price: ${supplierDetails.currentPrice}`}</Text>
        <Text>{`Rating: ${supplierDetails.rating}`}</Text>
        <Button title="Show More" onPress={() => {}} />
      </View>
      <View style={styles.section}>
        <Text>{`Request ID: ${requestDetails.requestId}`}</Text>
        <Text>{`Date and Time: ${requestDetails.dateTime}`}</Text>
        <Text>{`Price per Liter: ${requestDetails.pricePerLiter}`}</Text>
        <Text>{`Quantity: ${requestDetails.quantity}`}</Text>
        <Text>{`Price: ${requestDetails.price}`}</Text>
        <Text>{`Estimated Delivery: ${requestDetails.estimatedDelivery}`}</Text>
      </View>
      <View style={styles.section}>
        <Button title="Request Completed" onPress={() => {}} />
        <Button title="Cancel Request" onPress={() => {}} />
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  section: {
    marginVertical: 10
  },
  image: {
    width: 100,
    height: 100
  }
});
export default ScreenComponent;