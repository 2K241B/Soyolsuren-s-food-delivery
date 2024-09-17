
import Features from "@/components/Features";
import MainSection from "@/components/MainSection";
import { Cards } from "@/components/Card";
import  Card1  from "@/assets/Card1.png";

const HomePage = () => {
    return (
        <div>
            <MainSection/>

            <Features/>

            <Cards
            imageSrc={ Card1 }
            discount={"20%"}
            title={"Өглөөний хоол"}
            price={14800}
            discountedPrice={16800}
            />

        </div>
    )


}

export default HomePage;