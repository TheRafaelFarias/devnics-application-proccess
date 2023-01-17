import React from "react";
import { Control, Controller, ValidationRule } from "react-hook-form";
import {
  InputComponent,
  InputComponentContainer,
  InputContainer,
  InputIconWrapper,
  InputPlaceholder,
  InputTextsContainer,
} from "./styles";

type InputProps = {
  inputKey: string;
  placeholder: string;
  control: Control<any, any>;
  isRequired?: boolean;
  Icon?: JSX.Element;
  patternConfig?: {
    pattern: ValidationRule<RegExp>;
    errorMessage: string;
  };
} & React.InputHTMLAttributes<HTMLInputElement>;

const InputErrorMessages = {
  required: "This field is required",
  pattern: "The informed value isn't a value email",
};

const Input: React.FC<InputProps> = (props) => {
  return (
    <Controller
      name={props.inputKey}
      control={props.control}
      rules={{
        required: props.isRequired ?? false,
        pattern: props.patternConfig?.pattern,
      }}
      render={({ field: { onChange, ref }, formState: { errors } }) => {
        const inputProps = {
          ...props,
          placeholder: undefined,
          control: undefined,
        };

        const fieldError = errors[props.inputKey];

        return (
          <InputContainer
            onChange={onChange}
            ref={ref}
            hasError={Boolean(fieldError)}
            style={{
              zIndex: props.style?.zIndex ?? 0,
            }}
          >
            <InputTextsContainer>
              <InputPlaceholder>{props.placeholder}:</InputPlaceholder>
              <InputPlaceholder>
                {fieldError?.type === "pattern"
                  ? props.patternConfig?.errorMessage
                  : // @ts-ignore
                    InputErrorMessages[fieldError?.type]}
              </InputPlaceholder>
            </InputTextsContainer>
            <InputComponentContainer>
              <InputComponent {...inputProps} />
              {props.Icon && <InputIconWrapper>{props.Icon}</InputIconWrapper>}
            </InputComponentContainer>
          </InputContainer>
        );
      }}
    />
  );
};

export default Input;
