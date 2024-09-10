import { forwardRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { EyeIcon, EyeOff } from "lucide-react";

const buttonStyles = {
  active: "rounded-[4px] bg-[#18BA51] w-full",
  notActive: "rounded-[4px] bg-slate-500 w-full",
};

export const CustomForm = forwardRef(({ onSubmit, inputs, btnText }, ref) => {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(ref.current[0].value);
  };

  const [text, setText] = useState("");
  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  return (
    <form className="flex flex-col gap-4" ref={ref} onSubmit={onSubmit}>
      {inputs.map(({ placeholder, name, type }) => {
        console.log(type);
        
        return (
          <div className="relative">
            <p className="font-normal text-[14px]">{name}</p>
            <Input placeholder={placeholder} type={passwordShown ? "text" : "password"} onChange={handleOnChange} required />
            <div
              className="absolute right-4 top-8"
              onClick={togglePasswordVisibility}
            >
              {type == "password" &&  (
                passwordShown ? <EyeIcon /> : <EyeOff/>
              )}
            </div>
          </div>
        );
      })}
      <div className="mt-11 mb-6 flex gap-2">
        <input className="w-[24px]" type="checkbox" /> Үйлчилгээний нөхцөл зөвшөөрөх
      </div>
      <Button
        className={text !== "" ? buttonStyles.active : buttonStyles.notActive}
        type="submit"
        onClick={handleSubmit}
      >
        {btnText}
      </Button>
    </form>
  );
});
