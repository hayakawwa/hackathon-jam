import Home from "@/components/Home/Home";
import React from "react";

export default function HomePage({ params }: { params: { slug: string } }) {
  return (
    <Home/>
  );
}