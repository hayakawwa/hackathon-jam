'use client'

import cls from './Profile.module.scss'
import Header from "@/components/Profile/Header/Header";
import Information from "@/components/Profile/Information/Information";
import Skills from "@/components/Profile/Skills/Skills";
import About from "@/components/Profile/About/About";
import {useGetCurrentProfileMutation, useGetProfileQuery, useGetSkillsQuery} from "@/api/profileApi";
import {useEffect, useState} from "react";
import {useAppSelector} from "@/hooks/hooks";
import {getProfileData} from "@/store/selectors/profileSelector";

export default function Profile() {
    const [getCurrentProfile, {isLoading}] = useGetCurrentProfileMutation();

    const {
        first_name: firstName,
        last_name: lastName,
        username,
        avatar,
        about,
        location,
        work_place: workPlace,
        work_time: workTime
    } = useAppSelector(getProfileData);

    useEffect(() => {
        getCurrentProfile({
            access_token: localStorage.getItem('access_token') as string
        });
    }, []);

    return (
        <main className={cls.main}>
            {!isLoading &&
                <>
                    <div className={cls.cover}></div>
                    <div className={cls.mainInfo}>
                        <Header firstName={firstName as string} lastName={lastName as string} avatar={avatar as string} username={username as string}/>
                        <div className={cls.blocks}>
                            <Information className={cls.block} location={location as string} workPlace={workPlace as string} workTime={workTime as string}/>
                            <Skills className={cls.block} username={username as string}/>
                            <About className={cls.block} text={about as string}/>
                        </div>
                    </div>
                </>
            }
        </main>
    )
}