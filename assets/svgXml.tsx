// symtem import
import React from "react";

// style import
import Svg, { SvgUri, SvgXml } from 'react-native-svg';

// ____________________END OF IMPORT_______________________

export const searchIcon = (w?: any, h?: any, color?: any) => {
    const xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_367_83)">
    <path d="M18.031 16.617L22.314 20.899L20.899 22.314L16.617 18.031C15.0237 19.3082 13.042 20.0029 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20.0029 13.042 19.3082 15.0237 18.031 16.617ZM16.025 15.875C17.2941 14.5699 18.0029 12.8204 18 11C18 7.132 14.867 4 11 4C7.132 4 4 7.132 4 11C4 14.867 7.132 18 11 18C12.8204 18.0029 14.5699 17.2941 15.875 16.025L16.025 15.875Z" fill=${color}/>
    </g>
    <defs>
    <clipPath id="clip0_367_83">
    <rect width="24" height="24" fill="white"/>
    </clipPath>
    </defs>
    </svg>
    `
    return (
        <SvgXml xml={xml} width={w} height={h} />
    );
}

export const leftArrow = (w: any = '100%', h: any = '100%', color?: any) => {
    const xml = `<svg width="100%" height="100%" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_118_911)">
    <path d="M9.785 16.25L16.49 22.955L14.7225 24.7225L5 15L14.7225 5.27747L16.49 7.04497L9.785 13.75L25 13.75L25 16.25L9.785 16.25Z" fill=${color}/>
    </g>
    <defs>
    <clipPath id="clip0_118_911">
    <rect width="30" height="30" fill="white" transform="translate(30 30) rotate(-180)"/>
    </clipPath>
    </defs>
    </svg>
    `
    return (
        <SvgXml xml={xml} width={w} height={h} />
    );
}

export const shareIcon = (w = '100%', h = '100%', color?: any) => {
    const xml = `
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_62_4141)">
    <path d="M16.4 21.2788L11.1513 18.4162C10.466 19.1488 9.57624 19.6584 8.5976 19.8786C7.61896 20.0989 6.5967 20.0197 5.66366 19.6513C4.73063 19.2829 3.92996 18.6424 3.36572 17.8131C2.80148 16.9837 2.49976 16.0037 2.49976 15.0006C2.49976 13.9975 2.80148 13.0176 3.36572 12.1882C3.92996 11.3588 4.73063 10.7183 5.66366 10.35C6.5967 9.98159 7.61896 9.90239 8.5976 10.1226C9.57624 10.3429 10.466 10.8524 11.1513 11.585L16.4013 8.7225C16.1032 7.54259 16.2457 6.29449 16.8021 5.21213C17.3584 4.12977 18.2904 3.28748 19.4233 2.84313C20.5563 2.39878 21.8124 2.38288 22.9562 2.79842C24.1001 3.21395 25.0531 4.0324 25.6366 5.10033C26.2202 6.16826 26.3942 7.41236 26.1261 8.59943C25.858 9.7865 25.1662 10.835 24.1803 11.5485C23.1944 12.262 21.9822 12.5914 20.7708 12.475C19.5594 12.3586 18.432 11.8044 17.6 10.9162L12.35 13.7787C12.5515 14.5804 12.5515 15.4196 12.35 16.2212L17.5988 19.0837C18.4308 18.1956 19.5581 17.6414 20.7695 17.525C21.9809 17.4086 23.1932 17.738 24.1791 18.4515C25.1649 19.165 25.8568 20.2135 26.1249 21.4006C26.393 22.5876 26.219 23.8317 25.6354 24.8997C25.0518 25.9676 24.0988 26.786 22.955 27.2016C21.8112 27.6171 20.555 27.6012 19.4221 27.1569C18.2891 26.7125 17.3572 25.8702 16.8008 24.7879C16.2445 23.7055 16.102 22.4574 16.4 21.2775V21.2788ZM7.50001 17.5C8.16305 17.5 8.79894 17.2366 9.26778 16.7678C9.73662 16.2989 10 15.663 10 15C10 14.337 9.73662 13.7011 9.26778 13.2322C8.79894 12.7634 8.16305 12.5 7.50001 12.5C6.83697 12.5 6.20109 12.7634 5.73225 13.2322C5.26341 13.7011 5.00001 14.337 5.00001 15C5.00001 15.663 5.26341 16.2989 5.73225 16.7678C6.20109 17.2366 6.83697 17.5 7.50001 17.5ZM21.25 10C21.9131 10 22.5489 9.73661 23.0178 9.26777C23.4866 8.79893 23.75 8.16304 23.75 7.5C23.75 6.83696 23.4866 6.20107 23.0178 5.73223C22.5489 5.26339 21.9131 5 21.25 5C20.587 5 19.9511 5.26339 19.4822 5.73223C19.0134 6.20107 18.75 6.83696 18.75 7.5C18.75 8.16304 19.0134 8.79893 19.4822 9.26777C19.9511 9.73661 20.587 10 21.25 10ZM21.25 25C21.9131 25 22.5489 24.7366 23.0178 24.2678C23.4866 23.7989 23.75 23.163 23.75 22.5C23.75 21.837 23.4866 21.2011 23.0178 20.7322C22.5489 20.2634 21.9131 20 21.25 20C20.587 20 19.9511 20.2634 19.4822 20.7322C19.0134 21.2011 18.75 21.837 18.75 22.5C18.75 23.163 19.0134 23.7989 19.4822 24.2678C19.9511 24.7366 20.587 25 21.25 25Z" fill=${color}/>
    </g>
    <defs>
    <clipPath id="clip0_62_4141">
    <rect width="30" height="30" fill="white"/>
    </clipPath>
    </defs>
    </svg>
    `
    return (
        <SvgXml xml={xml} width={w} height={h} />
    );
}

export const inVisibilityIcon = (w?: any, h?: any, color?: any) => {
    const xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <mask id="mask0_515_575" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
    <rect width="24" height="24" fill="#D9D9D9"/>
    </mask>
    <g mask="url(#mask0_515_575)">
    <path d="M19.8 22.5998L15.6 18.4498C15.0167 18.6331 14.4292 18.7706 13.8375 18.8623C13.2458 18.954 12.6333 18.9998 12 18.9998C9.48333 18.9998 7.24167 18.304 5.275 16.9123C3.30833 15.5206 1.88333 13.7165 1 11.4998C1.35 10.6165 1.79167 9.79564 2.325 9.03731C2.85833 8.27897 3.46667 7.5998 4.15 6.9998L1.4 4.1998L2.8 2.7998L21.2 21.1998L19.8 22.5998ZM12 15.9998C12.1833 15.9998 12.3542 15.9915 12.5125 15.9748C12.6708 15.9581 12.8417 15.9248 13.025 15.8748L7.625 10.4748C7.575 10.6581 7.54167 10.829 7.525 10.9873C7.50833 11.1456 7.5 11.3165 7.5 11.4998C7.5 12.7498 7.9375 13.8123 8.8125 14.6873C9.6875 15.5623 10.75 15.9998 12 15.9998ZM19.3 16.4498L16.125 13.2998C16.2417 13.0165 16.3333 12.729 16.4 12.4373C16.4667 12.1456 16.5 11.8331 16.5 11.4998C16.5 10.2498 16.0625 9.18731 15.1875 8.3123C14.3125 7.4373 13.25 6.9998 12 6.9998C11.6667 6.9998 11.3542 7.03314 11.0625 7.0998C10.7708 7.16647 10.4833 7.26647 10.2 7.39981L7.65 4.8498C8.33333 4.56647 9.03333 4.35397 9.75 4.2123C10.4667 4.07064 11.2167 3.9998 12 3.9998C14.5167 3.9998 16.7583 4.69564 18.725 6.08731C20.6917 7.47897 22.1167 9.28314 23 11.4998C22.6167 12.4831 22.1125 13.3956 21.4875 14.2373C20.8625 15.079 20.1333 15.8165 19.3 16.4498ZM14.675 11.8498L11.675 8.84981C12.1417 8.76647 12.5708 8.80397 12.9625 8.96231C13.3542 9.12064 13.6917 9.34981 13.975 9.64981C14.2583 9.94981 14.4625 10.2956 14.5875 10.6873C14.7125 11.079 14.7417 11.4665 14.675 11.8498Z" fill="#1C1B1F"/>
    </g>
    </svg>
    `
    return (
        <SvgXml xml={xml} width={w} height={h} />
    );
}

export const visibilityIcon = (w?: any, h?: any, color?: any) => {
    const xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <mask id="mask0_515_593" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
    <rect width="24" height="24" fill="#D9D9D9"/>
    </mask>
    <g mask="url(#mask0_515_593)">
    <path d="M12 16C13.25 16 14.3125 15.5625 15.1875 14.6875C16.0625 13.8125 16.5 12.75 16.5 11.5C16.5 10.25 16.0625 9.1875 15.1875 8.3125C14.3125 7.4375 13.25 7 12 7C10.75 7 9.6875 7.4375 8.8125 8.3125C7.9375 9.1875 7.5 10.25 7.5 11.5C7.5 12.75 7.9375 13.8125 8.8125 14.6875C9.6875 15.5625 10.75 16 12 16ZM12 14.2C11.25 14.2 10.6125 13.9375 10.0875 13.4125C9.5625 12.8875 9.3 12.25 9.3 11.5C9.3 10.75 9.5625 10.1125 10.0875 9.5875C10.6125 9.0625 11.25 8.8 12 8.8C12.75 8.8 13.3875 9.0625 13.9125 9.5875C14.4375 10.1125 14.7 10.75 14.7 11.5C14.7 12.25 14.4375 12.8875 13.9125 13.4125C13.3875 13.9375 12.75 14.2 12 14.2ZM12 19C9.56667 19 7.35 18.3208 5.35 16.9625C3.35 15.6042 1.9 13.7833 1 11.5C1.9 9.21667 3.35 7.39583 5.35 6.0375C7.35 4.67917 9.56667 4 12 4C14.4333 4 16.65 4.67917 18.65 6.0375C20.65 7.39583 22.1 9.21667 23 11.5C22.1 13.7833 20.65 15.6042 18.65 16.9625C16.65 18.3208 14.4333 19 12 19Z" fill="#1C1B1F"/>
    </g>
    </svg>    
    `
    return (
        <SvgXml xml={xml} width={w} height={h} />
    );
}

export const unCheckIcon = (w?: any, h?: any, color?: any) => {
    const xml = `<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <mask id="mask0_515_599" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="25" height="25">
    <rect x="0.386963" y="0.504883" width="24" height="24" fill="#D9D9D9"/>
    </mask>
    <g mask="url(#mask0_515_599)">
    <path d="M5.38696 21.5049C4.83696 21.5049 4.36613 21.309 3.97446 20.9174C3.5828 20.5257 3.38696 20.0549 3.38696 19.5049V5.50488C3.38696 4.95488 3.5828 4.48405 3.97446 4.09238C4.36613 3.70072 4.83696 3.50488 5.38696 3.50488H19.387C19.937 3.50488 20.4078 3.70072 20.7995 4.09238C21.1911 4.48405 21.387 4.95488 21.387 5.50488V19.5049C21.387 20.0549 21.1911 20.5257 20.7995 20.9174C20.4078 21.309 19.937 21.5049 19.387 21.5049H5.38696ZM5.38696 19.5049H19.387V5.50488H5.38696V19.5049Z" fill="#1C1B1F"/>
    </g>
    </svg>
    `
    return (
        <SvgXml xml={xml} width={w} height={h} />
    );
}

export const checkIcon = (w?: any, h?: any, color?: any) => {
    const xml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <mask id="mask0_515_605" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
    <rect width="24" height="24" fill="#D9D9D9"/>
    </mask>
    <g mask="url(#mask0_515_605)">
    <path d="M10.6 16.2L17.65 9.15L16.25 7.75L10.6 13.4L7.75 10.55L6.35 11.95L10.6 16.2ZM5 21C4.45 21 3.97917 20.8042 3.5875 20.4125C3.19583 20.0208 3 19.55 3 19V5C3 4.45 3.19583 3.97917 3.5875 3.5875C3.97917 3.19583 4.45 3 5 3H19C19.55 3 20.0208 3.19583 20.4125 3.5875C20.8042 3.97917 21 4.45 21 5V19C21 19.55 20.8042 20.0208 20.4125 20.4125C20.0208 20.8042 19.55 21 19 21H5Z" fill="#1C1B1F"/>
    </g>
    </svg>    
    `
    return (
        <SvgXml xml={xml} width={w} height={h} />
    );
}

export const notiBellIcon = (w?: any, h?: any, color?: any) => {
    const xml = `
    <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.1765 29.6667V31.3333C15.1765 34.0948 17.415 35.5 20.1765 35.5C22.9379 35.5 25.1765 34.0948 25.1765 31.3333V29.6667M10.1764 14.6667C10.1764 9.14382 14.6536 6.33334 20.1764 6.33334C25.6993 6.33334 30.1764 9.14382 30.1764 14.6667C30.1764 17.8986 31.3515 21.5222 32.5624 24.3982C33.5678 26.7862 31.8801 29.6667 29.2891 29.6667H11.0637C8.47275 29.6667 6.78509 26.7862 7.79048 24.3982C9.00133 21.5222 10.1764 17.8986 10.1764 14.6667Z" stroke="#FBF8F2" style="stroke:#FBF8F2;stroke:color(display-p3 0.9843 0.9725 0.9490);stroke-opacity:1;" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    `
    return (
        <SvgXml xml={xml} width={w} height={h} />
    );
}

export const weeklyAchiveIcon = (w?: any, h?: any, color?: any) => {
    const xml = `<svg width="26" height="30" viewBox="0 0 26 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_587_4029)">
    <path d="M1.568 16.675L1.544 8.216C1.539 6.334 2.75 4.942 4.556 5.246C4.913 5.306 5.498 5.491 5.806 5.656L7.497 6.561L10.747 2.464C11.2926 1.77639 12.1223 1.37556 13 1.37556C13.8777 1.37556 14.7074 1.77639 15.253 2.464L22.023 11C23.6231 12.9393 24.4989 15.3748 24.5 17.889C24.5 24.034 19.343 29 13 29C6.657 29 1.5 24.034 1.5 17.889C1.5 17.481 1.523 17.076 1.568 16.675Z" fill="#FF9600" style="fill:#FF9600;fill:color(display-p3 1.0000 0.5882 0.0000);fill-opacity:1;"/>
    <path d="M8.73689 15.1307C8.75455 15.0843 8.77797 15.0405 8.80656 15.0002L12.0454 10.4734C12.2582 10.1758 12.5963 10 12.956 10C13.3157 10 13.6538 10.1758 13.8666 10.4734L16.9502 14.7833C17.9392 15.7802 18.4975 17.1424 18.5 18.565C18.5 21.5666 16.0372 24 13 24C9.96278 24 7.5 21.5666 7.5 18.565C7.5 17.2618 7.96444 16.0664 8.73689 15.1307Z" fill="#FFC800" style="fill:#FFC800;fill:color(display-p3 1.0000 0.7843 0.0000);fill-opacity:1;"/>
    </g>
    <defs>
    <clipPath id="clip0_587_4029">
    <rect width="25" height="30" fill="white" style="fill:white;fill-opacity:1;" transform="translate(0.5)"/>
    </clipPath>
    </defs>
    </svg>
    `
    return (
        <SvgXml xml={xml} width={w} height={h} />
    );
}

export const weeklyAchivedIcon = (w?: any, h?: any, color?: any) => {
    const xml = `<svg width="26" height="30" viewBox="0 0 26 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_587_4014)">
    <g clip-path="url(#clip1_587_4014)">
    <path d="M1.568 16.675L1.544 8.216C1.539 6.334 2.75 4.942 4.556 5.246C4.913 5.306 5.498 5.491 5.806 5.656L7.497 6.561L10.747 2.464C11.2926 1.77639 12.1223 1.37556 13 1.37556C13.8777 1.37556 14.7074 1.77639 15.253 2.464L22.023 11C23.6231 12.9393 24.4989 15.3748 24.5 17.889C24.5 24.034 19.343 29 13 29C6.657 29 1.5 24.034 1.5 17.889C1.5 17.481 1.523 17.076 1.568 16.675Z" fill="#FF9600" stroke="#FF9600" style="fill:#FF9600;fill:color(display-p3 1.0000 0.5882 0.0000);fill-opacity:1;stroke:#FF9600;stroke:color(display-p3 1.0000 0.5882 0.0000);stroke-opacity:1;" stroke-width="2"/>
    <path d="M8.73689 15.1307C8.75455 15.0843 8.77797 15.0405 8.80656 15.0002L12.0454 10.4734C12.2582 10.1758 12.5963 10 12.956 10C13.3157 10 13.6538 10.1758 13.8666 10.4734L16.9502 14.7833C17.9392 15.7802 18.4975 17.1424 18.5 18.565C18.5 21.5666 16.0372 24 13 24C9.96278 24 7.5 21.5666 7.5 18.565C7.5 17.2618 7.96444 16.0664 8.73689 15.1307Z" fill="#FFC800" style="fill:#FFC800;fill:color(display-p3 1.0000 0.7843 0.0000);fill-opacity:1;"/>
    <path d="M10.8333 18.78L12.5856 20.5323C12.6469 20.5934 12.7299 20.6278 12.8164 20.6278C12.903 20.6278 12.986 20.5934 13.0472 20.5323L16.3932 17.1863" stroke="#F16A4B" style="stroke:#F16A4B;stroke:color(display-p3 0.9451 0.4157 0.2941);stroke-opacity:1;" stroke-linecap="round"/>
    </g>
    </g>
    <defs>
    <clipPath id="clip0_587_4014">
    <rect width="25" height="30" fill="white" style="fill:white;fill-opacity:1;" transform="translate(0.5)"/>
    </clipPath>
    <clipPath id="clip1_587_4014">
    <rect width="25" height="30" fill="white" style="fill:white;fill-opacity:1;" transform="translate(0.5)"/>
    </clipPath>
    </defs>
    </svg>
    `
    return (
        <SvgXml xml={xml} width={w} height={h} />
    );
}

export const weeklyAwaitAchieveIcon = (w?: any, h?: any, color?: any) => {
    const xml = `<svg width="26" height="30" viewBox="0 0 26 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.568 16.4872L1.544 8.02822C1.539 6.14622 2.75 4.75422 4.556 5.05822C4.913 5.11822 5.498 5.30322 5.806 5.46822L7.497 6.37322L10.747 2.27622C11.2926 1.58861 12.1223 1.18778 13 1.18778C13.8777 1.18778 14.7074 1.58861 15.253 2.27622L22.023 10.8122C23.6231 12.7515 24.4989 15.187 24.5 17.7012C24.5 23.8462 19.343 28.8122 13 28.8122C6.657 28.8122 1.5 23.8462 1.5 17.7012C1.5 17.2932 1.523 16.8882 1.568 16.4872Z" fill="#474747" stroke="#474747" style="fill:#474747;fill:color(display-p3 0.2792 0.2792 0.2792);fill-opacity:1;stroke:#474747;stroke:color(display-p3 0.2792 0.2792 0.2792);stroke-opacity:1;" stroke-width="2"/>
    <path d="M8.73689 15.3185C8.75455 15.2721 8.77797 15.2283 8.80656 15.188L12.0454 10.6612C12.2582 10.3636 12.5963 10.1878 12.956 10.1878C13.3157 10.1878 13.6538 10.3636 13.8666 10.6612L16.9502 14.971C17.9392 15.9679 18.4975 17.3302 18.5 18.7528C18.5 21.7544 16.0372 24.1878 13 24.1878C9.96278 24.1878 7.5 21.7544 7.5 18.7528C7.5 17.4496 7.96444 16.2542 8.73689 15.3185Z" fill="#656565" style="fill:#656565;fill:color(display-p3 0.3958 0.3942 0.3942);fill-opacity:1;"/>
    <path d="M10.8333 18.9677L12.5856 20.7201C12.6469 20.7812 12.7299 20.8155 12.8164 20.8155C12.903 20.8155 12.986 20.7812 13.0472 20.7201L16.3932 17.3741" stroke="#A4A2A2" style="stroke:#A4A2A2;stroke:color(display-p3 0.6414 0.6361 0.6361);stroke-opacity:1;" stroke-linecap="round"/>
    </svg>    
    `
    return (
        <SvgXml xml={xml} width={w} height={h} />
    );
}

export const someFkCurvedIcon = (w?: any, h?: any, color?: any) => {
    const xml = `<svg width="112" height="14" viewBox="0 0 112 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24.7248 8.70199C45.0385 15.3907 66.9615 15.3907 87.2752 8.70203L111.426 0.75H0.574463L24.7248 8.70199Z" fill="white" style="fill:white;fill-opacity:1;"/>
    </svg>    
    `
    return (
        <SvgXml xml={xml} width={w} height={h} />
    );
}

export const goldStar = (w?: any, h?: any, color?: any) => {
    const xml = `<svg width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.36586 0.681463L5.22603 2.52662C5.29376 2.67184 5.42461 2.77248 5.57604 2.79582L7.49945 3.09172C7.88075 3.15043 8.03298 3.64635 7.75704 3.93107L6.36531 5.36724C6.25573 5.48032 6.20582 5.64316 6.23157 5.80278L6.56006 7.83076C6.62515 8.23275 6.22655 8.53927 5.88565 8.3496L4.16531 7.39215C4.02985 7.31681 3.86811 7.31681 3.73265 7.39215L2.01231 8.3496C1.67128 8.53941 1.27268 8.23289 1.3379 7.83076L1.66639 5.80278C1.69227 5.64316 1.64223 5.48018 1.53264 5.36724L0.140923 3.93107C-0.135019 3.64635 0.0172116 3.15029 0.398512 3.09172L2.32192 2.79582C2.47335 2.77248 2.6042 2.67184 2.67193 2.52662L3.5321 0.681463C3.70268 0.315814 4.19541 0.315814 4.36586 0.681463Z" fill="#F1C303" style="fill:#F1C303;fill:color(display-p3 0.9458 0.7659 0.0118);fill-opacity:1;"/>
    </svg>
    `
    return (
        <SvgXml xml={xml} width={w} height={h} />
    );
}

export const noStar = (w?: any, h?: any, color?: any) => {
    const xml = `<svg width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.36586 0.409978L5.22603 2.25513C5.29376 2.40036 5.42461 2.50099 5.57604 2.52434L7.49945 2.82024C7.88075 2.87894 8.03298 3.37486 7.75704 3.65958L6.36531 5.09576C6.25573 5.20883 6.20582 5.37167 6.23157 5.53129L6.56006 7.55927C6.62515 7.96126 6.22655 8.26779 5.88565 8.07811L4.16531 7.12066C4.02985 7.04532 3.86811 7.04532 3.73265 7.12066L2.01231 8.07811C1.67128 8.26793 1.27268 7.9614 1.3379 7.55927L1.66639 5.53129C1.69227 5.37167 1.64223 5.20869 1.53264 5.09576L0.140923 3.65958C-0.135019 3.37486 0.0172116 2.8788 0.398512 2.82024L2.32192 2.52434C2.47335 2.50099 2.6042 2.40036 2.67193 2.25513L3.5321 0.409978C3.70268 0.0443301 4.19541 0.0443301 4.36586 0.409978Z" fill="#A4A4A4" style="fill:#A4A4A4;fill:color(display-p3 0.6417 0.6417 0.6417);fill-opacity:1;"/>
    </svg>
    `
    return (
        <SvgXml xml={xml} width={w} height={h} />
    );
}

export const lockIcon = (w?: any, h?: any, color?: any) => {
    const xml = `<svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 8.59387V6.02148C12 4.36463 10.6569 3.02148 9 3.02148C7.34315 3.02148 6 4.36463 6 6.02148V8.59387M12 8.59387C11.2407 8.36655 10.2565 8.27148 9 8.27148C7.74355 8.27148 6.75932 8.36655 6 8.59387M12 8.59387C13.6669 9.0929 14.25 10.2293 14.25 12.3965C14.25 15.5509 13.0147 16.5215 9 16.5215C4.98529 16.5215 3.75 15.5509 3.75 12.3965C3.75 10.2293 4.33308 9.0929 6 8.59387" stroke="white" style="stroke:white;stroke-opacity:1;" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    `
    return (
        <SvgXml xml={xml} width={w} height={h} />
    );
}

export const peopleIcon = (w?: any, h?: any, color?: any) => {
    const xml = `<svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.25 10.7715C15.9069 10.7715 17.25 12.2715 17.25 13.3965C17.25 14.0178 16.7463 14.5215 16.125 14.5215H15.75M12.75 8.52148C13.9926 8.52148 15 7.51413 15 6.27148C15 5.02884 13.9926 4.02148 12.75 4.02148M3.75 10.7715C2.09315 10.7715 0.75 12.2715 0.75 13.3965C0.75 14.0178 1.25368 14.5215 1.875 14.5215H2.25M5.25 8.52148C4.00736 8.52148 3 7.51413 3 6.27148C3 5.02884 4.00736 4.02148 5.25 4.02148M12.375 14.5215H5.625C5.00368 14.5215 4.5 14.0178 4.5 13.3965C4.5 11.5215 6.75 10.7715 9 10.7715C11.25 10.7715 13.5 11.5215 13.5 13.3965C13.5 14.0178 12.9963 14.5215 12.375 14.5215ZM11.25 6.27148C11.25 7.51412 10.2426 8.52148 9 8.52148C7.75736 8.52148 6.75 7.51412 6.75 6.27148C6.75 5.02884 7.75736 4.02148 9 4.02148C10.2426 4.02148 11.25 5.02884 11.25 6.27148Z" stroke="white" style="stroke:white;stroke-opacity:1;" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    `
    return (
        <SvgXml xml={xml} width={w} height={h} />
    );
}

export const savedIcon = (w?: any, h?: any, color?: any) => {
    const xml = `<svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.5 6.27148C4.5 4.16051 6 3.27148 9 3.27148C12 3.27148 13.5 4.16051 13.5 6.27148V14.5858C13.5 15.254 12.6921 15.5886 12.2197 15.1162L9.53033 12.4268C9.23744 12.1339 8.76256 12.1339 8.46967 12.4268L5.78033 15.1162C5.30786 15.5886 4.5 15.254 4.5 14.5858V6.27148Z" fill="#FBF8F2" stroke="white" style="fill:#FBF8F2;fill:color(display-p3 0.9843 0.9725 0.9490);fill-opacity:1;stroke:white;stroke-opacity:1;" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    `
    return (
        <SvgXml xml={xml} width={w} height={h} />
    );
}

export const unSavedIcon = (w?: any, h?: any, color?: any) => {
    const xml = `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.5 6C4.5 3.88902 6 3 9 3C12 3 13.5 3.88902 13.5 6V14.3143C13.5 14.9825 12.6921 15.3171 12.2197 14.8447L9.53033 12.1553C9.23744 11.8624 8.76256 11.8624 8.46967 12.1553L5.78033 14.8447C5.30786 15.3171 4.5 14.9825 4.5 14.3143V6Z" stroke="white" style="stroke:white;stroke-opacity:1;" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    `
    return (
        <SvgXml xml={xml} width={w} height={h} />
    );
}

// bottom tab icons
export const HomeIcon = (w?: any, h?: any) => {
    const xml = `<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.4996 7.7626C7.96095 6.30125 9.59314 5.18159 10.6971 4.50348C11.5017 4.00926 12.4975 4.00926 13.3021 4.50348C14.4061 5.18159 16.0382 6.30125 17.4996 7.7626C20.668 10.931 20.4996 12.7626 20.4996 15.7626C20.4996 17.1724 20.3892 18.3614 20.2721 19.2258C20.149 20.1352 19.3558 20.7626 18.438 20.7626H16.9996C15.895 20.7626 14.9996 19.8672 14.9996 18.7626V16.7626C14.9996 15.967 14.6835 15.2039 14.1209 14.6413C13.5583 14.0787 12.7952 13.7626 11.9996 13.7626C11.2039 13.7626 10.4409 14.0787 9.87828 14.6413C9.31567 15.2039 8.9996 15.967 8.9996 16.7626V18.7626C8.9996 19.8672 8.10417 20.7626 6.9996 20.7626H5.56115C4.64342 20.7626 3.85025 20.1352 3.72708 19.2257C3.61002 18.3614 3.4996 17.1724 3.4996 15.7626C3.4996 12.7626 3.3312 10.931 6.4996 7.7626Z" fill="black" style="fill:black;fill-opacity:1;"/><path d="M6.4996 7.7626C7.96095 6.30125 9.59314 5.18159 10.6971 4.50348C11.5017 4.00926 12.4975 4.00926 13.3021 4.50348C14.4061 5.18159 16.0382 6.30125 17.4996 7.7626C20.668 10.931 20.4996 12.7626 20.4996 15.7626C20.4996 17.1724 20.3892 18.3614 20.2721 19.2258C20.149 20.1352 19.3558 20.7626 18.438 20.7626H16.9996C15.895 20.7626 14.9996 19.8672 14.9996 18.7626V16.7626C14.9996 15.967 14.6835 15.2039 14.1209 14.6413C13.5583 14.0787 12.7952 13.7626 11.9996 13.7626C11.2039 13.7626 10.4409 14.0787 9.87828 14.6413C9.31567 15.2039 8.9996 15.967 8.9996 16.7626V18.7626C8.9996 19.8672 8.10417 20.7626 6.9996 20.7626H5.56115C4.64342 20.7626 3.85025 20.1352 3.72708 19.2257C3.61002 18.3614 3.4996 17.1724 3.4996 15.7626C3.4996 12.7626 3.3312 10.931 6.4996 7.7626Z" stroke="black" style="stroke:black;stroke-opacity:1;" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`
    return (
        <SvgXml xml={xml} width={w} height={h} />
    );
}

export const HomeIconInactive = (w?: any, h?: any) => {
    const xml = `<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.4996 7.7626C7.96094 6.30125 9.59314 5.18159 10.6971 4.50348C11.5017 4.00926 12.4975 4.00926 13.3021 4.50348C14.4061 5.18159 16.0382 6.30125 17.4996 7.7626C20.668 10.931 20.4996 12.7626 20.4996 15.7626C20.4996 17.1724 20.3892 18.3614 20.2721 19.2258C20.149 20.1352 19.3558 20.7626 18.438 20.7626H16.9996C15.895 20.7626 14.9996 19.8672 14.9996 18.7626V16.7626C14.9996 15.967 14.6835 15.2039 14.1209 14.6413C13.5583 14.0787 12.7952 13.7626 11.9996 13.7626C11.2039 13.7626 10.4409 14.0787 9.87828 14.6413C9.31567 15.2039 8.9996 15.967 8.9996 16.7626V18.7626C8.9996 19.8672 8.10417 20.7626 6.9996 20.7626H5.56115C4.64342 20.7626 3.85025 20.1352 3.72708 19.2257C3.61002 18.3614 3.4996 17.1724 3.4996 15.7626C3.4996 12.7626 3.3312 10.931 6.4996 7.7626Z" stroke="#2F2F2F" style="stroke:#2F2F2F;stroke:color(display-p3 0.1843 0.1843 0.1843);stroke-opacity:1;" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`
    return (
        <SvgXml xml={xml} width={w} height={h} />
    );
}

export const LibraryIcon = (w?: any, h?: any) => {
    const xml = `<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.55933 3.7627C4.69168 3.7627 3.80933 4.64505 3.80933 7.5127C3.80933 10.3803 4.69168 11.2627 7.55933 11.2627C10.427 11.2627 11.3093 10.3803 11.3093 7.5127C11.3093 4.64505 10.427 3.7627 7.55933 3.7627Z" fill="black" style="fill:black;fill-opacity:1;"/><path d="M7.55933 14.2627C4.69168 14.2627 3.80933 15.145 3.80933 18.0127C3.80933 20.8803 4.69168 21.7627 7.55933 21.7627C10.427 21.7627 11.3093 20.8803 11.3093 18.0127C11.3093 15.145 10.427 14.2627 7.55933 14.2627Z" fill="black" style="fill:black;fill-opacity:1;"/><path d="M18.0593 14.2627C15.1917 14.2627 14.3093 15.145 14.3093 18.0127C14.3093 20.8803 15.1917 21.7627 18.0593 21.7627C20.927 21.7627 21.8093 20.8803 21.8093 18.0127C21.8093 15.145 20.927 14.2627 18.0593 14.2627Z" fill="black" style="fill:black;fill-opacity:1;"/><path d="M18.0593 3.7627C15.1917 3.7627 14.3093 4.64505 14.3093 7.5127C14.3093 10.3803 15.1917 11.2627 18.0593 11.2627C20.927 11.2627 21.8093 10.3803 21.8093 7.5127C21.8093 4.64505 20.927 3.7627 18.0593 3.7627Z" fill="black" style="fill:black;fill-opacity:1;"/><path d="M7.55933 3.7627C4.69168 3.7627 3.80933 4.64505 3.80933 7.5127C3.80933 10.3803 4.69168 11.2627 7.55933 11.2627C10.427 11.2627 11.3093 10.3803 11.3093 7.5127C11.3093 4.64505 10.427 3.7627 7.55933 3.7627Z" stroke="black" style="stroke:black;stroke-opacity:1;" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M7.55933 14.2627C4.69168 14.2627 3.80933 15.145 3.80933 18.0127C3.80933 20.8803 4.69168 21.7627 7.55933 21.7627C10.427 21.7627 11.3093 20.8803 11.3093 18.0127C11.3093 15.145 10.427 14.2627 7.55933 14.2627Z" stroke="black" style="stroke:black;stroke-opacity:1;" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M18.0593 14.2627C15.1917 14.2627 14.3093 15.145 14.3093 18.0127C14.3093 20.8803 15.1917 21.7627 18.0593 21.7627C20.927 21.7627 21.8093 20.8803 21.8093 18.0127C21.8093 15.145 20.927 14.2627 18.0593 14.2627Z" stroke="black" style="stroke:black;stroke-opacity:1;" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M18.0593 3.7627C15.1917 3.7627 14.3093 4.64505 14.3093 7.5127C14.3093 10.3803 15.1917 11.2627 18.0593 11.2627C20.927 11.2627 21.8093 10.3803 21.8093 7.5127C21.8093 4.64505 20.927 3.7627 18.0593 3.7627Z" stroke="black" style="stroke:black;stroke-opacity:1;" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`
    return (
        <SvgXml xml={xml} width={w} height={h} />
    );
}

export const LibraryIconInactive = (w?: any, h?: any) => {
    const xml = `<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.55933 3.7627C4.69168 3.7627 3.80933 4.64505 3.80933 7.5127C3.80933 10.3803 4.69168 11.2627 7.55933 11.2627C10.427 11.2627 11.3093 10.3803 11.3093 7.5127C11.3093 4.64505 10.427 3.7627 7.55933 3.7627Z" stroke="#2F2F2F" style="stroke:#2F2F2F;stroke:color(display-p3 0.1843 0.1843 0.1843);stroke-opacity:1;" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M7.55933 14.2627C4.69168 14.2627 3.80933 15.145 3.80933 18.0127C3.80933 20.8803 4.69168 21.7627 7.55933 21.7627C10.427 21.7627 11.3093 20.8803 11.3093 18.0127C11.3093 15.145 10.427 14.2627 7.55933 14.2627Z" stroke="#2F2F2F" style="stroke:#2F2F2F;stroke:color(display-p3 0.1843 0.1843 0.1843);stroke-opacity:1;" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M18.0593 14.2627C15.1917 14.2627 14.3093 15.145 14.3093 18.0127C14.3093 20.8803 15.1917 21.7627 18.0593 21.7627C20.927 21.7627 21.8093 20.8803 21.8093 18.0127C21.8093 15.145 20.927 14.2627 18.0593 14.2627Z" stroke="#2F2F2F" style="stroke:#2F2F2F;stroke:color(display-p3 0.1843 0.1843 0.1843);stroke-opacity:1;" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M18.0593 3.7627C15.1917 3.7627 14.3093 4.64505 14.3093 7.5127C14.3093 10.3803 15.1917 11.2627 18.0593 11.2627C20.927 11.2627 21.8093 10.3803 21.8093 7.5127C21.8093 4.64505 20.927 3.7627 18.0593 3.7627Z" stroke="#2F2F2F" style="stroke:#2F2F2F;stroke:color(display-p3 0.1843 0.1843 0.1843);stroke-opacity:1;" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`
    return (
        <SvgXml xml={xml} width={w} height={h} />
    );
}

export const AddIcon = (w?: any, h?: any) => {
    const xml = `<svg width="120" height="105" viewBox="0 0 120 105" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_d_587_1985)"><rect x="24.6187" width="70.7627" height="70.7627" rx="35.3813" fill="#86DFD0" style="fill:#86DFD0;fill-opacity:1;"/><path d="M51.5708 35.0664H67.5708" stroke="white" style="stroke:white;stroke-opacity:1;" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M59.5708 43.0664V27.0664" stroke="white" style="stroke:white;stroke-opacity:1;" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></g><defs><filter id="filter0_d_587_1985" x="0.618654" y="0" width="118.763" height="119.763" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="25"/><feGaussianBlur stdDeviation="12"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0.466667 0 0 0 0 0.388235 0 0 0 0 0.964706 0 0 0 0.1 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_587_1985"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_587_1985" result="shape"/></filter></defs></svg>`
    return (
        <SvgXml xml={xml} width={w} height={h} />
    );
}

export const AddIconInactive = (w?: any, h?: any) => {
    const xml = `<svg width="120" height="130" viewBox="0 0 95 130" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><rect width="95" height="84" fill="url(#pattern0_739_4897)" style=""/><defs><pattern id="pattern0_739_4897" patternContentUnits="objectBoundingBox" width="1" height="1"><use xlink:href="#image0_739_4897" transform="scale(0.00526316 0.00595238)"/></pattern><image id="image0_739_4897" width="190" height="190" xlink:href="data:image/png;base64,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"/></defs></svg>`
    return (
        <SvgXml xml={xml} width={w} height={h} />
    );
}

export const NewFeedIcon = (w?: any, h?: any) => {
    const xml = `<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.6907 21.7628H3.69067C2.30996 21.7628 1.19067 20.6435 1.19067 19.2628C1.19067 15.1821 7.19067 15.2628 9.19067 15.2628C11.1907 15.2628 17.1907 15.1821 17.1907 19.2628C17.1907 20.6435 16.0714 21.7628 14.6907 21.7628Z" fill="black" style="fill:black;fill-opacity:1;"/><path d="M9.19067 11.7627C11.3998 11.7627 13.1907 9.97183 13.1907 7.7627C13.1907 5.55356 11.3998 3.7627 9.19067 3.7627C6.98153 3.7627 5.19067 5.55356 5.19067 7.7627C5.19067 9.97183 6.98153 11.7627 9.19067 11.7627Z" fill="black" style="fill:black;fill-opacity:1;"/><path d="M20.6907 21.7627C22.0714 21.7627 23.1907 20.6434 23.1907 19.2627C23.1907 16.9352 21.2389 15.9615 19.1907 15.5544M15.1907 11.7627C17.3998 11.7627 19.1907 9.97183 19.1907 7.7627C19.1907 5.55356 17.3998 3.7627 15.1907 3.7627M3.69067 21.7628H14.6907C16.0714 21.7628 17.1907 20.6435 17.1907 19.2628C17.1907 15.1821 11.1907 15.2628 9.19067 15.2628C7.19067 15.2628 1.19067 15.1821 1.19067 19.2628C1.19067 20.6435 2.30996 21.7628 3.69067 21.7628ZM13.1907 7.7627C13.1907 9.97183 11.3998 11.7627 9.19067 11.7627C6.98153 11.7627 5.19067 9.97183 5.19067 7.7627C5.19067 5.55356 6.98153 3.7627 9.19067 3.7627C11.3998 3.7627 13.1907 5.55356 13.1907 7.7627Z" stroke="black" style="stroke:black;stroke-opacity:1;" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`
    return (
        <SvgXml xml={xml} width={w} height={h} />
    );
}

export const NewFeedIconInactive = (w?: any, h?: any) => {
    const xml = `<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.6907 21.7627C22.0714 21.7627 23.1907 20.6434 23.1907 19.2627C23.1907 16.9352 21.2389 15.9615 19.1907 15.5544M15.1907 11.7627C17.3998 11.7627 19.1907 9.97183 19.1907 7.7627C19.1907 5.55356 17.3998 3.7627 15.1907 3.7627M3.69067 21.7628H14.6907C16.0714 21.7628 17.1907 20.6435 17.1907 19.2628C17.1907 15.1821 11.1907 15.2628 9.19067 15.2628C7.19067 15.2628 1.19067 15.1821 1.19067 19.2628C1.19067 20.6435 2.30996 21.7628 3.69067 21.7628ZM13.1907 7.7627C13.1907 9.97183 11.3998 11.7627 9.19067 11.7627C6.98153 11.7627 5.19067 9.97183 5.19067 7.7627C5.19067 5.55356 6.98153 3.7627 9.19067 3.7627C11.3998 3.7627 13.1907 5.55356 13.1907 7.7627Z" stroke="#2F2F2F" style="stroke:#2F2F2F;stroke:color(display-p3 0.1843 0.1843 0.1843);stroke-opacity:1;" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`
    return (
        <SvgXml xml={xml} width={w} height={h} />
    );
}

export const SettingIcon = (w?: any, h?: any) => {
    const xml = `<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 3.7627H13C13.5523 3.7627 14 4.21041 14 4.7627V5.33148C14 5.75928 14.2871 6.13094 14.6822 6.29498C15.0775 6.45908 15.5377 6.39654 15.8403 6.09392L16.2426 5.6916C16.6331 5.30108 17.2663 5.30108 17.6568 5.6916L19.071 7.10582C19.4616 7.49634 19.4615 8.12951 19.071 8.52003L18.6688 8.92229C18.3661 9.22493 18.3036 9.68516 18.4677 10.0804C18.6317 10.4756 19.0034 10.7627 19.4313 10.7627L20 10.7627C20.5523 10.7627 21 11.2104 21 11.7627V13.7627C21 14.315 20.5523 14.7627 20 14.7627H19.4312C19.0034 14.7627 18.6318 15.0498 18.4677 15.4449C18.3036 15.8402 18.3661 16.3004 18.6688 16.603L19.071 17.0053C19.4616 17.3958 19.4616 18.029 19.071 18.4195L17.6568 19.8337C17.2663 20.2243 16.6331 20.2243 16.2426 19.8337L15.8403 19.4315C15.5377 19.1288 15.0775 19.0663 14.6822 19.2304C14.2871 19.3944 14 19.7661 14 20.1939V20.7627C14 21.315 13.5523 21.7627 13 21.7627H11C10.4477 21.7627 10 21.315 10 20.7627V20.194C10 19.7661 9.71287 19.3944 9.31774 19.2304C8.92247 19.0663 8.46223 19.1288 8.1596 19.4315L7.75732 19.8337C7.36679 20.2243 6.73363 20.2243 6.34311 19.8337L4.92889 18.4195C4.53837 18.029 4.53837 17.3958 4.92889 17.0053L5.33123 16.603C5.63384 16.3004 5.69638 15.8402 5.53228 15.4449C5.36825 15.0498 4.99659 14.7627 4.56879 14.7627H4C3.44772 14.7627 3 14.315 3 13.7627V11.7627C3 11.2104 3.44772 10.7627 4 10.7627L4.56877 10.7627C4.99658 10.7627 5.36825 10.4756 5.53229 10.0805C5.6964 9.6852 5.63386 9.22498 5.33123 8.92236L4.92891 8.52003C4.53838 8.12951 4.53838 7.49634 4.92891 7.10582L6.34312 5.69161C6.73365 5.30108 7.36681 5.30108 7.75734 5.69161L8.15966 6.09393C8.46228 6.39655 8.9225 6.45909 9.31776 6.29499C9.71288 6.13095 10 5.75927 10 5.33146V4.7627C10 4.21041 10.4477 3.7627 11 3.7627Z" stroke="#2F2F2F" style="stroke:#2F2F2F;stroke:color(display-p3 0.1843 0.1843 0.1843);stroke-opacity:1;" stroke-width="1.5" fill="black" style="fill:black;fill-opacity:1;"/><path d="M14 12.7627C14 13.8673 13.1046 14.7627 12 14.7627C10.8954 14.7627 10 13.8673 10 12.7627C10 11.6581 10.8954 10.7627 12 10.7627C13.1046 10.7627 14 11.6581 14 12.7627Z" stroke="white" style="stroke:white;stroke:color(display-p3 0.1843 0.1843 0.1843);stroke-opacity:1;" stroke-width="1.5" fill="white" style="fill:white;fill-opacity:1;"/></svg>`
    return (
        <SvgXml xml={xml} width={w} height={h} />
    );
}

export const SettingIconInactive = (w?: any, h?: any) => {
    const xml = `<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 3.7627H13C13.5523 3.7627 14 4.21041 14 4.7627V5.33148C14 5.75928 14.2871 6.13094 14.6822 6.29498C15.0775 6.45908 15.5377 6.39654 15.8403 6.09392L16.2426 5.6916C16.6331 5.30108 17.2663 5.30108 17.6568 5.6916L19.071 7.10582C19.4616 7.49634 19.4615 8.12951 19.071 8.52003L18.6688 8.92229C18.3661 9.22493 18.3036 9.68516 18.4677 10.0804C18.6317 10.4756 19.0034 10.7627 19.4313 10.7627L20 10.7627C20.5523 10.7627 21 11.2104 21 11.7627V13.7627C21 14.315 20.5523 14.7627 20 14.7627H19.4312C19.0034 14.7627 18.6318 15.0498 18.4677 15.4449C18.3036 15.8402 18.3661 16.3004 18.6688 16.603L19.071 17.0053C19.4616 17.3958 19.4616 18.029 19.071 18.4195L17.6568 19.8337C17.2663 20.2243 16.6331 20.2243 16.2426 19.8337L15.8403 19.4315C15.5377 19.1288 15.0775 19.0663 14.6822 19.2304C14.2871 19.3944 14 19.7661 14 20.1939V20.7627C14 21.315 13.5523 21.7627 13 21.7627H11C10.4477 21.7627 10 21.315 10 20.7627V20.194C10 19.7661 9.71287 19.3944 9.31774 19.2304C8.92247 19.0663 8.46223 19.1288 8.1596 19.4315L7.75732 19.8337C7.36679 20.2243 6.73363 20.2243 6.34311 19.8337L4.92889 18.4195C4.53837 18.029 4.53837 17.3958 4.92889 17.0053L5.33123 16.603C5.63384 16.3004 5.69638 15.8402 5.53228 15.4449C5.36825 15.0498 4.99659 14.7627 4.56879 14.7627H4C3.44772 14.7627 3 14.315 3 13.7627V11.7627C3 11.2104 3.44772 10.7627 4 10.7627L4.56877 10.7627C4.99658 10.7627 5.36825 10.4756 5.53229 10.0805C5.6964 9.6852 5.63386 9.22498 5.33123 8.92236L4.92891 8.52003C4.53838 8.12951 4.53838 7.49634 4.92891 7.10582L6.34312 5.69161C6.73365 5.30108 7.36681 5.30108 7.75734 5.69161L8.15966 6.09393C8.46228 6.39655 8.9225 6.45909 9.31776 6.29499C9.71288 6.13095 10 5.75927 10 5.33146V4.7627C10 4.21041 10.4477 3.7627 11 3.7627Z" stroke="#2F2F2F" style="stroke:#2F2F2F;stroke:color(display-p3 0.1843 0.1843 0.1843);stroke-opacity:1;" stroke-width="1.5"/><path d="M14 12.7627C14 13.8673 13.1046 14.7627 12 14.7627C10.8954 14.7627 10 13.8673 10 12.7627C10 11.6581 10.8954 10.7627 12 10.7627C13.1046 10.7627 14 11.6581 14 12.7627Z" stroke="#2F2F2F" style="stroke:#2F2F2F;stroke:color(display-p3 0.1843 0.1843 0.1843);stroke-opacity:1;" stroke-width="1.5"/></svg>`
    return (
        <SvgXml xml={xml} width={w} height={h} />
    );
}
// end of tab icon