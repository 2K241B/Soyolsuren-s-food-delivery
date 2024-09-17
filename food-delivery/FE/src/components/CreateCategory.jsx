import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Button } from "./ui/button";

const styles = {
  button:
    "w-fit text-[16px] font-semibold font-poppins text-white bg-[#393939] py-2 px-3 rounded-[8px]",
  text: "text-[16px] text-[#393939] font-semibold font-poppins",
};

export const CreateCategory = () => {
  return (
    <div className="flex flex-col w-[539px] rounded-[16px] ">
      <label className="p-6 text-[24px] font-semibold font-poppins flex justify-center border-b-[1px] border-gray-400">
        Create new category
      </label>
      <div className="flex flex-col p-[24px] font-normal gap-4 text-[14px]">
        <p className="font-normal text-[14px]">Category name</p>
        <Input
          className=" w-[515px] h-[59px] py-3"
          placeholder="Placeholder"
          required
        />
      </div>

      <div className="p-6 flex gap-[32px] border-t-[1px]  border-gray-400 justify-end">
        <button className={styles.text} type="reset">
          Clear
        </button>
        <Button className={styles.button} type="submit">
          Continue
        </Button>
      </div>
    </div>
  );
};
