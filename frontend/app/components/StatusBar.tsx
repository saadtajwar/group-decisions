import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigate, useNavigation } from 'react-router-native';
import { commonStyles } from './styles/commonStyles';

interface StatusBarProps {
  title: string;
  showBackButton: boolean;
}

const StatusBar: React.FC<StatusBarProps> = ({ title, showBackButton }) => {
  const navigate = useNavigate();

  const handleBackPress = () => {
    navigate(-1);
  };

  return (
    <View style={commonStyles.statusBar}>
      {showBackButton && (
        <TouchableOpacity onPress={handleBackPress} style={commonStyles.backButton}>
          <Text style={commonStyles.backButtonText}>Back</Text>
        </TouchableOpacity>
      )}
      <Text style={commonStyles.statusBarTitle}>{title}</Text>
    </View>
  );
};

export default StatusBar;