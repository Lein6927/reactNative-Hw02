import * as React from 'react';
import {View,Text} from 'react-native';


export default function HomeScreen({navigation}){
    return(
        <View style={styles.container}>
            <Text 
            onPress={()=>alert('顯示Home頁')}
            style={styles.titleText}>Home Screen

            </Text>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
    },
    titleText:{
        fontSize:26,
        fontWeight:'bold',
    }
})