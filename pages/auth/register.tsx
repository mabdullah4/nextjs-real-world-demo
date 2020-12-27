import * as React from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";

import FormInput from "../../components/Form/FormInput";
import ErrorMessage from "../../components/Form/ErrorMessage";

export interface RegisterProps {}

export type RegisterForm = {
    email: string;
    password: string;
    name: string;
};

const Register: React.FC<RegisterProps> = () => {
    const { handleSubmit, errors } = useForm<RegisterForm>();

    const onRegister = () => {};

    return (
        <div className="auth-page">
            <div className="container page">
                <div className="row">
                    <div className="col-md-6 offset-md-3 col-xs-12">
                        <h1 className="text-xs-center">Sign up</h1>
                        <p className="text-xs-center">
                            <Link href="/auth">
                                <a>Have an account?</a>
                            </Link>
                        </p>
                        <ErrorMessage errors={errors} />

                        <form onSubmit={handleSubmit(onRegister)}>
                            <FormInput placeholder="Your Name" />
                            <FormInput placeholder="Email" type="email" />
                            <FormInput placeholder="Password" type="password" />

                            <button className="btn btn-lg btn-primary pull-xs-right">Sign up</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
