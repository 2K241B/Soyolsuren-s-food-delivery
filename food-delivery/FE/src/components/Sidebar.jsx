'use client'



import { useSearchParams } from "next/navigation";
import { useCategories } from "./hooks/useCategories"
import { SidebarMenuItem } from "./SidebarMenuItem"
import Link from "next/link";



const Sidebar = () => {
    const { response, loading, error } = useCategories();

    const searchParams = useSearchParams();
    const categoryParam = searchParams.get('category');

    return (
        <div className="bg-white min-h-screen py-10 pr-10">
            <h1>
                Food menu
            </h1>
            <div className="space-y-4 mt-8 flex flex-col gap-4">
                {
                    response?.map(category => {
                        const isActive = category._id == categoryParam;

                        return <Link href={{ pathname: '/admin', query: { category: category._id } }}>
                            <SidebarMenuItem 
                            key={category.id}
                            isActive={isActive}  
                            value={category.name} 
                            id={category._id} />
                        </Link>
                    })
                }
            </div>

        </div>
    )
}

export default Sidebar;