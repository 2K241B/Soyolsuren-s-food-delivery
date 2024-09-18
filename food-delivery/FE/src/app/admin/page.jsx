import Image from "next/image";

const styles = {
    tableContainer: "w-[221px]",
    headerContainer: "py-[20px] px-[24px] flex gap-4 justify-between rounded-t-[8px] border-b-[1px] border-slate-300",
    header: "font-bold text-[20px]",
    input: "w-[356px] bg-slate-100 rounded-[8px] border-[1px]",
    tableHeader: "bg-slate-100  h-[42px] px-4 py-3 border-b-[1px] border-slate-300 text-3 text-[#5E6166] flex gap-1 items-center",
    tableCell: "flex w-fit py-4 px-6 gap-2 w-full",
    orderNumber:"text-[14px] font-semibold leading-[20px]",
    foodName:"text-[14px] font-normal leading-[20px] text-[#3F4145]"
}

const tableData = [
    {
        img: "/src/assets/Card1.png",
        orderNumber: "#23790",
        foodName: "Breakfast"

}
];

const AdminDashboard = () => {
    return (
        <div >
            <div className={styles.headerContainer}>
                <h1 className={styles.header}>Admin dashboard</h1>
                <input
                    className={styles.input}
                    placeholder="Search"
                    type="search">

                </input>
            </div>
            <div className={styles.tableContainer}>
                <div >
                    <h5 className={styles.tableHeader}>Order name</h5>
                </div>
                <div className={styles.tableCell}>
                    <Image
                        src={tableData.img}
                        width={40}
                        height={40}
                        alt="Picture  of the food"
                    />
                    <h3 className={styles.orderNumber}>{tableData.orderNumber}</h3>
                    <p className={styles.foodName}>{tableData.foodName}</p>



                </div>
            </div>
        </div>
    )
}

export default AdminDashboard;