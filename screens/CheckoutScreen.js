import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function CheckoutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Checkout</Text>
      <Text style={styles.section}>Payment Details</Text>
      {/* Here, add form inputs for payment and shipping details */}
      <Button title="Confirm Order" onPress={() => alert('Order confirmed!')} />
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
  section: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
});
