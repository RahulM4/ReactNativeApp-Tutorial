import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FlatCards() {
  return (
    <View>
      <Text style={styles.headingText}>Flat Cards</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={[styles.card, styles.cardOne]}>
            <Text style={styles.cardText}>red</Text>
          </View>
          <View style={[styles.card, styles.cardTwo]}>
            <Text style={styles.cardText}>green</Text>
          </View>
          <View style={[styles.card, styles.cardThree]}>
            <Text style={styles.cardText}>blue</Text>
          </View>
          <View style={[styles.card, styles.cardFour]}>
            <Text style={styles.cardText}>gray</Text>
          </View>
          <View style={[styles.card, styles.cardFive]}>
            <Text style={styles.cardText}>brown</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 16,
    fontWeight: '500',
    paddingHorizontal: 4,
    margin: 4,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 4,
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    margin: 4,
    borderRadius: 4,
  },
  cardOne: {
    backgroundColor: 'red',
  },
  cardTwo: {
    backgroundColor: 'green',
  },
  cardThree: {
    backgroundColor: 'blue',
  },
  cardFour: {
    backgroundColor: 'gray',
  },
  cardFive: {
    backgroundColor: 'brown',
  },
  cardText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'f3f3f3',
    fontFamily: 'cursive',
  },
})
