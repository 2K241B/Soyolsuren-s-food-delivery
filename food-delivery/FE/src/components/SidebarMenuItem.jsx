import { EllipsisVertical } from "lucide-react"

export const SidebarMenuItem = ({ children, isActive }) => {
    return (
        <div className={"p-2 w-[258px] flex justify-between items-center ${isActive ? 'bg-green-600 text-white' : 'bordeer-gray-200'}"}>{children}
        <EllipsisVertical />
        </div>
    )
}