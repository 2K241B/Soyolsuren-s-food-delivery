"use client";

import { ChevronsUpDown, SearchIcon } from "lucide-react";
import { CldImage } from "next-cloudinary";

const styles = {
  tableContainer: "w-[221px]",
  headerContainer:
    "py-[20px] px-[24px] flex gap-4 justify-between rounded-t-[8px] border-b-[2px] border-slate-300",
  header: "font-bold text-[20px]",
  input:
    "flex gap-2 items-center w-[356px] bg-slate-100 rounded-[8px] border-[1px] drop-shadow-xl text-[#8B8E95] text-[20px] py-2 px-3",
  tableHeader:
    "bg-slate-100  w-full h-[42px] px-4 py-3 border-b-[3px] border-slate-300 text-3 text-[#5E6166] flex gap-1 items-center",
  tableCell:
    "flex w-fit py-4 px-6 gap-2 w-full  border-b-[2px] border-slate-300 ",
  orderNumber: "text-[14px] font-semibold leading-[20px]",
  foodName: "text-[14px] font-normal leading-[20px] text-[#3F4145]",
};

const tableData = [
  {
    img: "eggdshdhsbfjsbf",
    orderNumber: "#23790",
    foodName: "Breakfast",
    phoneNumber: "89443125",
    username: "Boldoo",
  },
  {
    img: "eggdshdhsbfjsbf",
    orderNumber: "#23790",
    foodName: "Breakfast",
  },
  {
    img: "eggdshdhsbfjsbf",
    orderNumber: "#23790",
    foodName: "Breakfast",
  },
  {
    img: "eggdshdhsbfjsbf",
    orderNumber: "#23790",
    foodName: "Breakfast",
  },
  {
    img: "eggdshdhsbfjsbf",
    orderNumber: "#23790",
    foodName: "Breakfast",
  },
  {
    img: "eggdshdhsbfjsbf",
    orderNumber: "#23790",
    foodName: "Breakfast",
  },
  {
    img: "eggdshdhsbfjsbf",
    orderNumber: "#23790",
    foodName: "Breakfast",
  },
];

const AdminDashboard = () => {
  return (
    <div>
      <div className={styles.headerContainer}>
        <h1 className={styles.header}>Admin dashboard</h1>
        <div className={styles.input}>
          <SearchIcon />
          <input
            className="bg-slate-100"
            placeholder="Search"
            type="search"
          ></input>
        </div>
      </div>
      <div className="flex">
        <div>
          <div className={styles.tableContainer}>
            <div className="flex w-full gap-2">
              <h5 className={styles.tableHeader}>
                Order name <ChevronsUpDown className="w-4 h-4" />
              </h5>
            </div>

            {tableData.map((img, orderNumber, foodName) => (
              <div className={styles.tableCell}>
                <CldImage
                  src={tableData[0].img}
                  width="40"
                  height="40"
                  crop={{
                    type: "auto",
                    source: true,
                  }}
                />
                <div className="flex flex-col">
                  <h3 className={styles.orderNumber}>
                    {tableData[0].orderNumber}
                  </h3>
                  <p className={styles.foodName}>{tableData[0].foodName}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="flex">
            <div className={styles.tableContainer}>
              <div className="flex w-full gap-2">
                <h5 className={styles.tableHeader}>
                  Buyer info <ChevronsUpDown className="w-4 h-4" />
                </h5>
              </div>
            </div>
          </div>
          {tableData.map((img, orderNumber, foodName) => (
            <div className={styles.tableCell}>
              <div className="flex flex-col">
                <h3 className={styles.orderNumber}>
                  {tableData[0].phoneNumber}
                </h3>
                <p className={styles.foodName}>{tableData[0].username}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
