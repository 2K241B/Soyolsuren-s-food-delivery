import Image from "next/image";

const styles = {
  image: "relative h-[186px] ",
  discount:
    "absolute left-[197px] top-[16px] text-[18px] font-semibold py-1 px-4 border-[1px] bg-[#18BA51] rounded-[16px] border-bg-white",
  title: "text-[18px] font-semibold",
  price: "text-[18px] font-semibold text-[#18BA51]",
  discountedPrice: "text-[16px] line-through"
};

export const Cards = ({ imageSrc, discount, title, price, discountedPrice }) => {
  return (
    <div className="mr-[120px]  flex flex-col w-fit gap-[14px]">
      <div className="relative ">
        <div className=" w-[282px] h-[186px] ">
          <Image
            className="rounded-[16px] "
            src={imageSrc}
            layout="fill"
            objectFit="cover"
            // style={styles.image}
          />
        </div>
        <h2 className={styles.discount}>{discount}</h2>
      </div>
      <div className="flex flex-col">
        <h2 className={styles.title}>{title}</h2>
        <div className="flex gap-4 items-center">
            <h2 className={styles.price}>{price}₮</h2>
            <h2 className={styles.discountedPrice}>{discountedPrice}₮</h2>
        </div>
      </div>
    </div>
  );
};
