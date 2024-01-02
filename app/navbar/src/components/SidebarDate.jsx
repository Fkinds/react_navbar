import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import PersonIcon from '@mui/icons-material/Person';
import AddCardIcon from '@mui/icons-material/AddCard';
import BackupIcon from '@mui/icons-material/Backup';
import SettingsIcon from '@mui/icons-material/Settings';

export const SidebarDate = [
    {
        title: "Home",
        icon: <HomeIcon/>,
        link: "/home",
    },
    {
        title: "メール",
        icon: <EmailIcon/>,
        link: "/mail",
    },
    {
        title: "アナリティクス",
        icon: <AnalyticsIcon/>,
        link: "/analytics",
    },
    {
        title: "お支払い設定",
        icon: <AddCardIcon/>,
        link: "/addcard",
    },
    {
        title: "友達追加",
        icon: <PersonIcon/>,
        link: "/person",
    },
    {
        title: "アップロード",
        icon: <BackupIcon/>,
        link: "/backup",
    },
    {
        title: "詳細設定",
        icon: <SettingsIcon/>,
        link: "/setting",
    },
]

