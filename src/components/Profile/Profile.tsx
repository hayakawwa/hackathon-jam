'use client'

import cls from './Profile.module.scss'
import Header from "@/components/Profile/Header/Header";
import Information from "@/components/Profile/Information/Information";
import Skills from "@/components/Profile/Skills/Skills";
import About from "@/components/Profile/About/About";
import {useGetProfileQuery} from "@/api/profileApi";
import {FC, useEffect, useState} from "react";
import {useAppSelector} from "@/hooks/hooks";
import {getProfileData} from "@/store/selectors/profileSelector";
import {redirect, usePathname} from "next/navigation";
import {ProfileSchema} from "@/store/types/ProfileSchema";

interface IProfileProps {
    isCurrentProfile: boolean;
}

const Profile: FC<IProfileProps> = ({isCurrentProfile}) => {
    const pathnameUsername = usePathname().split('/').slice(-1)[0];
    const [otherUserData, setOtherUserData] = useState<ProfileSchema>({});

    if (typeof window !== 'undefined' && window.localStorage && localStorage.getItem('username') === pathnameUsername) {
        redirect('/profile')
    }

    if (!isCurrentProfile) {
        const {data, isSuccess} = useGetProfileQuery(pathnameUsername);

        useEffect(() => {
            if (isSuccess) {
                setOtherUserData(data);
            }
        }, [isSuccess]);
    }

    const currentProfileData = useAppSelector(getProfileData);

    const {
        first_name: firstName,
        last_name: lastName,
        username,
        avatar,
        about,
        location,
        work_place: workPlace,
        work_time: workTime
    } = !isCurrentProfile ? otherUserData : currentProfileData;


    return (
        <main className={cls.main}>
                <>
                    <div className={cls.cover}></div>
                    <div className={cls.mainInfo}>
                        <Header firstName={firstName as string} lastName={lastName as string} avatar={avatar as string} username={username as string} isCurrentProfile={isCurrentProfile}/>
                        <div className={cls.blocks}>
                            <Information className={cls.block} location={location as string} workPlace={workPlace as string} workTime={workTime as string}/>
                            <Skills className={cls.block} username={username as string}/>
                            <About className={cls.block} text={about as string}/>
                        </div>
                    </div>
                </>
        </main>
    )
}

export default Profile;