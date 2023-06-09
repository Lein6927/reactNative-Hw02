import * as React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';


export default function SettingsScreen({navigation}){
    return(
        <View style={styles.content}>
            <Text style={styles.h2Text}>更多資訊</Text>
            <Text style={styles.h2Text}>正在更新中</Text>
            <Image style={styles.image} source={{ uri: 'https://images.plurk.com/3v2pCeK4ABEs7wg3dPjZwI.png' }}></Image>

        </View>
    )
}
const styles=StyleSheet.create({
    content:{
        flex:1,
        alignItems:'center',
        justifyContent: 'center',
    },
    h2Text: { //標題字
        color: '#A6695F',
        fontSize: 30,
        marginBottom: 1,

    },
    image: {
        width: 240,
        height: 180,
        resizeMode: 'stretch',
        marginLeft: 30,
    },

})