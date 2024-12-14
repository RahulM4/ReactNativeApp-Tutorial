import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Linking, Image,Dimensions } from 'react-native';


const { width } = Dimensions.get('window');

const textcontent ='Skilled in programming languages C++, Java and Python. Proficient in DSA(C++) Experienced in web development using HTML, CSS, JavaScript, Nodejs,  Reactjs and database management and Experienced in working with databases including Firebase, Mysql and MongoDB. and Believe in Team work.'
const ActionCard = () => {
  const handleFollowMe = () => {
    const linkedinUrl = 'https://www.linkedin.com/in/rahulm4/'; 
    Linking.openURL(linkedinUrl).catch((err) =>
      console.error("Couldn't load URL", err)
    )
  }

  const handleExplore = () => {
    const portfolioUrl = 'https://rahulmahto-myportfolio.vercel.app/';
    Linking.openURL(portfolioUrl).catch((err) =>
      console.error("Couldn't load URL", err)
    )
  }

  return (
    <View>
      <Text style={styles.headingText}>Action Cards</Text>
    
    <View style={styles.card}>
      {/* Profile Section */}
      <View style={styles.profileContainer}>
        <Image
          source={{ uri: 'https://raw.githubusercontent.com/RahulM4/myportfolio/refs/heads/main/src/assets/me.png' }} 
          style={styles.profileImage}
        />
        <View>
          <Text style={styles.name}>Rahul Mahto</Text> 
          <Text style={styles.role}>Software Engineer</Text> 
        </View>
      </View>

      {/* Description */}
      <Text style={styles.subtitle}>
        Follow me for more updates or explore my portfolio.
      </Text>
      <Text style={{color:'#9AA6B2'}} >{textcontent}</Text>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleFollowMe}>
          <Text style={styles.buttonText}>Follow Me</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleExplore}>
          <Text style={styles.buttonText}>Explore</Text>
        </TouchableOpacity>
      </View>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headingText: {
    fontSize: 16,
    fontWeight: '500',
    paddingHorizontal: 4,
    margin: 4,
  },
  card: {
    width: width * 0.95,
    padding: 20,
    margin: 8,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderBottomRightRadius: 30,
    elevation: 10, 
    shadowColor: '#000', 
    
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 50,
    marginRight: 12,
    backgroundColor: '#F29F58'
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  role: {
    fontSize: 14,
    color: '#555',
  },
  subtitle: {
    fontSize: 14,
    color: '#555',
    marginBottom: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10
  },
  button: {
    backgroundColor: '#F29F58',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default ActionCard;
