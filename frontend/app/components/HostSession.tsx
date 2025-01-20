import { View, Text, Button, Pressable } from 'react-native';
import { commonStyles } from './styles/commonStyles';
import { Link, useNavigate } from 'react-router-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const generateRandomPin = () => {
    return Math.floor(1000 + Math.random() * 9000).toString();
  };
  
const HostSession = () => {
  const pin = generateRandomPin();
  const navigate = useNavigate();
  
  return (
    <View style={commonStyles.container}>
      <Text style={commonStyles.title}>Your PIN</Text>
      <Text style={commonStyles.pin}>{pin}</Text>
      <Text>Note: we should add a list / gallery view of current users here that have joined the session</Text>
      <Link to="/testing">
        <Button title="Start" onPress={() => navigate("/testing")} />
      </Link>
    </View>
  );
};


export default HostSession;