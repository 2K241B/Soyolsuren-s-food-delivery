import { MoreVerticalIcon, Plus, PlusIcon } from "lucide-react";


const styles = {
    button: "flex justify-center gap-2 text-[#5E6166] py-2 px-4 w-full border-[1px] rounded-[8px] border-grey-400",
    selected: "flex justify-between bg-[#18BA51] text-white py-2 px-4 w-full border-[1px] rounded-[8px] border-grey-400",
    notSelected: "flex justify-between py-2 px-4 w-full border-[1px] rounded-[8px] border-grey-400"
}
export const CategoryMenu = () => {
    return (
        <div className="flex pr-[120px] pl-[120px]">
            <div className=" py-[26px] pr-[24px] w-[402px] gap-10 flex flex-col">
                <label className="text-[22px] font-bold font-poppins">Food menu</label>
                <div className="flex flex-col gap-[26px]">
                    <div className={styles.selected}>
                        <p className="text-[18px] font-medium">Breakfast</p>
                        <MoreVerticalIcon />
                    </div>
                    <div className={styles.button}>
                        <Plus />
                        <p className="text-[18px] font-medium">Create new category</p>
                    </div>
                </div>
            </div>
            <div className="py-[24px] pl-[32px] w-full">
                <div className="py-4 flex justify-between">
                    <label className="text-[22px] font-bold font-poppins">Breakfast</label>
                    <button className="bg-[#18BA51] py-2 px-4 text-[16px] rounded-[4px] text-white">Add new food</button>
                </div>
                <div className="flex flex-col items-center mt-[32px] gap-[30px]">
                    <div className="w-[80px] h-[80px]"><PlusIcon/></div>
                    <p className="text-[16px] text-[#808080]">Уучлаарай, Таны меню хоосон байна.</p>

                </div>
            </div>
        </div>

    )
}