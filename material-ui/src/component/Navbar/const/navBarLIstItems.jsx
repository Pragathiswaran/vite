import PeopleIcon from '@mui/icons-material/People';
import StorageIcon from '@mui/icons-material/Storage';
import PhotoRoundedIcon from '@mui/icons-material/PhotoRounded';
import SettingsEthernetIcon from '@mui/icons-material/SettingsEthernet';
import SettingsInputComponentIcon from '@mui/icons-material/SettingsInputComponent';
import DnsIcon from '@mui/icons-material/Dns';

export const mainNavbarItems = [
    {
        id:0,
        lable:"Authentication",
        icon:<PeopleIcon />,
        routes:"authentication"
    },
    {
        id:1,
        lable:"Database",
        icon:<StorageIcon />,
        routes:"database"
    },
    {
        id:2,
        lable:"Storage",
        icon:<PhotoRoundedIcon />,
        routes:"storage"
    },
    {
        id:3,
        lable:"Hosting",
        icon:<SettingsEthernetIcon />,
        routes:"hosting"
    },
    {
        id:4,
        lable:"Function",
        icon:<SettingsInputComponentIcon />,
        routes:"function"
    },
    {
        id:5,
        lable:"Machine learning",
        icon:<DnsIcon />,
        routes:"machine-learning"
    }
]