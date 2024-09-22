import DropdownDefault from "./ui/DropdownDefault"

const ordersData = [
  {
    orderNumber: "001",
    foods: "Burger, Fries",
    totalPrice: "$15.99",
    process: "Pending",
    createdDate: "01 Jan 2024",
    district: "Central",
    khoroo: "2nd",
    apartment: "22B",
    descriptionOfAddress: "Near the Central Park",
    phoneNumber: "+123456789",
    methodOfPay: "Credit Card",
  },
  {
    orderNumber: "002",
    foods: "Pizza, Soda",
    totalPrice: "$22.50",
    process: "In Progress",
    createdDate: "02 Jan 2024",
    district: "West",
    khoroo: "3rd",
    apartment: "15A",
    descriptionOfAddress: "Close to the grocery store",
    phoneNumber: "+987654321",
    methodOfPay: "PayPal",
  },
  {
    orderNumber: "003",
    foods: "Sushi",
    totalPrice: "$30.00",
    process: "Delivered",
    createdDate: "03 Jan 2024",
    district: "East",
    khoroo: "4th",
    apartment: "10C",
    descriptionOfAddress: "Opposite the library",
    phoneNumber: "+192837465",
    methodOfPay: "Cash",
  },
];

const OrdersReport = () => {
  return (
    <div className="col-span-12">
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="p-4 md:p-6 xl:p-7.5">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-title-sm2 font-bold text-black dark:text-white">
                Orders Report
              </h2>
            </div>
            <DropdownDefault />
          </div>
        </div>

        <div className="border-b border-stroke px-4 pb-5 dark:border-strokedark md:px-6 xl:px-7.5">
          <div className="flex items-center gap-3">
            <div className="w-2/12 xl:w-3/12">
              <span className="font-medium">Order Number</span>
            </div>
            <div className="w-6/12 2xsm:w-5/12 md:w-3/12">
              <span className="font-medium">Foods</span>
            </div>
            <div className="w-4/12 2xsm:w-3/12">
              <span className="font-medium">Total Price</span>
            </div>
            <div className="w-3/12 md:w-2/12">
              <span className="font-medium">Process</span>
            </div>
            <div className="hidden w-2/12 text-center md:block">
              <span className="font-medium">Phone Number</span>
            </div>
            <div className="w-2/12 text-center">
              <span className="font-medium">Actions</span>
            </div>
          </div>
        </div>

        <div className="p-4 md:p-6 xl:p-7.5">
          <div className="flex flex-col gap-7">
            {ordersData.map((order, key) => (
              <div className="flex items-center gap-3" key={key}>
                <div className="w-2/12 xl:w-3/12">
                  <span className="font-medium">{order.orderNumber}</span>
                </div>
                <div className="w-6/12 2xsm:w-5/12 md:w-3/12">
                  <span className="font-medium">{order.foods}</span>
                </div>
                <div className="w-4/12 2xsm:w-3/12">
                  <span className="font-medium">{order.totalPrice}</span>
                </div>
                <div className="w-3/12 md:w-2/12">
                  <span className={`inline-block rounded  py-0.5 px-2.5 text-sm font-medium ${order.process === "Pending" ? "bg-yellow-300" : order.process === "In Progress" ? "bg-blue-300" : "bg-green-300"}`}>
                    {order.process}
                  </span>
                </div>
                <div className="hidden w-2/12 md:block text-center">
                  <span className="font-medium">{order.phoneNumber}</span>
                </div>
                <div className="w-2/12 text-center">
                  <button className="mx-auto block hover:text-meta-1">
                    <svg className="mx-auto fill-current" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16.8094 3.02498H14.1625V2.4406C14.1625 1.40935 13.3375 0.584351 12.3062 0.584351H9.65935C8.6281 0.584351 7.8031 1.40935 7.8031 2.4406V3.02498H5.15623C4.15935 3.02498 3.33435 3.84998 3.33435 4.84685V5.8781C3.33435 6.63435 3.78123 7.2531 4.43435 7.5281L4.98435 18.9062C5.0531 20.3156 6.22185 21.4156 7.63123 21.4156H14.3C15.7093 21.4156 16.8781 20.3156 16.9469 18.9062L17.5312 7.49372C18.1844 7.21872 18.6312 6.5656 18.6312 5.84373V4.81248C18.6312 3.84998 17.8062 3.02498 16.8094 3.02498ZM9.38435 2.4406C9.38435 2.26873 9.52185 2.13123 9.69373 2.13123H12.3406C12.5125 2.13123 12.65 2.26873 12.65 2.4406V3.02498H9.41873V2.4406H9.38435ZM4.9156 4.84685C4.9156 4.70935 5.01873 4.57185 5.1906 4.57185H16.8094C16.9469 4.57185 17.0844 4.67498 17.0844 4.84685V5.8781C17.0844 6.0156 16.9812 6.1531 16.8094 6.1531H5.1906C5.0531 6.1531 4.9156 6.04998 4.9156 5.8781V4.84685V4.84685ZM14.3344 19.8687H7.6656C7.08123 19.8687 6.59998 19.4218 6.5656 18.8031L6.04998 7.6656H15.9844L15.4687 18.8031C15.4 19.3875 14.9187 19.8687 14.3344 19.8687Z" />
                      <path d="M11 11.1375C10.5875 11.1375 10.2094 11.4812 10.2094 11.9281V16.2937C10.2094 16.7062 10.5531 17.0843 11 17.0843C11.4125 17.0843 11.7906 16.7406 11.7906 16.2937V11.9281C11.7906 11.4812 11.4125 11.1375 11 11.1375Z" />
                      <path d="M13.7499 11.825C13.303 11.7906 12.9593 12.1 12.9249 12.5156L12.728 16.2656C12.6593 16.7468 13.033 17.1624 13.5143 17.2312C13.5555 17.2312 13.5968 17.2312 13.6374 17.2312C14.0555 17.2312 14.4 16.9249 14.4655 16.5156L14.6624 12.7656C14.728 12.2843 14.3893 11.8687 13.908 11.8343L13.7499 11.825Z" />
                      <path d="M8.57193 11.825C8.11568 11.8343 7.78568 12.2487 7.81818 12.7156L8.01505 16.4656C8.08493 16.9468 8.46618 17.2624 8.94743 17.2312C9.42868 17.2012 9.74043 16.7874 9.70605 16.3093L9.50918 12.5593C9.47568 12.1 9.02818 11.7906 8.57193 11.825Z" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrdersReport;
