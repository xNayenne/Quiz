// WelcomeScreen.js

import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'; 
import styles from '../styles/WelcomeStyle.js';

const WelcomeScreen = ({ onRegulationAccepted }) => {
  const [isRegulationAccepted, setIsRegulationAccepted] = useState(false);

  const handleAcceptanceToggle = () => {
    setIsRegulationAccepted(!isRegulationAccepted);
  };

  const handleContinuePress = async () => {
    if (isRegulationAccepted) {
      await onRegulationAccepted();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <TouchableOpacity onPress={handleAcceptanceToggle}>
          <View style={styles.checkboxContainer}>
            <View style={[styles.checkbox, isRegulationAccepted && styles.checkedBox]} />
            <Text>Accept the regulations</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleContinuePress} disabled={!isRegulationAccepted}>
          <View style={[styles.continueButton, !isRegulationAccepted && styles.disabledButton]}>
            <Text>Accept</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WelcomeScreen;