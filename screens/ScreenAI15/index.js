import React, { useState } from 'react';
import { SafeAreaView, View, Text, Button, StyleSheet } from 'react-native';

const ScreenComponent = () => {
  const [quantity, setQuantity] = useState(1);
  const pricePerLiter = 2.5;
  const totalPrice = quantity * pricePerLiter;
  return <SafeAreaView style={styles.container}>
      <View style={styles.section}>
        <Text>Request ID: 12345</Text>
        <Text>Date and Time: {new Date().toLocaleString()}</Text>
      </View>
      <View style={styles.section}>
        <Text>Price per liter: ${pricePerLiter}</Text>
        <View style={styles.quantityContainer}>
          <Button title="-" onPress={() => setQuantity(Math.max(1, quantity - 1))} />
          <Text>Quantity: {quantity}</Text>
          <Button title="+" onPress={() => setQuantity(quantity + 1)} />
        </View>
        <Text>Total price: ${totalPrice.toFixed(2)}</Text>
      </View>
      <View style={styles.section}>
        <Button title="Request" onPress={() => {}} />
        <Button title="Cancel" onPress={() => {}} />
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  section: {
    marginBottom: 20
  },
  quantityContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10
  }
});
export default ScreenComponent;