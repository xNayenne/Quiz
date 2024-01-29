// HomePageStyle.js

import { StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';

const styles = StyleSheet.create({
  testItem: {
    marginVertical: 10,
    padding: 15,
    width: '100%',
    height: 150,
    borderWidth: 3,
    borderColor: '#BD90F9',
    borderRadius: 5,
    backgroundColor: 'white',
  },
  regularItem: {
    marginBottom: 10,
  },
  titleTest: {
    marginTop: -9,
    fontSize: 22,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  tagsContainer: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  tag: {
    fontSize: 14,
    marginRight: 5,
    color: 'purple',
  },
  description: {
    marginTop: 11,
    fontSize: 14,
  },
  containerHome: {
    flex: 1,
    alignItems: 'center',
  },
  flatListContainer: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#F4ECFF',
  },
});

export default styles;



//import { StyleSheet } from 'react-native';
//import { useFonts } from 'expo-font';
//
//const styles = () => {
//  // Load fonts asynchronously
//  const [loaded] = useFonts({
//    'Ultra-Regular': require('../fonts/Ultra-Regular.ttf'),
//    // Add more fonts if needed
//  });
//
//  // Check if the fonts are loaded
//  if (!loaded) {
//    // You might want to handle the case where fonts are still loading
//    return {};
//  }
//
//  return StyleSheet.create({
//    testItem: {
//      marginVertical: 10,
//      padding: 15,
//      width: '100%',
//      height: 150,
//      borderWidth: 3,
//      borderColor: '#BD90F9',
//      borderRadius: 5,
//      backgroundColor: 'white',
//      fontFamily: 'Ultra-Regular', // Use the "Ultra-Regular" font
//    },
//    regularItem: {
//      marginBottom: 10,
//    },
//    titleTest: {
//      marginTop: -9,
//      fontSize: 22,
//      marginBottom: 5,
//      fontWeight: 'bold',
//      fontFamily: 'Ultra-Regular', // Use the "Ultra-Regular" font
//    },
//    tagsContainer: {
//      flexDirection: 'row',
//      marginBottom: 5,
//    },
//    tag: {
//      fontSize: 14,
//      marginRight: 5,
//      color: 'purple',
//      fontFamily: 'Ultra-Regular', // Use the "Ultra-Regular" font
//    },
//    description: {
//      marginTop: 11,
//      fontSize: 14,
//      fontFamily: 'Ultra-Regular', // Use the "Ultra-Regular" font
//    },
//    containerHome: {
//      flex: 1,
//      alignItems: 'center',
//    },
//    flatListContainer: {
//      flexGrow: 1,
//      padding: 20,
//      backgroundColor: '#F4ECFF',
//      fontFamily: 'Ultra-Regular', // Use the "Ultra-Regular" font
//    },
//  });
//};
//
//export default styles();



