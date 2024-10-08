"use client";

import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { EyeIcon, EyeOff } from "lucide-react";
import { Input } from "@/components/ui/input";
import { axiosInstance } from "@/lib/axios";
import { useRouter } from "next/navigation";
import { SIGNUP_INPUTS } from "@/constants";
import { CustomForm } from "@/components/CustomForm";


const buttonStyles = {
  active: "rounded-[4px] bg-[#18BA51] w-full",
  notActive: "rounded-[4px] bg-slate-500 w-full",
};

const SignUpPage = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const [text, setText] = useState("");
  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  const formRef = useRef(null);
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formRef.current[0].value);

    const response = await axiosInstance.post("/api/login", {
      email: formRef.current[0].value,
      password: formRef.current[1].value,
    });
    if (response.status === 200) {
      router.push('/');
    } else {
      
      console.log("Email or Password Wrong");
    }
  };

  //   const handleSubmit = async (e) => {
  //     e.preventDefault(); //log darahaar neg l udaa hevledegiig n boliulaad darah bolgond hevlej bolgoj bga
  //     console.log(formRef.current, 'ref')
  //     const formData = new FormData(formRef.current);
  //     const { email, password } = Object.fromEntries(formData);
  //     console.log(email,password)

  //     try {
  //       const response = await axiosInstance.post('/user/login', {email: email, password: password });
  //       console.log(response.data)
  //       localStorage.setItem('user', JSON.stringify(response.data.user[0]))

  //   }   catch (error) {
  //       console.log(error);
  //   }
  // };

  return (
    <div className="w-[448px] rounded-[16px] p-[32px] flex flex-col gap-[48px] items-center">
      <div>
        <h1 className="font-bold text-center text-[28px]">Бүртгүүлэх</h1>
      </div>
      <form className="flex flex-col gap-2 w-full">
      <CustomForm
                        ref={formRef}
                        onSubmit={handleSubmit}
                        inputs={SIGNUP_INPUTS}
                        btnText="Бүртгүүлэх"
                    />
       
      </form>
    
    </div>
  );
};

export default SignUpPage;
