
import Image from 'next/image';


const styles = {
    image: "relative h-[186px] rounded-[16px]",
    discount: "absolute left-[197px] top-[16px] text-[18px] font-semibold py-1 px-4 border-[1px] bg-[#18BA51] rounded-[16px] border-bg-white",
    title: "text-[18px] font-semibold",
    price: "text-[18px] font-semibold text-[#18BA51]"
}

export const Cards = ({ imageSrc, discount, title, price }) => {
    return (
        <div className="mr-[120px] flex flex-col gap-[14px]">
            <div className='relative'>
                <Image
                src={imageSrc}
                width={282}
                height={186}
                style={styles.image}
                />
                <h2 className={styles.discount}>{discount}</h2>
            </div>
            <div className='flex flex-col'>
                <h2 className={styles.title}>{title}</h2>
                <h2 className={styles.price}>{price}₮</h2>
            </div>



        </div>
    )
}