"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { axiosInstance } from "@/lib/axios";

const AdminPage = () => {
    const search = useSearchParams();
    const categoryParam = search.get('category');

    const [foods, setFoods] = useState([])

    useEffect(() => {
        const fetch = async () => {
            const {data} = await axiosInstance(`/food?categoryId=${categoryParam}`);
            setFoods(data)

        }
        fetch()
    }, [categoryParam])

    return (
    <div className="mt-10 flex gap-8">
        {
            foods.map(f => (
                <div>
                    {f.name}
                </div>
            ))
        }
    </div>
    )
}

export default AdminPage;