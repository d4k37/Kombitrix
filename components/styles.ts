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
   
    },
    title:{
        flex: 1,
        color: "white",
        fontSize: 30,
        textAlign: "center",
      
    },

    content:{
        width: 190,
        height: 190,
        
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius:8,
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 20,

    },
    content2:{
        width: 190,
        height: 190,
        borderColor: "blue",
        borderStyle: 'solid',
        borderWidth: 5,
        borderRadius:8,
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 20,

    },

    check:{
        width:10,
        height:10,
        backgroundColor: "green",
    
        position: "absolute",
       
        
        borderRadius: 3,
         borderColor: "red",
        borderStyle: 'solid',
        borderWidth: 5,
    },
    checked:{
        width:10,
        height:10,
        backgroundColor: "blue",
       
        position: "absolute",      
        borderColor: "red",
        borderStyle: 'solid',
        borderWidth: 5,
    }
})


