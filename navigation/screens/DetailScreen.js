import * as React from 'react';
import { View, Text, TextInput } from 'react-native';


export default function DetailScreen({ navigation }) {

    const [inputValue, setInputValue] = useState('');
    const [error, setError] = useState('');


    const handleSubmit = () => {
        const phone = /^09\d{8}$/;//^09為開頭+後面要8碼
        if (!phone.test(inputValue)) {
            setError('請輸入正確的手機號碼');
            alert('請輸入正確的手機號碼');
            console.log('錯誤，請輸入正確的電話資訊')
        } else {
            setError('');
            alert('預約成功');
            // 在這裡執行表單提交的相關邏輯
            console.log('成功')
        }
    };
    return (
        <View style={{ flex: 1, alignItems: 'center', }}>
            <Text
                onPress={() => alert('顯示細節頁面')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>
                Detail Screen
            </Text>
            <TextInput
                title='手機號碼'
                style={styles.inputText}
                value={inputValue}
                onChangeText={(text) => setInputValue(text)}
                defaultValue='輸入手機號碼'
            //keyboardType="numeric"
            />
            <Text style={[styles.pText, { fontFamily: 'jf-font' }]}>您的手機號碼:{inputValue}</Text>
            
            <TouchableOpacity
                style={styles.button}
                title="確認"
                onPress={handleSubmit}>
                <Text style={styles.buttonText}>確認</Text>

            </TouchableOpacity>

            {error ? <Text style={styles.error}>{error}</Text> : null}

        </View>
    )
}