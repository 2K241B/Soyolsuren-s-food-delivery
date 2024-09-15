'use server'

import MainSection from "@/components/MainSection";
import { Cards } from "@/components/Card";
import { Card1 } from "@/components/icon/CardsImage";

const HomePage = () => {
    return (
        <div>
            <MainSection/>

            <Cards
            imageSrc={ Card1 }
            discount={"20%"}
            />
        </div>
    )


}

export default HomePage;