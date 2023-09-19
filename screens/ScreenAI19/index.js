import React from 'react';
import { SafeAreaView, View, Text, TextInput, FlatList, Image, StyleSheet } from 'react-native';
const dummyData = [{
  id: '1',
  date: '2021-09-01',
  status: 'Pending'
}, {
  id: '2',
  date: '2021-09-02',
  status: 'Accepted and on Ruth'
}, {
  id: '3',
  date: '2021-09-03',
  status: 'Completed'
}, {
  id: '4',
  date: '2021-09-04',
  status: 'Canceled'
}, {
  id: '5',
  date: '2021-09-05',
  status: 'Denied'
}];

const ScreenComponent = () => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.title}>Current Orders</Text>
        <TextInput style={styles.searchBar} placeholder="Search by Request ID" />
        <FlatList data={dummyData.filter(item => item.status === 'Pending' || item.status === 'Accepted and on Ruth')} keyExtractor={item => item.id} renderItem={({
        item
      }) => <View style={styles.item}>
              <Image style={styles.image} source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} />
              <Text style={styles.text}>Request ID: {item.id}</Text>
              <Text style={styles.text}>Date: {item.date}</Text>
              <Text style={styles.text}>Status: {item.status}</Text>
            </View>} />
      </View>
      <View style={styles.section}>
        <Text style={styles.title}>Past Orders</Text>
        <TextInput style={styles.searchBar} placeholder="Search by Request ID" />
        <FlatList data={dummyData.filter(item => item.status !== 'Pending' && item.status !== 'Accepted and on Ruth')} keyExtractor={item => item.id} renderItem={({
        item
      }) => <View style={styles.item}>
              <Image style={styles.image} source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} />
              <Text style={styles.text}>Request ID: {item.id}</Text>
              <Text style={styles.text}>Date: {item.date}</Text>
              <Text style={styles.text}>Status: {item.status}</Text>
            </View>} />
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  section: {
    flex: 1
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10
  },
  searchBar: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10,
    marginBottom: 10
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10
  },
  text: {
    fontSize: 16
  }
});
export default ScreenComponent;