import { View, Text, Dimensions, StyleSheet, TouchableOpacity, StyleProp, ViewStyle } from 'react-native';
import React from 'react';

const { width, height } = Dimensions.get('window');

interface CustomBtnProps {
  action: () => void;
  title: string;
  style?: StyleProp<ViewStyle>; // Allowing for custom style prop
}

const CustomBtn: React.FC<CustomBtnProps> = ({ action, title, style }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={[styles.btnContainer, style]} // Merging default and custom styles
      onPress={action}
    >
      <Text style={styles.btnText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    width: 380,
    height: height * 0.07,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#A3CFFF',
    borderRadius: 32,
    elevation: 8,


    shadowColor: '#A3CFFF',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 16,
  },
  btnText: {
    fontSize: width * 0.048,
    color: '#092A4D',
    fontWeight: '700',
  },
});

export default CustomBtn;
