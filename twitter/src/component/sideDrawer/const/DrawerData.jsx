import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import CheckBoxOutlineBlankOutlinedIcon from '@mui/icons-material/CheckBoxOutlineBlankOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import ElectricBoltTwoToneIcon from '@mui/icons-material/ElectricBoltTwoTone';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreTwoToneIcon from '@mui/icons-material/MoreTwoTone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const DrawerContent = [
      {
      logo:<FontAwesomeIcon icon={faXTwitter} />,
      menu:[
         {
            id:0,
            lable:'Home',
            icon:<HomeIcon />,
            route:'home',
            
         },
         {
             id:1,
             lable:'Explore',
             icon:<SearchIcon />,
             route:'explore',
             
          },
          {
             id:2,
             lable:'Notification',
             icon:<NotificationsNoneOutlinedIcon />,
             route:'notification',
             
          },
          {
             id:3,
             lable:'Message',
             icon:<MailOutlineOutlinedIcon />,
             route:'message',
             
          },
          {
             id:4,
             lable:'Grok',
             icon:<CheckBoxOutlineBlankOutlinedIcon />,
             route:'grok',
             
          },
          {
             id:5,
             lable:'Communitiies',
             icon:<PeopleAltOutlinedIcon />,
             route:'communitiies',
             
          },
          {
             id:6,
             lable:'Premium',
             icon:<FontAwesomeIcon icon={faXTwitter} />,
             route:'premium',
             
          },
          {
             id:7,
             lable:'Verified Orgs',
             icon:<ElectricBoltTwoToneIcon />,
             route:'verified-orgs',
             
          },
          {
             id:8,
             lable:'Profile',
             icon:<PermIdentityIcon />,
             route:'profile',
             
          },
          {
             id:9,
             lable:'More',
             icon:<MoreTwoToneIcon />,
             route:'more',
             
          }
      ],
      post:'Post',
      profile:{
         id:0,
         profileLogo:<AccountCircleIcon />,
         profileName:"Pragathiswaran",
         profileId:"@pragathiswaran",
         profileMenuIcon:<MoreHorizIcon />
      }
      },
]

export default DrawerContent