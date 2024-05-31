import React from "react";
import Profile from "@/components/Profile/Profile";

export default function ProfilePage({ params }: { params: { slug: string } }) {
    return (
        <Profile isCurrentProfile={true}/>
    );
}