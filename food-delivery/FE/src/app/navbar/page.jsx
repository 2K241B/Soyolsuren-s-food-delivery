
import { Logo } from "@/components/ui/icon/Logo";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { LucideShoppingBasket, User2Icon } from "lucide-react";


const menuStyles = {
  default: "text-[14px] font-bold py-2 px-6 leading-[16px] text-black",
  active: "text-[14px] text-[#18BA51] font-bold py-2 px-6 leading-[16px] text-black",
  lowercase: "font-bold text-[14px]",
};

const Navbar = () => {
  return (
    <div className="flex w-full items-center justify-between py-2 px-6 h-[57px]  bg-white">
      <div className="flex items-center gap-[24px] justify-center ">
        <Logo />
        <div className="flex gap-2">
          <p className={menuStyles.default}>НҮҮР</p>
          <p className={menuStyles.default}>ХООЛНЫ ЦЭС</p>
          <p className={menuStyles.default}>ХҮРГЭЛТИЙН БҮС</p>
        </div>
      </div>
      <div className="flex gap-2 items-center">
        <div className="relative">
          <div className="absolute w-[18px] h-[18px]">
            <MagnifyingGlassIcon />
          </div>
          <input
            className="w-[260px] py-2 px-4 border-[2px] border-black rounded-[8px]"
            placeholder="Хайх"
            type="search"
          ></input>
        </div>
        <div className="flex gap-2 py-2 px-6">
          <LucideShoppingBasket />
          <p className={menuStyles.lowercase}>Сагс</p>
        </div>
        <User2Icon />
          <p className={menuStyles.lowercase}>Нэвтрэх</p>
        </div>
      </div>
   
  
  );
};

export default Navbar;
