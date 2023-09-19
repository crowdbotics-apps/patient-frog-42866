import React from 'react';
import { SafeAreaView, View, Text, Image, Button, StyleSheet } from 'react-native';

const SupplierScreen = () => {
  const supplier = {
    name: 'Supplier Name',
    phone: '123-456-7890',
    email: 'supplier@example.com',
    location: {
      street: '123 Main St',
      city: 'Anytown',
      zip: '12345',
      state: 'ST'
    },
    description: 'This is a description of the supplier.',
    pricePerLiter: '2.50',
    rating: '4.5',
    numberOfRates: '200'
  };
  return <SafeAreaView style={styles.container}>
      <Image style={styles.image} source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} />
      <Text style={styles.title}>{supplier.name}</Text>
      <Text style={styles.text}>Rating: {supplier.rating} ({supplier.numberOfRates} rates)</Text>
      <Text style={styles.text}>Phone: {supplier.phone}</Text>
      <Text style={styles.text}>Email: {supplier.email}</Text>
      <Text style={styles.text}>Address: {supplier.location.street}, {supplier.location.city}, {supplier.location.state} {supplier.location.zip}</Text>
      <Text style={styles.text}>Description: {supplier.description}</Text>
      <Text style={styles.text}>Price per liter: ${supplier.pricePerLiter}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Make a Request" onPress={() => {}} />
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff'
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  },
  text: {
    fontSize: 18,
    marginBottom: 10
  },
  buttonContainer: {
    marginTop: 20
  }
});
export default SupplierScreen;