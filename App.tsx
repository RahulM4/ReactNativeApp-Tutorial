import React from 'react';
import {ScrollView, SafeAreaView} from 'react-native';
import FlatCards from './components/FlatCards';
import ElevatedCards from './components/ElevatedCards';
import FancyCards from './components/FancyCards';
import ActionCards from './components/ActionCards';
import ContactList from './components/ContactList';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        {/* FlatCards */}
       <FlatCards/>
        {/* Elevated Cards */}
        <ElevatedCards/>
        {/* Fancy Cards */}
        <FancyCards/>
        {/* Action Cards */}
        <ActionCards/>
        <ActionCards/>
        <ContactList/>
      </ScrollView>
    </SafeAreaView>
  );
};


export default App;
