import * as React from "react";

export interface FormInputProps
    extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {}

const FormInput: React.FC<FormInputProps> = (props) => {
    return (
        <fieldset className="form-group">
            <input className="form-control form-control-lg" type="text" {...props} />
        </fieldset>
    );
};

export default FormInput;
