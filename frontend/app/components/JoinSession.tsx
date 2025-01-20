import { View, Text, TextInput, Button, Alert } from 'react-native';
import { commonStyles } from './styles/commonStyles';
import { Link, useNavigate } from 'react-router-native';
import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


const JoinSession = () => {

    const [pin, setPin] = useState('');
    const navigate = useNavigate();

    const handlePinSubmit = async () => {
        const pinRegex = /^[0-9]+$/;
    
        if (pin && pinRegex.test(pin)) {
          try {
            await AsyncStorage.setItem('pin', pin);
            navigate('/host-session');
          } catch (error) {
            Alert.alert('Error', 'Failed to use your PIN. Please try again.');
          }
        } else {
          Alert.alert('Invalid Name', 'Please enter a valid PIN with only numeric characters.');
        }
      };


    return (
        <View style={commonStyles.container}>
            <Text style={commonStyles.title}>Please enter your PIN below:</Text>
            <TextInput
                    style={commonStyles.input}
                    placeholder="Enter PIN"
                    onChangeText={setPin}
                  />
            <Button title="Join Session" onPress={handlePinSubmit} />
            
        </View>
    )
};

export default JoinSession;