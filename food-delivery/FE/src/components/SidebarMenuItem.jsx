import { Dialog, DialogContent, DialogTrigger } from "@radix-ui/react-dialog";
import { EllipsisVertical, Pencil, Trash2 } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { axiosInstance } from "@/lib/axios";
import { useState } from "react";

export const SidebarMenuItem = ({ value, isActive }) => {
const [open, setIsOpen] =useState(false)

  const ref = useRef(null);
  const onEdit = async () => {
    const res = await axiosInstance.put(`/category/${id}`, {
      name: ref.current.value,
    });
  };

  return (
    <div
      className={`p-2 w-[258px] flex justify-between items-center rounded-md ${
        isActive ? "bg-green-600 text-white" : "border-gray-200"
      }`}
    >
      {value}

      <Popover>
        <PopoverTrigger>
          <EllipsisVertical />
        </PopoverTrigger>
        <PopoverContent className="space-y-4">

          <Dialog open={open}>
            <DialogTrigger className="flex gap-4 items-center cursor-pointer">
              <Pencil />
              Edit name
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <Label>Category name</Label>
              <Input placeholder={value} />
              <Button>Submit</Button>
            </DialogContent>
          </Dialog>

          <Dialog>
            <DialogTrigger className="flex gap-4 items-center cursor-pointer text-red-500">
              <Trash2 />
              Delete category
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <CardDescription className="text-lg text-gray-800">
                Are you sure?
              </CardDescription>
              <Button>OK</Button>
            </DialogContent>
          </Dialog>
        </PopoverContent>
      </Popover>
    </div>
  );
};
