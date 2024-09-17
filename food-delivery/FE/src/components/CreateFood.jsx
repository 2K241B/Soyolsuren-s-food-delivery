{/* <CreateFood inputs={CREATE_FOOD_INPUTS}/> geed duud */}

import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Button } from "./ui/button";

const styles = {
  button:
    "w-fit text-[16px] font-semibold font-poppins text-white bg-[#393939] py-2 px-3 rounded-[8px]",
  text: "text-[16px] text-[#393939] font-semibold font-poppins",
};

export const CreateFood = ({ inputs }) => {
  return (
    <form className="flex flex-col w-[539px] rounded-[16px] ">
      <label className="p-6 text-[24px] font-semibold font-poppins flex justify-center border-b-[1px] border-gray-400">
        Create food
      </label>
      <div className="p-6 flex flex-col gap-4">
        {inputs.map(({ placeholder, name }) => {
          return (
            <div className="relative">
              <p className="font-normal text-[14px]">{name}</p>
              <Input
                className=" w-[515px] h-[59px] py-3"
                placeholder={placeholder}
                required
              />
            </div>
          );
        })}
        <div className="flex flex-col font-normal gap-4 text-[14px]">
          <div className="flex gap-2">
            <Switch />
            <p className="font-normal text-[14px]">Хямдралтай эсэх</p>
          </div>
          <Input
            className=" w-[515px] h-[59px] py-3"
            placeholder="Placeholder"
            required
          />
        </div>
        <p className="font-normal text-[14px]">Хоолны зураг</p>
        <div className="flex flex-col w-[268px] bg-gray-100 h-[108px] gap-2 p-2 border-[2px] justify-center items-center border-dashed rounded-[8px]">
          <h2 className={styles.text}>Add image for the food</h2>
          <button className={styles.button}>Add image</button>
        </div>
      </div>
      <div className="p-6 flex gap-[32px] border-t-[1px]  border-gray-400 justify-end">
        <button className={styles.text} type="reset">
          Clear
        </button>
        <Button className={styles.button} type="submit">
          Continue
        </Button>
      </div>
    </form>
  );
};
