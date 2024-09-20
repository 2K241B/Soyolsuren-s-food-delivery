import Sidebar from "@/components/Sidebar";


const AdminLayout = ({children}) => {
    return (
        <section className="max-w-[125px] mx-auto flex gap-8 bg-gray-100">
            <Sidebar />
            {children}
        </section>
    );
};

export default AdminLayout;