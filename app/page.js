"use client";

import { fetchApi } from "@/lib/api";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const data1 = fetchApi("records?limit=20");

    setData(data1);
  }, []);

  console.log(data);
  return <div>hello world</div>;
}
