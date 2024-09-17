import { CreateFood } from "@/components/CreateFood";
import { Logo } from "@/components/icon/Logo";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { LucideShoppingBasket } from "lucide-react";
import { CREATE_FOOD_INPUTS } from "@/constants";
import { CreateCategory } from "@/components/CreateCategory";

const menuStyles = {
  default: "text-[14px] font-bold py-2 px-6 leading-[16px] text-black",
  active: "",
  lowercase: "font-bold text-[14px]",
};

const Navbar = () => {
  return (
    <div>
    {/* <div className="flex w-full items-center justify-between py-2 px-6 h-[57px]  bg-white">
      <div className="flex justify-center ">
        <Logo />
        <div>
          <p className={menuStyles.default}>НҮҮР</p>
        </div>
      </div>
      <div className="flex gap-2">
        <div className="relative">
          <div className="absolute w-[18px] h-[18px]">
            <MagnifyingGlassIcon />
          </div>
          <input
            className="w-[260px] py-2 px-4 border-[2px] border-black rounded-[8px]"
            placeholder="Хайх"
            type="seach"
          ></input>
        </div>
        <div className="flex gap-2 py-2 px-6">
          <LucideShoppingBasket />
          <p className={menuStyles.lowercase}>Сагс</p>
        </div>
      </div>
    </div> */}
    <CreateCategory/>
    </div>
  );
};

export default Navbar;
