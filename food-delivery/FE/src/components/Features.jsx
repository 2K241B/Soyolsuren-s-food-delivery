import { FEATURES } from "@/constants";

const Features = () => {
  return (
    <div className="flex gap-[47px] m-[120px]  ">
      {FEATURES.map((feature, index) => (
        <div
          className="flex flex-col gap-[10px] p-4 border-[1px] rounded-[16px] shadow-lg w-fit "
          key={index}
        >
          <div className="p-[15px]">{feature.icon}</div>
          <div className="flex flex-col gap-1">
            <h3 className="text-[18px] font-bold font-poppins">
              {feature.title}
            </h3>
            <p className="text-[14px] ">{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Features;
