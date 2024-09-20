"use client";

import { useEffect, useState } from "react";
import { instance }  from "@lib/axiosInstance";
import { useSearchParams } from "next/navigation";

const AdminPage = () => {
    const search = useSearchParams();
    const categoryParam = search.get('category');

    const [foods, setFoods] = useState([])

    useEffect(() => {
        const fetch = async () => {
            const response = await instance('/food?categoryId=${categoryParam}');
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