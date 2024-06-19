// system imports
import React from 'react';
import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';

// style import
import Svg, { SvgUri, SvgXml } from 'react-native-svg';
import { vw, vh, vmax, vmin } from './stylesheet';
import colorStyle from '../assets/componentStyleSheet';

// screen import
import Home from '../screens/Home';
import Library from '../screens/Library';
import NewFeed from '../screens/NewFeed';
import Setting from '../screens/Setting';
import Add from '../screens/Add';
import styles from './stylesheet';

// ____________________END OF IMPORT_______________________

function Tab() {
    const navigation = useNavigation();

    const Tab = createBottomTabNavigator();

    const tabBarIcon = (iconXml: string | null, focused: boolean) => {
        const fill = focused ? colorStyle.main4 : 'none';
        return (
            <SvgXml
                xml={iconXml}
                fill={fill} // Set the fill color based on whether the tab is focused or not
            />
        );
    };

    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                headerShown: false,
                tabBarActiveTintColor: "red",
                tabBarInactiveTintColor: "black",
                tabBarStyle: [
                    {
                        display: "flex",
                        // paddingTop: vw(4),
                        // marginBottom: 0,
                        // alignContent: "center",
                        // alignItems: "center",
                    },
                    null
                ]

            }}>
            <Tab.Screen name="Home" component={Home}
                options={{
                    tabBarIcon: ({ focused, color, size }) =>
                        tabBarIcon(
                            focused ?
                                `<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.4996 7.7626C7.96095 6.30125 9.59314 5.18159 10.6971 4.50348C11.5017 4.00926 12.4975 4.00926 13.3021 4.50348C14.4061 5.18159 16.0382 6.30125 17.4996 7.7626C20.668 10.931 20.4996 12.7626 20.4996 15.7626C20.4996 17.1724 20.3892 18.3614 20.2721 19.2258C20.149 20.1352 19.3558 20.7626 18.438 20.7626H16.9996C15.895 20.7626 14.9996 19.8672 14.9996 18.7626V16.7626C14.9996 15.967 14.6835 15.2039 14.1209 14.6413C13.5583 14.0787 12.7952 13.7626 11.9996 13.7626C11.2039 13.7626 10.4409 14.0787 9.87828 14.6413C9.31567 15.2039 8.9996 15.967 8.9996 16.7626V18.7626C8.9996 19.8672 8.10417 20.7626 6.9996 20.7626H5.56115C4.64342 20.7626 3.85025 20.1352 3.72708 19.2257C3.61002 18.3614 3.4996 17.1724 3.4996 15.7626C3.4996 12.7626 3.3312 10.931 6.4996 7.7626Z" fill="black" style="fill:black;fill-opacity:1;"/>
                                <path d="M6.4996 7.7626C7.96095 6.30125 9.59314 5.18159 10.6971 4.50348C11.5017 4.00926 12.4975 4.00926 13.3021 4.50348C14.4061 5.18159 16.0382 6.30125 17.4996 7.7626C20.668 10.931 20.4996 12.7626 20.4996 15.7626C20.4996 17.1724 20.3892 18.3614 20.2721 19.2258C20.149 20.1352 19.3558 20.7626 18.438 20.7626H16.9996C15.895 20.7626 14.9996 19.8672 14.9996 18.7626V16.7626C14.9996 15.967 14.6835 15.2039 14.1209 14.6413C13.5583 14.0787 12.7952 13.7626 11.9996 13.7626C11.2039 13.7626 10.4409 14.0787 9.87828 14.6413C9.31567 15.2039 8.9996 15.967 8.9996 16.7626V18.7626C8.9996 19.8672 8.10417 20.7626 6.9996 20.7626H5.56115C4.64342 20.7626 3.85025 20.1352 3.72708 19.2257C3.61002 18.3614 3.4996 17.1724 3.4996 15.7626C3.4996 12.7626 3.3312 10.931 6.4996 7.7626Z" stroke="black" style="stroke:black;stroke-opacity:1;" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            `:
                                `<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.4996 7.7626C7.96094 6.30125 9.59314 5.18159 10.6971 4.50348C11.5017 4.00926 12.4975 4.00926 13.3021 4.50348C14.4061 5.18159 16.0382 6.30125 17.4996 7.7626C20.668 10.931 20.4996 12.7626 20.4996 15.7626C20.4996 17.1724 20.3892 18.3614 20.2721 19.2258C20.149 20.1352 19.3558 20.7626 18.438 20.7626H16.9996C15.895 20.7626 14.9996 19.8672 14.9996 18.7626V16.7626C14.9996 15.967 14.6835 15.2039 14.1209 14.6413C13.5583 14.0787 12.7952 13.7626 11.9996 13.7626C11.2039 13.7626 10.4409 14.0787 9.87828 14.6413C9.31567 15.2039 8.9996 15.967 8.9996 16.7626V18.7626C8.9996 19.8672 8.10417 20.7626 6.9996 20.7626H5.56115C4.64342 20.7626 3.85025 20.1352 3.72708 19.2257C3.61002 18.3614 3.4996 17.1724 3.4996 15.7626C3.4996 12.7626 3.3312 10.931 6.4996 7.7626Z" stroke="#2F2F2F" style="stroke:#2F2F2F;stroke:color(display-p3 0.1843 0.1843 0.1843);stroke-opacity:1;" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            `
                            , focused),
                }} />

            <Tab.Screen name="Library" component={Library}
                options={{
                    tabBarIcon: ({ focused, color, size }) =>
                        tabBarIcon(
                            focused ?
                                `<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.55933 3.7627C4.69168 3.7627 3.80933 4.64505 3.80933 7.5127C3.80933 10.3803 4.69168 11.2627 7.55933 11.2627C10.427 11.2627 11.3093 10.3803 11.3093 7.5127C11.3093 4.64505 10.427 3.7627 7.55933 3.7627Z" fill="black" style="fill:black;fill-opacity:1;"/>
                                <path d="M7.55933 14.2627C4.69168 14.2627 3.80933 15.145 3.80933 18.0127C3.80933 20.8803 4.69168 21.7627 7.55933 21.7627C10.427 21.7627 11.3093 20.8803 11.3093 18.0127C11.3093 15.145 10.427 14.2627 7.55933 14.2627Z" fill="black" style="fill:black;fill-opacity:1;"/>
                                <path d="M18.0593 14.2627C15.1917 14.2627 14.3093 15.145 14.3093 18.0127C14.3093 20.8803 15.1917 21.7627 18.0593 21.7627C20.927 21.7627 21.8093 20.8803 21.8093 18.0127C21.8093 15.145 20.927 14.2627 18.0593 14.2627Z" fill="black" style="fill:black;fill-opacity:1;"/>
                                <path d="M18.0593 3.7627C15.1917 3.7627 14.3093 4.64505 14.3093 7.5127C14.3093 10.3803 15.1917 11.2627 18.0593 11.2627C20.927 11.2627 21.8093 10.3803 21.8093 7.5127C21.8093 4.64505 20.927 3.7627 18.0593 3.7627Z" fill="black" style="fill:black;fill-opacity:1;"/>
                                <path d="M7.55933 3.7627C4.69168 3.7627 3.80933 4.64505 3.80933 7.5127C3.80933 10.3803 4.69168 11.2627 7.55933 11.2627C10.427 11.2627 11.3093 10.3803 11.3093 7.5127C11.3093 4.64505 10.427 3.7627 7.55933 3.7627Z" stroke="black" style="stroke:black;stroke-opacity:1;" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M7.55933 14.2627C4.69168 14.2627 3.80933 15.145 3.80933 18.0127C3.80933 20.8803 4.69168 21.7627 7.55933 21.7627C10.427 21.7627 11.3093 20.8803 11.3093 18.0127C11.3093 15.145 10.427 14.2627 7.55933 14.2627Z" stroke="black" style="stroke:black;stroke-opacity:1;" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M18.0593 14.2627C15.1917 14.2627 14.3093 15.145 14.3093 18.0127C14.3093 20.8803 15.1917 21.7627 18.0593 21.7627C20.927 21.7627 21.8093 20.8803 21.8093 18.0127C21.8093 15.145 20.927 14.2627 18.0593 14.2627Z" stroke="black" style="stroke:black;stroke-opacity:1;" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M18.0593 3.7627C15.1917 3.7627 14.3093 4.64505 14.3093 7.5127C14.3093 10.3803 15.1917 11.2627 18.0593 11.2627C20.927 11.2627 21.8093 10.3803 21.8093 7.5127C21.8093 4.64505 20.927 3.7627 18.0593 3.7627Z" stroke="black" style="stroke:black;stroke-opacity:1;" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>                                
                            `:
                                `<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.55933 3.7627C4.69168 3.7627 3.80933 4.64505 3.80933 7.5127C3.80933 10.3803 4.69168 11.2627 7.55933 11.2627C10.427 11.2627 11.3093 10.3803 11.3093 7.5127C11.3093 4.64505 10.427 3.7627 7.55933 3.7627Z" stroke="#2F2F2F" style="stroke:#2F2F2F;stroke:color(display-p3 0.1843 0.1843 0.1843);stroke-opacity:1;" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M7.55933 14.2627C4.69168 14.2627 3.80933 15.145 3.80933 18.0127C3.80933 20.8803 4.69168 21.7627 7.55933 21.7627C10.427 21.7627 11.3093 20.8803 11.3093 18.0127C11.3093 15.145 10.427 14.2627 7.55933 14.2627Z" stroke="#2F2F2F" style="stroke:#2F2F2F;stroke:color(display-p3 0.1843 0.1843 0.1843);stroke-opacity:1;" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M18.0593 14.2627C15.1917 14.2627 14.3093 15.145 14.3093 18.0127C14.3093 20.8803 15.1917 21.7627 18.0593 21.7627C20.927 21.7627 21.8093 20.8803 21.8093 18.0127C21.8093 15.145 20.927 14.2627 18.0593 14.2627Z" stroke="#2F2F2F" style="stroke:#2F2F2F;stroke:color(display-p3 0.1843 0.1843 0.1843);stroke-opacity:1;" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M18.0593 3.7627C15.1917 3.7627 14.3093 4.64505 14.3093 7.5127C14.3093 10.3803 15.1917 11.2627 18.0593 11.2627C20.927 11.2627 21.8093 10.3803 21.8093 7.5127C21.8093 4.64505 20.927 3.7627 18.0593 3.7627Z" stroke="#2F2F2F" style="stroke:#2F2F2F;stroke:color(display-p3 0.1843 0.1843 0.1843);stroke-opacity:1;" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>                                
                            `
                            , focused),
                }} />

            <Tab.Screen name="Add" component={Add}
                options={{
                    tabBarIcon: ({ focused, color, size }) =>
                        tabBarIcon(
                            focused ?
                                `<svg width="120" height="105" viewBox="0 0 120 105" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_d_587_1985)">
                                <rect x="24.6187" width="70.7627" height="70.7627" rx="35.3813" fill="#86DFD0" style="fill:#86DFD0;fill-opacity:1;"/>
                                <path d="M51.5708 35.0664H67.5708" stroke="white" style="stroke:white;stroke-opacity:1;" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M59.5708 43.0664V27.0664" stroke="white" style="stroke:white;stroke-opacity:1;" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </g>
                                <defs>
                                <filter id="filter0_d_587_1985" x="0.618654" y="0" width="118.763" height="119.763" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                <feOffset dy="25"/>
                                <feGaussianBlur stdDeviation="12"/>
                                <feComposite in2="hardAlpha" operator="out"/>
                                <feColorMatrix type="matrix" values="0 0 0 0 0.466667 0 0 0 0 0.388235 0 0 0 0 0.964706 0 0 0 0.1 0"/>
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_587_1985"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_587_1985" result="shape"/>
                                </filter>
                                </defs>
                                </svg>
                                                                                          
                            `:
                                `<svg width="120" height="130" viewBox="0 0 95 130" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <rect width="95" height="84" fill="url(#pattern0_739_4897)" style=""/>
                                <defs>
                                <pattern id="pattern0_739_4897" patternContentUnits="objectBoundingBox" width="1" height="1">
                                <use xlink:href="#image0_739_4897" transform="scale(0.00526316 0.00595238)"/>
                                </pattern>
                                <image id="image0_739_4897" width="190" height="190" xlink:href="data:image/png;base64,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"/>
                                </defs>
                                </svg>
                                
                                                                             
                            `
                            , focused),
                }} />

            <Tab.Screen name="NewFeed" component={NewFeed}
                options={{
                    tabBarIcon: ({ focused, color, size }) =>
                        tabBarIcon(
                            focused ?
                                `<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.6907 21.7628H3.69067C2.30996 21.7628 1.19067 20.6435 1.19067 19.2628C1.19067 15.1821 7.19067 15.2628 9.19067 15.2628C11.1907 15.2628 17.1907 15.1821 17.1907 19.2628C17.1907 20.6435 16.0714 21.7628 14.6907 21.7628Z" fill="black" style="fill:black;fill-opacity:1;"/>
                                <path d="M9.19067 11.7627C11.3998 11.7627 13.1907 9.97183 13.1907 7.7627C13.1907 5.55356 11.3998 3.7627 9.19067 3.7627C6.98153 3.7627 5.19067 5.55356 5.19067 7.7627C5.19067 9.97183 6.98153 11.7627 9.19067 11.7627Z" fill="black" style="fill:black;fill-opacity:1;"/>
                                <path d="M20.6907 21.7627C22.0714 21.7627 23.1907 20.6434 23.1907 19.2627C23.1907 16.9352 21.2389 15.9615 19.1907 15.5544M15.1907 11.7627C17.3998 11.7627 19.1907 9.97183 19.1907 7.7627C19.1907 5.55356 17.3998 3.7627 15.1907 3.7627M3.69067 21.7628H14.6907C16.0714 21.7628 17.1907 20.6435 17.1907 19.2628C17.1907 15.1821 11.1907 15.2628 9.19067 15.2628C7.19067 15.2628 1.19067 15.1821 1.19067 19.2628C1.19067 20.6435 2.30996 21.7628 3.69067 21.7628ZM13.1907 7.7627C13.1907 9.97183 11.3998 11.7627 9.19067 11.7627C6.98153 11.7627 5.19067 9.97183 5.19067 7.7627C5.19067 5.55356 6.98153 3.7627 9.19067 3.7627C11.3998 3.7627 13.1907 5.55356 13.1907 7.7627Z" stroke="black" style="stroke:black;stroke-opacity:1;" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>                                                           
                            `:
                                `<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.6907 21.7627C22.0714 21.7627 23.1907 20.6434 23.1907 19.2627C23.1907 16.9352 21.2389 15.9615 19.1907 15.5544M15.1907 11.7627C17.3998 11.7627 19.1907 9.97183 19.1907 7.7627C19.1907 5.55356 17.3998 3.7627 15.1907 3.7627M3.69067 21.7628H14.6907C16.0714 21.7628 17.1907 20.6435 17.1907 19.2628C17.1907 15.1821 11.1907 15.2628 9.19067 15.2628C7.19067 15.2628 1.19067 15.1821 1.19067 19.2628C1.19067 20.6435 2.30996 21.7628 3.69067 21.7628ZM13.1907 7.7627C13.1907 9.97183 11.3998 11.7627 9.19067 11.7627C6.98153 11.7627 5.19067 9.97183 5.19067 7.7627C5.19067 5.55356 6.98153 3.7627 9.19067 3.7627C11.3998 3.7627 13.1907 5.55356 13.1907 7.7627Z" stroke="#2F2F2F" style="stroke:#2F2F2F;stroke:color(display-p3 0.1843 0.1843 0.1843);stroke-opacity:1;" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>                                                               
                            `
                            , focused),
                }} />
                
            <Tab.Screen name="Setting" component={Setting}
                options={{
                    tabBarIcon: ({ focused, color, size }) =>
                        tabBarIcon(
                            focused ?
                                `<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11 3.7627H13C13.5523 3.7627 14 4.21041 14 4.7627V5.33148C14 5.75928 14.2871 6.13094 14.6822 6.29498C15.0775 6.45908 15.5377 6.39654 15.8403 6.09392L16.2426 5.6916C16.6331 5.30108 17.2663 5.30108 17.6568 5.6916L19.071 7.10582C19.4616 7.49634 19.4615 8.12951 19.071 8.52003L18.6688 8.92229C18.3661 9.22493 18.3036 9.68516 18.4677 10.0804C18.6317 10.4756 19.0034 10.7627 19.4313 10.7627L20 10.7627C20.5523 10.7627 21 11.2104 21 11.7627V13.7627C21 14.315 20.5523 14.7627 20 14.7627H19.4312C19.0034 14.7627 18.6318 15.0498 18.4677 15.4449C18.3036 15.8402 18.3661 16.3004 18.6688 16.603L19.071 17.0053C19.4616 17.3958 19.4616 18.029 19.071 18.4195L17.6568 19.8337C17.2663 20.2243 16.6331 20.2243 16.2426 19.8337L15.8403 19.4315C15.5377 19.1288 15.0775 19.0663 14.6822 19.2304C14.2871 19.3944 14 19.7661 14 20.1939V20.7627C14 21.315 13.5523 21.7627 13 21.7627H11C10.4477 21.7627 10 21.315 10 20.7627V20.194C10 19.7661 9.71287 19.3944 9.31774 19.2304C8.92247 19.0663 8.46223 19.1288 8.1596 19.4315L7.75732 19.8337C7.36679 20.2243 6.73363 20.2243 6.34311 19.8337L4.92889 18.4195C4.53837 18.029 4.53837 17.3958 4.92889 17.0053L5.33123 16.603C5.63384 16.3004 5.69638 15.8402 5.53228 15.4449C5.36825 15.0498 4.99659 14.7627 4.56879 14.7627H4C3.44772 14.7627 3 14.315 3 13.7627V11.7627C3 11.2104 3.44772 10.7627 4 10.7627L4.56877 10.7627C4.99658 10.7627 5.36825 10.4756 5.53229 10.0805C5.6964 9.6852 5.63386 9.22498 5.33123 8.92236L4.92891 8.52003C4.53838 8.12951 4.53838 7.49634 4.92891 7.10582L6.34312 5.69161C6.73365 5.30108 7.36681 5.30108 7.75734 5.69161L8.15966 6.09393C8.46228 6.39655 8.9225 6.45909 9.31776 6.29499C9.71288 6.13095 10 5.75927 10 5.33146V4.7627C10 4.21041 10.4477 3.7627 11 3.7627Z" stroke="#2F2F2F" style="stroke:#2F2F2F;stroke:color(display-p3 0.1843 0.1843 0.1843);stroke-opacity:1;" stroke-width="1.5" fill="black" style="fill:black;fill-opacity:1;"/>
                                <path d="M14 12.7627C14 13.8673 13.1046 14.7627 12 14.7627C10.8954 14.7627 10 13.8673 10 12.7627C10 11.6581 10.8954 10.7627 12 10.7627C13.1046 10.7627 14 11.6581 14 12.7627Z" stroke="white" style="stroke:white;stroke:color(display-p3 0.1843 0.1843 0.1843);stroke-opacity:1;" stroke-width="1.5" fill="white" style="fill:white;fill-opacity:1;"/>
                                </svg>                                                                                           
                            `:
                                `<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11 3.7627H13C13.5523 3.7627 14 4.21041 14 4.7627V5.33148C14 5.75928 14.2871 6.13094 14.6822 6.29498C15.0775 6.45908 15.5377 6.39654 15.8403 6.09392L16.2426 5.6916C16.6331 5.30108 17.2663 5.30108 17.6568 5.6916L19.071 7.10582C19.4616 7.49634 19.4615 8.12951 19.071 8.52003L18.6688 8.92229C18.3661 9.22493 18.3036 9.68516 18.4677 10.0804C18.6317 10.4756 19.0034 10.7627 19.4313 10.7627L20 10.7627C20.5523 10.7627 21 11.2104 21 11.7627V13.7627C21 14.315 20.5523 14.7627 20 14.7627H19.4312C19.0034 14.7627 18.6318 15.0498 18.4677 15.4449C18.3036 15.8402 18.3661 16.3004 18.6688 16.603L19.071 17.0053C19.4616 17.3958 19.4616 18.029 19.071 18.4195L17.6568 19.8337C17.2663 20.2243 16.6331 20.2243 16.2426 19.8337L15.8403 19.4315C15.5377 19.1288 15.0775 19.0663 14.6822 19.2304C14.2871 19.3944 14 19.7661 14 20.1939V20.7627C14 21.315 13.5523 21.7627 13 21.7627H11C10.4477 21.7627 10 21.315 10 20.7627V20.194C10 19.7661 9.71287 19.3944 9.31774 19.2304C8.92247 19.0663 8.46223 19.1288 8.1596 19.4315L7.75732 19.8337C7.36679 20.2243 6.73363 20.2243 6.34311 19.8337L4.92889 18.4195C4.53837 18.029 4.53837 17.3958 4.92889 17.0053L5.33123 16.603C5.63384 16.3004 5.69638 15.8402 5.53228 15.4449C5.36825 15.0498 4.99659 14.7627 4.56879 14.7627H4C3.44772 14.7627 3 14.315 3 13.7627V11.7627C3 11.2104 3.44772 10.7627 4 10.7627L4.56877 10.7627C4.99658 10.7627 5.36825 10.4756 5.53229 10.0805C5.6964 9.6852 5.63386 9.22498 5.33123 8.92236L4.92891 8.52003C4.53838 8.12951 4.53838 7.49634 4.92891 7.10582L6.34312 5.69161C6.73365 5.30108 7.36681 5.30108 7.75734 5.69161L8.15966 6.09393C8.46228 6.39655 8.9225 6.45909 9.31776 6.29499C9.71288 6.13095 10 5.75927 10 5.33146V4.7627C10 4.21041 10.4477 3.7627 11 3.7627Z" stroke="#2F2F2F" style="stroke:#2F2F2F;stroke:color(display-p3 0.1843 0.1843 0.1843);stroke-opacity:1;" stroke-width="1.5"/>
                                <path d="M14 12.7627C14 13.8673 13.1046 14.7627 12 14.7627C10.8954 14.7627 10 13.8673 10 12.7627C10 11.6581 10.8954 10.7627 12 10.7627C13.1046 10.7627 14 11.6581 14 12.7627Z" stroke="#2F2F2F" style="stroke:#2F2F2F;stroke:color(display-p3 0.1843 0.1843 0.1843);stroke-opacity:1;" stroke-width="1.5"/>
                                </svg>                                                                                               
                            `
                            , focused),
                }} />

        </Tab.Navigator>
    );
}

export default Tab;
