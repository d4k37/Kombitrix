import {StyleSheet} from 'react-native'


export const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: 190,
       
       
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
       
    },
    iconWrapper:{
      
       
    },
    icon:{
        width: 24,
        height: 18,
    },
    title:{
        flex: 1,
      
        fontSize: 30,
        textAlign: "center",
      
    },

    content:{
        width: 190,
        height: 190,
        
        borderRadius:8,
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 20,

    },

    check:{
        width:10,
        height:10,
        backgroundColor: "green",
        top: 7,
        right: 7,
        position: "absolute",
        borderColor: "orange",
        borderWidth: 1,
        borderRadius: 3,
    },
    checked:{
        width:10,
        height:10,
        backgroundColor: "blue",
        top: 7,
        right: 7,
        position: "absolute",      
        borderRadius: 3,
    }
})


