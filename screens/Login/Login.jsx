import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useRef, useState } from "react";
import { StyledKeyboardAvoidingView, StyledView, StyledImage, StyledTextInput, StyledSecondaryButton, StyledButtonText, StyledPrimaryButton, StyledButton, StyledSecondaryButtonText, StyledText } from "../../styles/StyledComponents";
import logo from "../../media/utags.png";
import { Text, View } from "react-native";

const LoginPage = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  const handleLogin = () => {
    console.log("login");
    navigation.replace("Home");
  };

  return (
      <StyledKeyboardAvoidingView>
        <StyledView>
          <StyledImage 
            source={ logo } 
            width={ 310 } 
            height={ 225 } 
            bottom={ 10 }
          />
          <StyledText
            max="300px"
            align="center"
            size="16px"
            weight="600"
            top={0}
            bottom={10}
          >
            Hey! Login and enjoy!
          </StyledText>
          <StyledTextInput 
            placeholder="Email"
            value={ email }
            onChangeText={(text) => setEmail(text)}
          />
          <StyledTextInput
            placeholder="Password"
            value={ password }
            onChangeText={(text) => setPassword(text)}
            secureTextEntry
          />
          <StyledButton title="Login" onPress={ handleLogin }/>
          <StyledSecondaryButton 
            onPress={() => navigation.replace("Signup")}
          > 
            <StyledSecondaryButtonText>Don't have an account? Let's create it!</StyledSecondaryButtonText>
          </StyledSecondaryButton>
        </StyledView>
      </StyledKeyboardAvoidingView>
  );
};
export default LoginPage;
