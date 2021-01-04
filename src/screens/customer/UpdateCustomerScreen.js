import React,{useEffect} from "react";

import CustomerInfoForm from "../../component/CustomerInfoForm";
import { updateCustomerById } from "../../store/middleware/middleware";
import { useDispatch } from "react-redux";

const UpdateCustomerScreen = ({ navigation, route }) => {
  const customerData = route.params;
  const {customerId} = customerData;
  
  const dispatch = useDispatch();
  const dispatchToUpdateCustomer = (data) => {
    dispatch(updateCustomerById(data, customerId));
  };

  // useEffect(() => {
  //   dispatchToUpdateCustomer(data)
  //   // return () => {
      
  //   // }
  // }, [dispatch])

  console.log(customerData.name);
  return (
    <CustomerInfoForm
      buttonTitle="Güncelle"
      onButtonClick={dispatchToUpdateCustomer}
      customerData={customerData}
      navigation={navigation}
    />
  );
};

export default UpdateCustomerScreen;
