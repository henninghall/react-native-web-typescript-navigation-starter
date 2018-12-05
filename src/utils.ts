import { Platform } from "react-native";
const { OS } = Platform

export const web = OS === 'web'
export const ios = OS === 'ios'
export const android = OS === 'ios'