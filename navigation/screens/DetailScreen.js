import * as React from 'react';
import {View,Text} from 'react-native';


export default function DetailScreen({navigation}){
    return(
        <View style={{flex:1, alignItems: 'center',  }}>
            <Text 
            onPress={()=>alert('顯示細節頁面')}
            style={{fontSize:26,fontWeight: 'bold'}}>
                Detail Screen

            </Text>
        </View>
    )
}