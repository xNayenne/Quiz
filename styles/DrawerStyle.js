// DrawerStyle.js

import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  drawerButton: {
    backgroundColor: '#BD90F9',
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginVertical: 10,
    borderRadius: 2,
  },
  drawerButtonText: {
    fontSize: 14,
    textAlign: 'center',
    color: 'white',
  },
  scrollContainer: {
    flexGrow: 1,
  },
  containerDrawer: {
    flex: 1,
    alignItems: 'center',
  },
  navigationContainer: {
    backgroundColor: '#F4ECFF',
    padding: 20,
  },
  drawerIcon: {
    width: 280,
    height: 135,
    alignSelf: 'center',
    marginVertical: 20,
  },
  buttonContainer: {
    marginTop: 15,
    width: '100%', 
    flexDirection: 'column',
  },
  buttonSpacer: {
    marginVertical: 10, 
  },
  divider: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 2,
    marginBottom: 10,
    marginTop: 4,
  },
  drawerDrawerButton: {
    backgroundColor: '#BD90F9',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 2,
    marginTop: 18,
  },
  drawerRandomButtonText: {
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
    color: 'white',
  },
});

export default styles;