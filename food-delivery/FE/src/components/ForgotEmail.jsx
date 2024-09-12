"use client";

import { useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";


const buttonStyles = {
    active: "rounded-[4px] bg-[#18BA51] w-full",
    notActive: "rounded-[4px] bg-slate-500 w-full",
  };

export const ForgotEmail = () => {
    const [text, setText] = useState("");
    const handleOnChange = (e) => {
    setText(e.target.value);
  };
    const formRef = useRef(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(formRef.current[0].value);
    }
    return (
        <div className="w-[448px] rounded-[16px] p-[32px] flex flex-col gap-[48px] items-center">
      <div>
        <h1 className="font-bold text-center text-[28px]">Нууц үг сэргээх</h1>
      </div>
      <form ref={formRef} className="flex flex-col gap-2 w-full">
        <div>
          <p className="font-normal text-[14px]">Имэйл</p>
          <Input
            placeholder="Имэйл хаягаа оруулна уу"
            type="email"
            onChange={handleOnChange}
            required
          ></Input>
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

