import React from 'react';
import {Text, View,Image, ScrollView, TextInput,Button,FlatList, StyleSheet,Platform} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...Platform.select({
      ios: {
        backgroundColor: 'red',
      },
      android: {
        backgroundColor: 'green',
      },
      default: {
        // other platforms, web for example
        backgroundColor: 'blue',
      },
    }),
  },
});

const YourApp = () => {
  return (
    <View
    
      style={{
        flex: 1,
        backgroundColor: ' rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    
    
      }}>
        <Image
          source={{
            uri: 'https://www.nih.gov/sites/default/files/styles/featured_media_breakpoint-medium/public/news-events/news-releases/2021/20230325-cancer.jpg?itok=DgmjFGyX&timestamp=1616681106',
          }}
          style={{width: 180, height: 180,  margin:20}}
   
        />
      <Text
      style={{color:'white',  margin:20}}
      >Eng.Esraa Almasri  BMG
      2018
      
      </Text>
      

    
    <TextInput
        style={{color:'white',
          height: 40,
          width:180,
          borderColor: 'white',
          borderWidth: 2,
         textAlign:'center',  margin:22
         
        }}
        defaultValue=" type here"
      />
       <Button
       color="#9C27B0"
        title="NEXT"
        

        onPress={() => Alert.alert('Simple Button pressed')}
        
      />

      
    </View>
    
    
  );

 
  
  
  
  
};

export default YourApp;