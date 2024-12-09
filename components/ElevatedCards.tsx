import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.headingText}>Elevated Cards</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={[styles.cardElevated, styles.cardElevatedOne]}>
            <Text style={styles.cardElevatedText}>red</Text>
          </View>
          <View style={[styles.cardElevated, styles.cardElevatedTwo]}>
            <Text style={styles.cardElevatedText}>green</Text>
          </View>
          <View style={[styles.cardElevated, styles.cardElevatedThree]}>
            <Text style={styles.cardElevatedText}>blue</Text>
          </View>
          <View style={[styles.cardElevated, styles.cardElevatedFour]}>
            <Text style={styles.cardElevatedText}>gray</Text>
          </View>
          <View style={[styles.cardElevated, styles.cardElevatedFive]}>
            <Text style={styles.cardElevatedText}>brown</Text>
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
  cardElevated: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    margin: 4,
    borderRadius: 4,
  },
  cardElevatedOne: {
    backgroundColor: 'red',
    elevation: 8,
    padding: 20, 
    borderRadius: 10,
    shadowOffset:{
      width:4,
      height:4
    },
    shadowColor: '#000'
   
  },
  cardElevatedTwo: {
    backgroundColor: 'green',
    elevation: 8,
    padding: 20, 
    borderRadius: 10,
    shadowOffset:{
      width:4,
      height:4
    },
    shadowColor: '#000'

  },
  cardElevatedThree: {
    backgroundColor: 'blue',
    elevation: 8,
    padding: 20, 
    borderRadius: 10,
    shadowOffset:{
      width:4,
      height:4
    },
    shadowColor: '#000'
    
  },
  cardElevatedFour: {
    backgroundColor: 'gray',
    elevation: 8,
    padding: 20, 
    borderRadius: 10,
    shadowOffset:{
      width:4,
      height:4
    },
    shadowColor: '#000'
  },
  cardElevatedFive: {
    backgroundColor: 'brown',
    elevation: 8,
    padding: 20, 
    borderRadius: 10,
    shadowOffset:{
      width:4,
      height:4
    },
    shadowColor: '#000'
  },
  cardElevatedText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'f3f3f3',
    fontFamily: 'cursive',
  },
});
