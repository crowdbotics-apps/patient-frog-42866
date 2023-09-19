import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Button, Image } from 'react-native';

const RequestStatusScreen = ({
  navigation
}) => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.statusContainer}>
        <Image style={styles.image} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
        <Text style={styles.status}>Request Successfully Created</Text>
      </View>
      <Button title="Return to Home" onPress={() => navigation.navigate('Home')} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  statusContainer: {
    marginBottom: 20,
    alignItems: 'center'
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10
  },
  status: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }
});
export default RequestStatusScreen;