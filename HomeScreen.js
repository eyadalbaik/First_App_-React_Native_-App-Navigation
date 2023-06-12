// HomeScreen.js
import React from 'react';
import { View, Text, Button , StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>مرحبًا بك في الشاشة الرئيسية - Home Screen</Text>
      <Button style={styles.button}
        title="التفاصيل"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    view: {
flex: 1,
backgroundColor: '#E9E7DB',
alignItems: 'center',
    },
    text: {
        marginTop: 300,
    },
    button:{
        marginTop: 250,
    }
});





export default HomeScreen;
