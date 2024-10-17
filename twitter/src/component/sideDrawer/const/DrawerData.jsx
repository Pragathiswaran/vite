import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import CheckBoxOutlineBlankOutlinedIcon from '@mui/icons-material/CheckBoxOutlineBlankOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import XIcon from '@mui/icons-material/X';
import ElectricBoltTwoToneIcon from '@mui/icons-material/ElectricBoltTwoTone';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreTwoToneIcon from '@mui/icons-material/MoreTwoTone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const DrawerContent = 
      {
      logo:<XIcon sx={{width:'32px',height:'32px',padding:'0px'}}/>,
      menu:[
         {
            id:0,
            lable:'Home',
            icon:<HomeIcon fontSize='large'/>,
            route:'home',
            
         },
         {
             id:1,
             lable:'Explore',
             icon:<SearchIcon fontSize='large'/>,
             route:'explore',
             
          },
          {
             id:2,
             lable:'Notification',
             icon:<NotificationsNoneOutlinedIcon fontSize='large'/>,
             route:'notification',
             
          },
          {
             id:3,
             lable:'Message',
             icon:<MailOutlineOutlinedIcon fontSize='large'/>,
             route:'message',
             
          },
          {
             id:4,
             lable:'Grok',
             icon:<CheckBoxOutlineBlankOutlinedIcon fontSize='large'/>,
             route:'grok',
             
          },
          {
             id:5,
             lable:'Communitiies',
             icon:<PeopleAltOutlinedIcon fontSize='large'/>,
             route:'communitiies',
             
          },
          {
             id:6,
             lable:'Premium',
             icon:<XIcon />,
             route:'premium',
             
          },
          {
             id:7,
             lable:'Verified Orgs',
             icon:<ElectricBoltTwoToneIcon fontSize='large'/>,
             route:'verified-orgs',
             
          },
          {
             id:8,
             lable:'Profile',
             icon:<PermIdentityIcon fontSize='large'/>,
             route:'profile',
             
          },
          {
             id:9,
             lable:'More',
             icon:<MoreTwoToneIcon fontSize='large'/>,
             route:'more',
             
          }
      ],
      post:'Post',
      profile:{
         id:0,
         logo:<AccountCircleIcon sx={{width:'52px',height:'52px'}}/>,
         name:"Pragathis",
         Pid:"@pragathis",
         menu:<MoreHorizIcon />,
      }
      }


export default DrawerContent