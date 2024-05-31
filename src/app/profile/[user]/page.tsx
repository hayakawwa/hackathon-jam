import React from "react";
import Profile from "@/components/Profile/Profile";

export default function UserPage({ params }: { params: { slug: string } }) {
    return (
        <Profile isCurrentProfile={false}/>
    );
}