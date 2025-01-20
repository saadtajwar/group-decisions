import { View, Text, Button } from 'react-native';
import { Link, useNavigate } from 'react-router-native';
import { commonStyles } from './styles/commonStyles';

const generateRandomPin = () => {
  return Math.floor(1000 + Math.random() * 9000).toString();
};

const DisplayPin = () => {
  const pin = generateRandomPin();
  const navigate = useNavigate();

  return (
    <View style={commonStyles.container}>
      <Text style={commonStyles.title}>Your PIN</Text>
      <Text style={commonStyles.pin}>{pin}</Text>
      <Link to="/testing">
        <Button title="Start" onPress={() => navigate("/testing")} />
      </Link>
    </View>
  );
};

export default DisplayPin;