"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { EyeIcon, EyeOff } from "lucide-react";
import { Input} from "@/components/ui/input";

const buttonStyles = {
  active: "rounded-[4px] bg-[#18BA51] w-full",
  notActive: "rounded-[4px] bg-slate-500 w-full"
}

const LoginPage = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const [text, setText ] = useState("")
  const handleOnChange = (e) => {
    setText (e.target.value)
  }

  return (
    <div className="w-[448px] rounded-[16px] p-[32px] flex flex-col gap-[48px] items-center">
      
        <div>
          <h1 className="font-bold text-center text-[28px]">Нэвтрэх</h1>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <div>
            <p className="font-normal text-[14px]">Имэйл</p>
            <Input placeholder="Имэйл хаягаа оруулна уу"  type="email" onChange={handleOnChange} required ></Input>
          </div>
          <div className="relative">
            <p className="font-normal text-[14px]">Нууц үг</p>
            <Input placeholder="Нууц үг"  type={ passwordShown ? "text" : "password"} onChange={handleOnChange} required ></Input>
            <div className="absolute right-4 top-8" onClick={togglePasswordVisibility} >{ passwordShown ? <EyeIcon/> : <EyeOff/>}
              
            </div>
            <p className="font-normal text-[14px] mt-2 flex justify-end">Нууц үг сэргээх</p>
          </div>  
        </div>
        <div className="w-full flex flex-col gap-[32px] items-center">
          <Button className={text !== "" ? buttonStyles.active : buttonStyles.notActive} type="submit">Нэвтрэх
        </Button> 
          <p className="font-normal text-[14px]">Эсвэл</p>
          <Button className="rounded-[4px] border-green-500 border-solid border-[1px] bg-white text-black w-full ">Бүртгүүлэх
        </Button> 

        </div>

      
    </div>
  );
};

export default LoginPage;


