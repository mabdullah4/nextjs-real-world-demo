import * as React from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";

import FormInput from "../../components/Form/FormInput";
import { ILogin } from "../../types/userType";

export interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
    const {} = useForm<ILogin>();

    return (
        <div className="auth-page">
            <div className="container page">
                <div className="row">
                    <div className="col-md-6 offset-md-3 col-xs-12">
                        <h1 className="text-xs-center">Login</h1>
                        <p className="text-xs-center">
                            <Link href="/auth/register" prefetch>
                                <a>Don't have an account?</a>
                            </Link>
                        </p>

                        <form>
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

export default Login;
