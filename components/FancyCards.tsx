import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { turistPlace } from './turistPlace';

export default function FancyCards() {
  return (
    <View>
      <Text style={styles.headingText}>Fancy Cards</Text>
      <ScrollView horizontal ={true} showsHorizontalScrollIndicator ={false} >
      <View style={styles.mainContainer}>
          {turistPlace.map((item) => (
            <View style={styles.container} key={item.id}>
              <View style={styles.imageCard}>
                <Image source={{ uri: item.image }} style={styles.image} />
              </View>
              <View style={styles.contentCard}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.subtitle}>{item.subtitle}</Text>
                <Text style={styles.description}>{item.description}</Text>
                <Text style={styles.time}>{item.timeupdate}</Text>
              </View>
            </View>
          ))}
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
  }
  ,
  mainContainer:{
    flex:1,
    flexDirection: 'row',
    
  }
  ,
  container: {
    width: 360,
    height: 300,
    margin: 8,
    elevation: 10,
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 1 }, 
    shadowOpacity: 0.25, 
    shadowRadius: 3.84, 
    backgroundColor: '#fff', 
    borderRadius: 10 
  },
  imageCard: {
    width: '100%',
    height: 150,
    
   
  },
  image: {
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 15
  },
  contentCard: {
    padding: 10,
    backgroundColor: 'fff',
    borderBottomRightRadius: 15
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: '#2F3645',
    marginBottom: 5,
  },
  description: {
    fontSize: 12,
    color: '#939185',
    marginBottom: 5,
  },
  time: {
    fontSize: 10,
    color: '#E6B9A6',
  },
});
