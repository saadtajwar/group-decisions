import { View, Text, Button, FlatList, Pressable } from 'react-native';
import { commonStyles } from './styles/commonStyles';
import { Link, useNavigate } from 'react-router-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import StatusBar from './StatusBar';

const generateRandomPin = () => {
    return Math.floor(1000 + Math.random() * 9000).toString();
  };
  
const HostSession = () => {
  const pin = generateRandomPin();
  const navigate = useNavigate();
  
  return (
    <>
    <StatusBar title="Host Session" showBackButton={true} />
    <View style={commonStyles.container}>
      <Text style={commonStyles.title}>Your PIN</Text>
      <Text style={commonStyles.pin}>{pin}</Text>
      <View style={commonStyles.container}>
      <FlatList style={commonStyles.flatList}
        data={[
          {key: 'Devin'},
          {key: 'Dan'},
          {key: 'Dominic'},
          {key: 'Jackson'},
          {key: 'James'},
          {key: 'Joel'},
          {key: 'John'},
          {key: 'Jillian'},
          {key: 'Jimmy'},
          {key: 'Julie'},
        ]}
        renderItem={({item}) => <Text style={commonStyles.item}>{item.key}</Text>}
      />
    </View>
      <Link to="/vote" style={commonStyles.button}>
        <Button title="Start" color='#FFFFFF' onPress={() => navigate("/vote")}/>
      </Link>
    </View>
  </>
  );
};


export default HostSession;