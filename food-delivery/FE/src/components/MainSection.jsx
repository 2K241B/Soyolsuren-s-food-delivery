import { BigBowl, SmallBowl } from "./icon/BigBowl";
import { Line } from "./icon/Line";
import { Pattern } from "./icon/Pattern";

const MainSection = () => {
    return (
        <div className="relative w-full h-[788px] bg-[#18BA51] font-poppins">
            <div className="absolute"><Pattern/></div>
            
            <div className="absolute w-[384px] flex flex-col gap-[23px] text-white top-[277px] left-[120px]">
                <h1 className="text-[55px] font-bold leading-[90%]">Pinecone Food delivery</h1>
                <Line/>
                <p className="text-[22px] ">Horem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="absolute">
                <div className="absolute w-[443px] h-[438px] top-[170px] left-[732px]"><BigBowl/></div>
                <div className="absolute w-[313px] h-[313px] top-[283px] left-[1007px]"><SmallBowl/></div>
            </div>
        </div>
    )


}

export default MainSection;