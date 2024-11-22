import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';

const categories = [
  { id: '1', name: 'Electronics' },
  { id: '2', name: 'Fashion' },
  { id: '3', name: 'Home & Kitchen' },
  { id: '4', name: 'Books' },
  { id: '5', name: 'Sports' },
];

const featuredProducts = [
  { id: '1', name: 'Smartphone', price: '$499', image: 'https://via.placeholder.com/100' },
  { id: '2', name: 'Sneakers', price: '$99', image: 'https://via.placeholder.com/100' },
  { id: '3', name: 'Blender', price: '$39', image: 'https://via.placeholder.com/100' },
  { id: '4', name: 'Novel', price: '$15', image: 'https://via.placeholder.com/100' },
];

export default function HomeScreen({ route }) {
  const { username } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome, {username}!</Text>

      <Text style={styles.sectionTitle}>Categories</Text>
      <FlatList
        horizontal
        data={categories}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.categoryItem}>
            <Text style={styles.categoryText}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />

      <Text style={styles.sectionTitle}>Featured Products</Text>
      <FlatList
        data={featuredProducts}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => (
          <View style={styles.productItem}>
            <Image source={{ uri: item.image }} style={styles.productImage} />
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productPrice}>{item.price}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  categoryItem: {
    marginRight: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  categoryText: {
    fontSize: 14,
    fontWeight: '600',
  },
  productItem: {
    flex: 1,
    padding: 10,
    margin: 5,
    backgroundColor: '#fff',
    borderRadius: 5,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  productImage: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  productName: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 14,
    color: 'green',
  },
});
