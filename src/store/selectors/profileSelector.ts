import {StateSchema} from "@/store/StateSchema";
import {state} from "sucrase/dist/types/parser/traverser/base";


export const getProfileData = (state: StateSchema) => state.profile.data;

export const getCurrentUsername = (state: StateSchema) => state.auth.username;

