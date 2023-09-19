import React from "react";
import {
  TouchableOpacity,
  TextInput,
  View,
  Text,
  Alert,
  Image,
} from "react-native";
import { Formik, useField } from "formik";
import { StyleSheet } from "react-native-web";

const initialValues = {
  DNI: "",
  password: "",
};

const FormikInputValue = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  return (
    <TextInput
      value={field.value}
      onChangeText={(value) => helpers.setValue(value)}
      {...props}
    />
  );
};

const LoginScreen = () => {
  return (
    <View>
      <Text style={style.textTitle}>Mutual 12 de Septiembre</Text>

      <Text style={style.subTitle}>Trabajando por el bienestar general</Text>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => {
          return (
            <View style={style.container}>
              <View style={style.containerForm}>
                <Text style={style.titleInput}>Iniciar Sesion</Text>

                <FormikInputValue
                  name="DNI"
                  style={style.textInput}
                  placeholder="DNI..."
                />
                <FormikInputValue
                  name="password"
                  style={style.textInput}
                  placeholder="Contraseña..."
                  secureTextEntry
                />
                <TouchableOpacity style={style.buttom} onPress={handleSubmit}>
                  <Text style={style.textButtom}>Iniciar Sesion</Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
      </Formik>
    </View>
  );
};

export default LoginScreen;

const style = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  buttom: {
    justifyContent: "center",
    alignItems: "center",
    width: 170,
    height: 30,
    borderRadius: 10,
    backgroundColor: "#014083",
    color: "#fff",
    padding: 15,
    marginHorizontal: 15,
    marginVertical: 15,
  },
  textButtom: {
    color: "#fff",
    fontWeight: "bold",
  },
  textTitle: {
    backgroundColor: "#01caff",
    paddingHorizontal: 10,
    paddingVertical: 5,
    textAlign: "center",
    color: "#fff",
    fontSize: 25,
    fontWeight: "bold",
  },
  subTitle: {
    backgroundColor: "#005eb0",
    fontWeight: "bold",
    color: "#fff",
    paddingVertical: 5,
  },
  containerForm: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 8,
    marginVertical: 150,
    width: 250,
    // boxShadow:2 4 10 "red",
  },
  titleInput: {
    marginVertical: 10,
    fontSize: 25,
    fontWeight: "bold",
    color: "#565656",
  },
  textInput: {
    width: 200,
    marginVertical: 5,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#849d9a",
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginVertical: 20,
  },
});
