"use client";

import { useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { EyeIcon, EyeOff } from "lucide-react";


const buttonStyles = {
    active: "rounded-[4px] bg-[#18BA51] w-full",
    notActive: "rounded-[4px] bg-slate-500 w-full",
  };

export const ForgotNewPass = () => {
    const [text, setText] = useState("");
    const handleOnChange = (e) => {
    setText(e.target.value);
  };
    const formRef = useRef(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(formRef.current[0].value);
    }
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisibility = () => {
      setPasswordShown(passwordShown ? false : true);
    };

    return (
        <div className="w-[448px] rounded-[16px] p-[32px] flex flex-col gap-[48px] items-center">
      <div>
        <h1 className="font-bold text-center text-[28px]">Шинэ нууц үг зохиох </h1>
      </div>
        
      <form ref={formRef} className="flex flex-col gap-2 w-full">
        <div className="relative">
          <p className="font-normal text-[14px]">Нууц үг</p>
          <Input
            placeholder="********"
            type={passwordShown ? "text" : "password"}
            onChange={handleOnChange}
            required
          ></Input>
          <div
            className="absolute right-4 top-8"
            onClick={togglePasswordVisibility}
          >
            {passwordShown ? <EyeIcon /> : <EyeOff />}
          </div>
        </div>
        <div className="relative mt-6">
          <p className="font-normal text-[14px]">Нууц үг давтах</p>
          <Input
            placeholder="********"
            type={passwordShown ? "text" : "password"}
            onChange={handleOnChange}
            required
          ></Input>
          <div
            className="absolute right-4 top-8"
            onClick={togglePasswordVisibility}
          >
            {passwordShown ? <EyeIcon /> : <EyeOff />}
          </div>
        </div>
      </form>
      <div className="w-full flex flex-col gap-[32px] items-center">
        <Button
          className={text !== "" ? buttonStyles.active : buttonStyles.notActive}
          type="submit"
          onClick={handleSubmit}
        >
          Үргэлжлүүлэх
        </Button>
        </div>
    </div>

    )
}

