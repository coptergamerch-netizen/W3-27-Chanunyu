import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { useRouter } from "expo-router";

export default function Rectangle(){
    //พท.สี่เหลี่ยม = กว้าง * ยาว
    //     60   = 6 * 10
    //output    = input * input

    const router = useRouter()

    const [area,setArea]= useState(0)
    const [width , setWidth]=useState(0)
    const [length , setLength]= useState(0)

    function rectangleCal(){
        var result = width * length
        setArea(result)
    }

    return (
        <View style={styles.box}>
            <Text style={styles.textTitle}>คำนวณพื้นที่สี่เหลี่ยม</Text>
            {/* <Button title="ไปหน้า 2"/> */}

            <Text>
                Width is {width}
            </Text>

            <Text>
                Length is {length}
            </Text>

            <Text>
                Area is {area}
            </Text>

            <TextInput 
                style={styles.TextInput} 
                placeholder="กรอกความกว้างสิอีโj" 
                placeholderTextColor="gray"
                value={width.toString()}
                onChangeText={(w)=> setWidth(Number(w))}
            />

            <TextInput 
                style={styles.TextInput}
                placeholder="กรอกความยาวสิอีหน้าเหี้ย" 
                placeholderTextColor="gray"
                value={length.toString()}
                onChangeText={(l)=> setLength(Number(l))}
            />
        
            <Button title="คำนวณ" onPress={()=> rectangleCal()}/>
            <Button title="หน้าถัดไป" onPress={()=> router.navigate('/kilomate_mate')}/>
        
        </View>
    )
}

const styles = StyleSheet.create({
    box:{
        flex: 1,
        backgroundColor:"lightgray",
        justifyContent:"center",
        alignItems:"center",
        gap:20
    },
    textTitle:{
        fontSize:22,
        fontWeight:700,
        color:"white"
    },
    TextInput:{
        borderWidth:1,
        borderColor:'white',
        width:'80%',
        borderRadius: 20
    }
})
