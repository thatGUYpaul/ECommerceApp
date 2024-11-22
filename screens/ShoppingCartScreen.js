import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, FlatList, TouchableOpacity } from 'react-native';

const cartItems = [
  { id: '1', name: 'Smartphone', price: '$499' },
  { id: '2', name: 'Sneakers', price: '$99' },
];

export default function ShoppingCartScreen({ navigation }) {
  const [cart, setCart] = useState(cartItems);

  const handleCheckout = () => {
    navigation.navigate('Checkout');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Shopping Cart</Text>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.cartItem}>
            <Text style={styles.cartItemName}>{item.name}</Text>
            <Text style={styles.cartItemPrice}>{item.price}</Text>
          </View>
        )}
      />
      <Button title="Proceed to Checkout" onPress={handleCheckout} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  cartItemName: {
    fontSize: 18,
  },
  cartItemPrice: {
    fontSize: 18,
    color: 'green',
  },
});
