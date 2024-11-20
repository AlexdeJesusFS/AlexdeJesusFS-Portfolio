const construct = ({color="currentColor", size="25", ...props}) => (

    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path stroke={color} stroke-miterlimit="10" stroke-linecap="round"
    d="M13.6459 5.75343C13.4869 5.91148 13.2717 6.00018 13.0475 6.00018C12.8233 6.00018 12.6081 5.91148 12.4491 5.75343L11.7466 5.05062C11.5885 4.89164 11.4997 4.67655 11.4997 4.45234C11.4997 4.22813 11.5885 4.01304 11.7466 3.85406L13.3369 2.26375C13.3399 2.26069 13.3422 2.25693 13.3435 2.2528C13.3448 2.24867 13.345 2.24429 13.3442 2.24004C13.3434 2.23579 13.3416 2.2318 13.3389 2.22841C13.3362 2.22503 13.3327 2.22235 13.3287 2.22062C12.3025 1.78125 10.9716 2.00468 10.1266 2.84375C9.31781 3.64656 9.27187 4.85218 9.56812 5.90625C9.61022 6.05597 9.61012 6.21442 9.56782 6.36409C9.52552 6.51376 9.44268 6.64883 9.32844 6.75437L3.92219 11.7781C3.79315 11.8937 3.68903 12.0343 3.61621 12.1915C3.54338 12.3486 3.50336 12.519 3.49861 12.6921C3.49386 12.8653 3.52448 13.0375 3.58858 13.1985C3.65269 13.3594 3.74893 13.5055 3.87144 13.628C3.99395 13.7504 4.14014 13.8466 4.30109 13.9106C4.46203 13.9746 4.63434 14.0051 4.80748 14.0003C4.98062 13.9955 5.15095 13.9554 5.30806 13.8824C5.46518 13.8095 5.60577 13.7053 5.72125 13.5762L10.7884 8.16062C10.8928 8.04827 11.0259 7.96649 11.1733 7.9241C11.3207 7.8817 11.4769 7.88028 11.625 7.92C12.6706 8.19937 13.8591 8.14687 14.6584 7.35937C15.5175 6.51312 15.7028 5.0175 15.2866 4.16156C15.2847 4.1578 15.2819 4.15455 15.2785 4.15206C15.2751 4.14958 15.2712 4.14793 15.2671 4.14726C15.2629 4.14659 15.2587 4.14691 15.2547 4.1482C15.2507 4.14949 15.247 4.15171 15.2441 4.15468L13.6459 5.75343Z"/>
    <path stroke={color} stroke-linecap="round" stroke-linejoin="round"
    d="M7 8.875C6.45375 8.34375 6.20344 8.09657 6.03125 7.92844C5.94508 7.84283 5.88851 7.73193 5.86979 7.61191C5.85107 7.4919 5.87118 7.36904 5.92719 7.26125C5.95673 7.20826 5.99355 7.15966 6.03656 7.11688L6.52656 6.63907C6.57729 6.58829 6.63693 6.54729 6.7025 6.51813C6.80604 6.4723 6.92095 6.45858 7.03237 6.47874C7.14379 6.49891 7.24659 6.55204 7.3275 6.63125C7.49781 6.79657 7.80969 7.1 8.37156 7.6475M9.90844 9.10313C11.1881 10.2938 12.7403 11.7053 13.3459 12.2097C13.3912 12.247 13.4282 12.2934 13.4545 12.3459C13.4808 12.3984 13.4958 12.4558 13.4985 12.5144C13.5013 12.5731 13.4918 12.6316 13.4706 12.6864C13.4493 12.7411 13.4169 12.7908 13.3753 12.8322L12.3322 13.875C12.2897 13.9165 12.2393 13.9489 12.1839 13.9703C12.1285 13.9916 12.0694 14.0015 12.0101 13.9993C11.9507 13.9971 11.8925 13.9828 11.8389 13.9573C11.7852 13.9319 11.7374 13.8958 11.6981 13.8513C11.1816 13.2519 9.78906 11.7541 8.59594 10.5075"/>
    <path stroke={color} stroke-linecap="round" stroke-linejoin="round"
    d="M0.541874 6.04688L1.46094 5.14875C1.47496 5.13494 1.49163 5.12408 1.50993 5.11683C1.52824 5.10959 1.54782 5.10609 1.5675 5.10656C1.60717 5.10614 1.64543 5.12128 1.67406 5.14875C1.70734 5.18167 1.74769 5.20658 1.79204 5.22158C1.83638 5.23658 1.88357 5.24128 1.93 5.23531C2.04969 5.22219 2.1775 5.18531 2.26031 5.10656C2.44781 4.92531 2.23094 4.56813 2.39594 4.33969C2.58461 4.08962 2.79119 3.85358 3.01406 3.63344C3.20156 3.44969 3.94656 2.74844 5.19844 2.24438C5.59878 2.08255 6.02662 1.99957 6.45844 2C7.16437 2 7.70844 2.3125 7.90406 2.48969C8.02148 2.6014 8.12897 2.72311 8.22531 2.85344C8.13122 2.81877 8.03511 2.78986 7.9375 2.76688C7.7322 2.72332 7.52164 2.71005 7.3125 2.7275C6.89594 2.76156 6.39344 2.95438 6.125 3.165C5.69062 3.50875 5.50406 3.96875 5.47469 4.56219C5.45344 5.00344 5.55969 5.25281 6.60281 6.29625C6.63846 6.33605 6.65728 6.38813 6.6553 6.44152C6.65332 6.49492 6.63069 6.54546 6.59219 6.5825L6.02281 7.145C5.98312 7.18392 5.9299 7.20595 5.87432 7.20648C5.81873 7.207 5.7651 7.18598 5.72469 7.14781C5.03906 6.46219 4.57937 6.11375 4.31844 5.95531C4.0575 5.79688 3.8475 5.75219 3.74656 5.74125C3.54833 5.72161 3.34887 5.76386 3.17562 5.86219C3.14523 5.8789 3.11744 5.89995 3.09312 5.92469C3.05255 5.96663 3.02068 6.01619 2.99937 6.07051C2.97805 6.12483 2.9677 6.18283 2.96892 6.24117C2.97014 6.29952 2.98291 6.35704 3.00648 6.41042C3.03005 6.4638 3.06396 6.51198 3.10625 6.55219L3.15969 6.60219C3.17356 6.61567 3.18459 6.6318 3.19212 6.64962C3.19965 6.66744 3.20353 6.68659 3.20353 6.70594C3.20353 6.72529 3.19965 6.74443 3.19212 6.76226C3.18459 6.78008 3.17356 6.79621 3.15969 6.80969L2.24156 7.70625C2.22766 7.72035 2.21106 7.73149 2.19275 7.73901C2.17444 7.74653 2.15479 7.75027 2.135 7.75C2.09533 7.7504 2.05709 7.73525 2.02844 7.70781L0.541874 6.25688C0.51497 6.22854 0.499969 6.19095 0.499969 6.15188C0.499969 6.1128 0.51497 6.07522 0.541874 6.04688Z"/>
    </svg>
);

export default construct;