import { View, Text, Button, Pressable } from 'react-native';
import { commonStyles } from './styles/commonStyles';
import { Link, useNavigate } from 'react-router-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Testing = () => {
  const navigate = useNavigate();

  const resetUsername = async () => {
    try {
      await AsyncStorage.removeItem('username');
    } catch (error) {
      console.error('Failed to remove username from storage:', error);
    }
  };

  return (
    <View style={commonStyles.container}>
      <Text style={commonStyles.title}>Testing</Text>
      <Link to="/">
        <Button title="Start" onPress={() => navigate("/")} />
      </Link>
      <Pressable onPress={resetUsername} style={{ marginTop: 100}}>
        <Text>Reset/clear your stored username by clicking this</Text>
      </Pressable>
    </View>
  );
};

export default Testing;