
import React, { useState, useRef } from 'react';


import { SafeAreaView, StyleSheet, FlatList, ScrollView, Alert, TouchableWithoutFeedback, KeyboardAvoidingView, View, Text, StatusBar, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import color from '../../styles/color';
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';



export const LogIn = ({ onPress = {}, children = "" }) => {


    const [userName, setUserName] = useState();
    const [password, setPassword] = useState();
    const ref_password = useRef();

    const checkCredentials = () => {
        if (userName == 'applauz' && password == '123456') {
            Alert.alert(
                "LogIn",
                "Success",
                [

                    { text: "OK", onPress: () => console.log("OK Pressed") }
                ],
                { cancelable: false }
            );
        } else {
            Alert.alert(
                "LogIn",
                "Failed",
                [

                    { text: "OK", onPress: () => console.log("OK Pressed") }
                ],
                { cancelable: false }
            );
        }
    }

    return (

        <View style={styles.container}>
            <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
            <View style={{ height: hp('30%'), backgroundColor: color.white }}>

                <Image style={styles.takeImage} source={require('../../assets/backgroungapp.jpg')} />

            </View>
            <View style={styles.mainContainer}>
                <View style={{ marginTop: hp('2%') }}>
                    <View style={{ marginHorizontal: wp('4%') }}>
                        <Text style={styles.loginText}>LogIn</Text>

                        <View style={{ marginTop: ('25%') }}>
                            <Input value={userName}
                                onSubmitEditing={() => ref_password.current.focus()}
                                returnKeyType={"next"}
                                placeholder='Name'
                                inputStyle={{ color: '#fff' }}
                                inputContainerStyle={styles.inputstyle}
                                // onFocus={() => setEnableShift(false)}
                                containerStyle={styles.textinput}
                                onChangeText={value => setUserName(value)}
                            />

                            <Input value={password}
                                ref={ref_password}
                                inputStyle={{ color: '#fff' }}
                                returnKeyType={"done"}
                                inputContainerStyle={styles.inputstyle}
                                //  onFocus={() => setEnableShift(false)}
                                containerStyle={styles.textinput}
                                onChangeText={value => setPassword(value)}
                                placeholder="Password" />
                        </View>



                        <View style={styles.buttonContainer}>

                            <TouchableWithoutFeedback onPress={() => checkCredentials()}>
                                <View style={{ marginHorizontal: wp('25%'), backgroundColor: color.green, paddingVertical: hp('1.4%'), flex: 1, alignItems: 'center', justifyContent: 'center', borderRadius: 10 }}>
                                    <Text style={{ color: color.white }}>Log In</Text>

                                </View>
                            </TouchableWithoutFeedback>
                        </View>

                    </View>

                </View>
            </View>


        </View >

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.white
    },
    takeImage: {
        width: undefined,
        height: undefined,
        flex: 1

    }, textinput: {
        height: 70,
        color: 'red'
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: hp('2%'),
        alignItems: 'center'
    },
    inputstyle: {
        height: 35,
        borderWidth: 1,
        borderRadius: 24,
        paddingLeft: 20,
        borderColor: 'orange',
        color: 'red'
    },
    loginText: {
        fontWeight: 'bold',
        fontSize: 18,
        color: 'orange',
        marginTop: ('2%'),
        marginLeft: wp('5%')
    },
    mainContainer: {
        backgroundColor: 'black',
        flex: 1,
        bottom: 24,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30
    }
});