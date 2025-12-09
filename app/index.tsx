import { useRouter } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App(){

    const router = useRouter()

    return (
        <View style={styles.box}>
            <Text style={styles.textTitle}>Home</Text>
            <Button title="ไปหน้า 2" onPress={()=> router.navigate('/rectangle')}/>
        </View>
    )
}

const styles = StyleSheet.create({
    box:{
        flex: 1,
        backgroundColor:"black",
        justifyContent:"center",
        alignItems:"center"
    },
    textTitle:{
        fontSize:22,
        fontWeight:700,
        color:"white"
    }
})