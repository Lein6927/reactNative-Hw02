import * as React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';


export default function OrderScreen({ navigation }) {
    const [inputValueNum, setInputValueNum] = useState('');

    const [quantity, setQuantity] = useState(0);

    const plusQuantity = () => {
        setQuantity(quantity + 1);
        console.log("+");
    };
    const deQuantity = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }console.log("-");
    };


    return (
        <View style={styles.content}>
            <View style={styles.contentQuantity}>
            <Image style={styles.image} source={{ uri: 'https://images.plurk.com/3v2pCeK4ABEs7wg3dPjZwI.png' }}></Image>
                <Text> 黑咖啡:</Text>
                <TouchableOpacity
                    onPress={deQuantity}
                    title="-"
                    style={styles.textcoma}>
                    <Text>-</Text>
                </TouchableOpacity>
                <TextInput
                    style={styles.textInputNum}
                    value={quantity.toString()}
                    onChangeText={(text) => setQuantity(parseInt(text))}
                
               />
                <TouchableOpacity
                    onPress={plusQuantity}
                    title="+">
                    <Text>+</Text>
                </TouchableOpacity>
            </View>


            

        </View>
    )
}
//export default OrderScreen;
const styles = StyleSheet.create({
    content: {
        marginTop:50,
        flex: 1,
        alignItems: 'center',
        //justifyContent: 'center',

    },
    contentQuantity: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10
    },

    h2Text: { //標題字
        color: '#A6695F',
        fontSize: 30,
        marginBottom: 1,

    },
    image: {
        width: 80,
        height: 60,
        resizeMode: 'stretch',
        marginLeft: 30,
    },
    textInputNum: {
        borderWidth: 1,
        margin: 10,
        marginTop: 20,
        height: 30,
        //width:10,
        border: '1px solid #555',
        borderRadius: 4,
        width: '20%', // 設定輸入框寬度為父容器的80%
        marginBottom: 10, // 設定輸入框和按鈕之間的間距

    },
    textcoma:{
        fontSize:20,
        paddingLeft:10,
        alignItems: 'center',
        fontWeight:'bold',
        
    },


})