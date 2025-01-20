import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, Alert, Image } from 'react-native';
import { Link, useNavigate } from 'react-router-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { commonStyles } from './styles/commonStyles'


const Home = () => {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const checkStoredName = async () => {
      try {
        const storedName = await AsyncStorage.getItem('username');
        if (storedName) {
          setName(storedName);
        }
      } catch (error) {
        console.error('Failed to load name from storage:', error);
      }
    };

    checkStoredName();
  }, [navigate]);


  const handleJoin = async () => {
    const nameRegex = /^[A-Za-z\s]+$/;

    if (name && nameRegex.test(name)) {
      try {
        await AsyncStorage.setItem('username', name);
        navigate('/join-session');
      } catch (error) {
        Alert.alert('Error', 'Failed to save your name. Please try again.');
      }
    } else {
      Alert.alert('Invalid Name', 'Please enter a valid name with only alphabetic characters.');
    }
  };

  const handleHost = async () => {
    const nameRegex = /^[A-Za-z\s]+$/;

    if (name && nameRegex.test(name)) {
      try {
        await AsyncStorage.setItem('username', name);
        navigate('/host-session');
      } catch (error) {
        Alert.alert('Error', 'Failed to save your name. Please try again.');
      }
    } else {
      Alert.alert('Invalid Name', 'Please enter a valid name with only alphabetic characters.');
    }
  };

  return (
    <View style={commonStyles.container}>
      <Image source={require('../../assets/images/decisionsai-logo.png')} style={commonStyles.logo}/>
      <Text style={commonStyles.label}>Enter your name:</Text>
      <TextInput
        style={commonStyles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <Link to="/join-session" style={commonStyles.button}>
        <Button title="Join Session" color='#FFFFFF' onPress={handleJoin} />
      </Link>
      <Link to="/join-session" style={commonStyles.button}>
        <Button title="Host Session" color='#FFFFFF' onPress={handleHost} />
      </Link>
    </View>
  );
};

export default Home;