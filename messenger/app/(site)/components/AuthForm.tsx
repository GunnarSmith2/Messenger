'use client';

import Button from "@/app/components/Buttons/button";
import Input from "@/app/components/Inputs/input";
import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import AuthSocial from "./AuthSocial";

//ICONS
import { BsGithub, BsGoogle, BsApple } from 'react-icons/bs';

// types
type Variant = 'LOGIN' | 'REGISTER';

const AuthForm = () => {
    const [variant, setVariant] = useState<Variant>('LOGIN');
    const [isLoading, setIsLoading] = useState(false);

    const toggleVariant = useCallback(() => {
        if (variant === 'LOGIN') {
            setVariant('REGISTER');
        } else {
            setVariant('LOGIN');
        }
    }, [variant])

    const {
      register,
      handleSubmit,
      formState: {
        errors
       } 
    } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            email: '',
            password: ''
        }
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);

        if (variant === 'REGISTER') {
            // AXIOS REGISTER
        }

        if (variant === 'LOGIN') {
            // NEXT AUTH LOGIN
        }
    }


    const socialAction = (action: string) => {
        setIsLoading(true);

        // nextAuth social signin
    }

    return (
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
                {/* LOGIN FORM */}
                <form
                    className="space-y-6"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    {variant === 'REGISTER' && (
                        <Input id="name" label="Name" register={register} errors={errors} />
                    )}
                    <Input id="email" label="Email" type="email" register={register} errors={errors} />
                    <Input id="password" label="Password" type="password" register={register} errors={errors} />
                
                    <div>
                        <Button
                            disabled={isLoading}
                            fullwidth
                            type="submit"
                        >{variant === 'LOGIN' ? 'Sign In' : 'Register'}</Button>
                    </div>
                </form>

                {/* DIVIDER */}
                <div className="mt-6">
                        <div className="relative">
                            <div className=" absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-300" />
                            </div>
                            <div className=" relative flex justify-center text-sm">
                                <span className="bg-white px-2 text-gray-500">
                                    Or Continue with
                                </span>
                            </div>
                        </div>

                        {/* SOCIAL AUTH */}
                        <div className="mt-6 flex gap-2">
                            <AuthSocial 
                               icon={BsGithub}
                               onClick={() => socialAction('github')}
                            />
                            <AuthSocial 
                               icon={BsGoogle}
                               onClick={() => socialAction('google')}
                            />
                            <AuthSocial 
                               icon={BsApple}
                               onClick={() => socialAction('apple')}
                            />
                        </div>
                </div>

                <div className=" flex gap-2 justify-center text-sm mt-6 px-2 text-gray-200">
                    <div>
                        {variant === 'LOGIN' ? 'New to Messenger?' : "Already have an Account?"}
                    </div>
                    <div
                        onClick={toggleVariant}
                        className=" underline cursor-pointer"
                    >
                        {variant === 'LOGIN' ? 'Create an Account' : 'Login'}
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default AuthForm;