import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { useRouter } from "expo-router";

export default function Kilomate_Mate(){
    //พท.สี่เหลี่ยม = กว้าง * ยาว
    //     60   = 6 * 10
    //output    = input * input

    const router = useRouter()
    
    const [mate, setMate]=useState(0)
    const [kilomate,setKilomate]= useState(0)

    function Mate(){
        var result = kilomate * 1000
        setMate(result)
    }

    return (
        <View style={styles.box}>
            <Text style={styles.textTitle}>คำนวณกิโลเมตร เป็น เมตร</Text>
            {/* <Button title="ไปหน้า 2"/> */}

            <Text style={styles.textTitle}>
                Kilomate is {kilomate}
            </Text>

            <Text style={styles.textTitle}>
                Mate is {mate}
            </Text>

            <TextInput 
                style={styles.TextInput} 
                placeholder="กรอกจำนวณเป็นกิโลเมตร" 
                placeholderTextColor="white"
                value={kilomate.toString()}
                onChangeText={(K)=> setKilomate(Number(K))}
            />
        
            <Button title="คำนวณ" onPress={()=> Mate()}/>
            <Button title="กลับไปหน้าแรก" onPress={()=> router.navigate('./')}/>
        
        </View>
    )
}

const styles = StyleSheet.create({
    box:{
        flex: 1,
        backgroundColor:"black",
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
