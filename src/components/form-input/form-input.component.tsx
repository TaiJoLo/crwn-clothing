import React from "react";

import { InputHTMLAttributes, FC } from "react";

import { FormInputLable, Input, Group } from "./form-input.styles";

type FormInputProps = { label: string } & InputHTMLAttributes<HTMLInputElement>;

const FormInput: FC<FormInputProps> = ({ label, ...otherInputs }) => {
  return (
    <Group>
      <Input className="form-input" {...otherInputs} />
      {label && (
        <FormInputLable
          shrink={Boolean(
            otherInputs.value &&
              typeof otherInputs.value === "string" &&
              otherInputs.value.length
          )}
        >
          {label}
        </FormInputLable>
      )}
    </Group>
  );
};

export default FormInput;
