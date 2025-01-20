import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { useNavigate } from 'react-router-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { commonStyles } from './styles/commonStyles';

const Home = () => {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const checkStoredName = async () => {
      try {
        const storedName = await AsyncStorage.getItem('username');
        if (storedName) {
          setName(storedName);
          navigate('/display-pin');
        }
      } catch (error) {
        console.error('Failed to load name from storage:', error);
      }
    };

    checkStoredName();
  }, [navigate]);

  const handleSubmit = async () => {
    const nameRegex = /^[A-Za-z\s]+$/;

    if (name && nameRegex.test(name)) {
      try {
        await AsyncStorage.setItem('username', name);
        navigate('/display-pin');
      } catch (error) {
        Alert.alert('Error', 'Failed to save your name. Please try again.');
      }
    } else {
      Alert.alert('Invalid Name', 'Please enter a valid name with only alphabetic characters.');
    }
  };

  return (
    <View style={commonStyles.container}>
      <Text style={commonStyles.title}>Welcome!</Text>
      <Text style={commonStyles.label}>Enter your name:</Text>
      <TextInput
        style={commonStyles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

export default Home;