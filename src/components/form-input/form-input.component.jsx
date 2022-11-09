import { FormInputLable, Input, Group } from "./form-input.styles";

const FormInput = ({ label, ...otherInputs }) => {
  return (
    <Group>
      <Input className="form-input" {...otherInputs} />
      {label && (
        <FormInputLable shrink={otherInputs.value.length}>
          {label}
        </FormInputLable>
      )}
    </Group>
  );
};

export default FormInput;
