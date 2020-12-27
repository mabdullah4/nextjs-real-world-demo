import * as React from "react";
import { DeepMap, FieldError } from "react-hook-form";

export interface ErrorMessageProps {
    errors: DeepMap<any, FieldError>;
}

const ErrorMessage: React.SFC<ErrorMessageProps> = ({ errors }) => {
    return (
        <ul className="error-messages">
            {Object.values(errors).map((error, index) => (
                <li key={index}>{error?.message}</li>
            ))}
        </ul>
    );
};

export default ErrorMessage;
