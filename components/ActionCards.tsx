import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Linking, Image } from 'react-native';
const text ='Skilled in programming languages C++, Java and Python. Proficient in DSA(C++) Experienced in web development using HTML, CSS, JavaScript, Nodejs,  Reactjs and database management and Experienced in working with databases including Firebase, Mysql and MongoDB. and Believe in Team work.❤️'
const ActionCard = () => {
  const handleFollowMe = () => {
    const linkedinUrl = 'https://www.linkedin.com/in/rahulm4/'; 
    Linking.openURL(linkedinUrl).catch((err) =>
      console.error("Couldn't load URL", err)
    );
  };

  const handleExplore = () => {
    const portfolioUrl = 'https://rahulmahto-myportfolio.vercel.app/';
    Linking.openURL(portfolioUrl).catch((err) =>
      console.error("Couldn't load URL", err)
    );
  };

  return (
    <View style={styles.card}>
      {/* Profile Section */}
      <View style={styles.profileContainer}>
        <Image
          source={{ uri: 'https://raw.githubusercontent.com/RahulM4/myportfolio/refs/heads/main/src/assets/me.png' }} // Replace with your profile image URL
          style={styles.profileImage}
        />
        <View>
          <Text style={styles.name}>Rahul Mahto</Text> {/* Replace with the name */}
          <Text style={styles.role}>Software Engineer</Text> {/* Role */}
        </View>
      </View>

      {/* Description */}
      <Text style={styles.subtitle}>
        Follow me for more updates or explore my portfolio.
      </Text>
      <Text style={{color:'#9AA6B2'}} >{text}</Text>

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
  );
};

const styles = StyleSheet.create({
  card: {
    width: 400,
    padding: 20,
    margin: 8,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderBottomRightRadius: 30,
    elevation: 10, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOffset: { width: 0, height: 2 }, // iOS shadow offset
    shadowOpacity: 0.25, // iOS shadow opacity
    shadowRadius: 3.84, // iOS shadow radius
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
