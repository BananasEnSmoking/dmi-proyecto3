import React from "react";
import { ActivityIndicator } from "react-native";
import styled from "styled-components/native";

/* /////// //////// //////// VIEWS /////// //////// //////// */
export const StyledView = styled.View`
  width: ${({ width }) => width ?? "100%"};
  height: ${({ height }) => height ?? "100%"};
  margin-top: ${({ top }) => top ?? "50px"};
  margin-bottom: ${({ bottom }) => bottom ?? "0px"};
  flex: ${({ flex }) => flex ?? 1};
  justify-content: ${({ justify }) => justify ?? "center"};
  align-content: ${({ align }) => align ?? "center"};
  flex-direction: ${({ direction }) => direction ?? "column"};
  align-items: center;
`;

export const StyledKeyboardAvoidingView = styled.KeyboardAvoidingView`
    flex: 1;
    align-items: center;
    justify-content: flex-start;
    margin-top: ${({ top }) => top ?? "80px"};
`;

/* /////// //////// //////// BUTTONS /////// //////// //////// */
export const StyledPrimaryButton = styled.TouchableOpacity`
    background-color: ${({ bgColor }) => bgColor ?? "#698389"};
    width: ${({ size }) => size ?? "100%"};
    margin-top: ${({ top }) => top ?? "10"};
    color: ${({ color }) => color ?? "#ffffff"};
    padding: 12px;
    border-radius: 5px;
    align-items: center;
`;

export const StyledButton = ({
    onPress,
    color,
    bgColor,
    title,
    loading,
    size,
    top,
    disabled,
}) => (
    <StyledPrimaryButton
        onPress={ onPress }
        bgColor={ bgColor }
        size={ size }
        top={ top }
        disabled={ disabled }
    >
        <StyledButtonText color={color} disabled={disabled}>
            {loading ? <ActivityIndicator size="small" color="white" /> : title }
        </StyledButtonText>
    </StyledPrimaryButton>
);

export const StyledSecondaryButton = styled.TouchableOpacity`
    background-color: white;
    width: 100%;
    padding: 12px;
    border-radius: 10px;
    align-items: center;
`;

/* /////// //////// //////// INPUTS /////// //////// //////// */
export const StyledTextInput = styled.TextInput`
    background-color: white;
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 10px;
    padding-bottom: 10px;
    border-radius: 10px;
    margin-top: 5px;
    border: 0.5px solid grey;
    width: 100%;
`;

// /* /////// //////// //////// TEXTS /////// //////// //////// */
const StyledTextComponent = styled.Text`
  font-size: ${({ size }) => size ?? "16px"};
  margin-left: ${({ left }) => left ?? "0px"};
  font-weight: ${({ weight }) => weight ?? "300"};
  text-align: ${({ align }) => align ?? "left"};
  margin-top: ${({ top }) => top ?? "0px"};
  margin-bottom: ${({ bottom }) => bottom ?? "0px"};
  color: ${({ color }) => color ?? "#000000"};
  text-decoration-line: ${({ crossed }) => (crossed ? "line-through" : "none")};
  max-width: ${({ max }) => max ?? "200px"};
`;

export const StyledText = ({
  size,
  weight,
  color,
  crossed,
  children,
  left,
  align,
  top,
  bottom,
  max,
}) => {
  return (
    <StyledTextComponent
      size={size}
      weight={weight}
      color={color}
      left={left}
      crossed={crossed}
      align={align}
      top={top}
      bottom={bottom}
      max={max}
    >
      {children}
    </StyledTextComponent>
  );
};

export const StyledButtonText = styled.Text`
    color: white;
    font-weight: 700;
    font-size: 16px;
    text-align: center;
`;

export const StyledSecondaryButtonText = styled.Text`
    color: black;
    font-weight: 500;
    font-size: 14px;
    text-align: center;
`;


/* /////// //////// //////// IMAGE /////// //////// //////// */
export const StyledImage2 = styled.Image`
    width: 300px;
    height: 300px;
    margin-bottom: 20px;
    margin-top: 10px;
    border-radius: 3px;
`;

const StyledImageComponent = styled.Image`
  width: ${({ width }) => width ?? "300px"};
  height: ${({ height }) => height ?? "300px"};
  margin-bottom: ${({ bottom }) => bottom ?? "10px"};
  margin-left: ${({ left }) => left ?? "0"};
  border-radius: ${({ radius }) => radius ?? "0"};
`;

export const StyledImage = ({
  source,
  bottom,
  width,
  height,
  left,
  resizeMode,
  radius,
}) => {
  return (
    <StyledImageComponent
      width={width}
      height={height}
      bottom={bottom}
      left={left}
      source={source}
      resizeMode={resizeMode ?? "contain"}
      radius={radius}
    />
  );
};
