import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
import PublicIcon from '@mui/icons-material/Public';
import PhotoRoundedIcon from '@mui/icons-material/PhotoRounded';
import SettingsEthernetIcon from '@mui/icons-material/SettingsEthernet';
import SettingsInputComponentIcon from '@mui/icons-material/SettingsInputComponent';
import DnsIcon from '@mui/icons-material/Dns';
import SettingsIcon from '@mui/icons-material/Settings';
import TimerIcon from '@mui/icons-material/Timer';
import PhonelinkSetupIcon from '@mui/icons-material/PhonelinkSetup';

export const mainNavbarItems = [
    {
        lable:'Build',
        child: [
            {
                id:0,
                lable:"Authentication",
                icon:<PeopleRoundedIcon fontSize='small'/>,
                routes:"authentication",
                select:true
            },
            {
                id:1,
                lable:"Database",
                icon:<DnsIcon fontSize='small'/>,
                routes:"database"
            },
            {
                id:2,
                lable:"Storage",
                icon:<PhotoRoundedIcon fontSize='small'/>,
                routes:"storage"
            },
            {
                id:3,
                lable:"Hosting",
                icon:<PublicIcon fontSize='small'/>,
                routes:"hosting"
            },
            {
                id:4,
                lable:"Function",
                icon:<SettingsEthernetIcon fontSize='small'/>,
                routes:"function"
            },
            {
                id:5,
                lable:"Machine learning",
                icon:<SettingsInputComponentIcon fontSize='small'/>,
                routes:"machine-learning"
            }
        ]
    },
    {
        lable:'Quality',
        child: [
            {
                id:0,
                lable:"Analytics",
                icon:<SettingsIcon fontSize='small'/>,
                routes:"analytics",
            },
            {
                id:1,
                lable:"Performance",
                icon:<TimerIcon fontSize='small'/>,
                routes:"performance"
            },
            {
                id:2,
                lable:"Test tab",
                icon:<PhonelinkSetupIcon fontSize='small'/>,
                routes:"test-tab"
            }
        ]
    }
]

    
