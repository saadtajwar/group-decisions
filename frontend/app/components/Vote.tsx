import { View, Text, Button, Pressable, FlatList } from 'react-native';
import { commonStyles } from './styles/commonStyles';
import { Link, useNavigate } from 'react-router-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import StatusBar from './StatusBar';



const Vote = () => {
  const navigate = useNavigate();

  const resetUsername = async () => {
    try {
      await AsyncStorage.removeItem('username');
    } catch (error) {
      console.error('Failed to remove username from storage:', error);
    }
  };

  /*
  Add in (below) a drag and drop for sorting options functionality
  */

  return (
    <>
    <StatusBar title="Vote" showBackButton={true} />
    <View style={commonStyles.container}>
      <Text style={commonStyles.title}>Vote</Text>
      <Link to="/" style={commonStyles.button}>
        <Button title="Start" color="#FFFFFF" onPress={() => navigate("/")} />
      </Link>
      <Pressable onPress={resetUsername} style={{ marginTop: 10}}>
        <Text>Reset/clear your stored username by clicking this</Text>
      </Pressable>
    </View>
  </>
  );
};

export default Vote;