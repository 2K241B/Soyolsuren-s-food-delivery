"use server"

import Image from 'next/image';


const styles = {
    image: "relative rounded-[16px]",
    discount: "absolute left-[197px] top-[16px] text-[18px] font-semibold py-1 px-4 border-[1px] rounded-[16px] border-bg-white"
}

export const Cards = ({ imageSrc, discount, }) => {
    return (
        <div className="flex flex-col gap-[14px]">
            <Image
            src={imageSrc}
            width={282}
            height={186}
            style={styles.image}
            />
            <h2 className={styles.discount}>{discount}</h2>


        </div>
    )
}