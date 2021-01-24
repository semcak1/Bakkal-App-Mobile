import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Alert } from "react-native";


const swipeToDeleteCustomer = (item, action) => {
return(dispatch)=>{
// const  dispatch = useDispatch()
Alert.alert(
    "SİL",
    ` ${item.name} siliniyor.`,
    [
      {
        text: "İptal",
        onPress: () => console.log("Canceled pres"),
        style: "cancel",
      },
      {
        text: "Sil",
        onPress: () => {
          dispatch(action);
        
          // dispatch(deleteCustomerById(item.id));
        },
        style: "destructive",
      },
    ],
    {
      cancelable: false,
    }
  );
}

};

export { swipeToDeleteCustomer };
