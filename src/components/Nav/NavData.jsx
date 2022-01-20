import AddIcon from "../../icons/Nav/AddIcon";
import BellIcon from "../../icons/Nav/BellIcon";
import BrowseIcon from "../../icons/Nav/BrowseIcon";
import LogOutIcon from "../../icons/Nav/LogOutIcon";
import MyChannelIcon from "../../icons/Nav/MyChannelIcon";
import MyPlaylist from "../../icons/Nav/MyPlaylist";
import ProfileIcon from "../../icons/Nav/ProfileIcon";
import Settings from "../../icons/Nav/SettingsIcon";
import CommentIcon from "../../icons/Notification/CommentIcon";
import LoveIcon from "../../icons/Notification/LoveIcon";
import MessageIcon from "../../icons/Notification/MessageIcon";
import NotificationControl from "./Components/NotificationControl/NotificationControl";
import { FcSteam } from "react-icons/fc";
import ProfileControl from "./Components/ProfileControl/ProfileControl";
import YourVideosIcon from "../../icons/SideBar/YourVideosIcon";
import AddNewVideoIcon from "../../icons/SideBar/AddNewVideoIcon";
import StreamIcon from "../../icons/SideBar/StreamIcon";
import NewsFeedIcon from "../../icons/SideBar/NewsFeedIcon";
import AddVideoControl from "./Components/AddVideoControl/AddVideoControl";

export const Data_Dropdown_Browse = [
  {
    icon: <BrowseIcon />,
    name: "Browse",
    path: "#",
  },
  {
    icon: <BrowseIcon />,
    name: "Popular Categories",
    path: "#",
  },
  {
    icon: <BrowseIcon />,
    name: "Hot Streamers",
    path: "#",
  },
  {
    icon: <BrowseIcon />,
    name: "Trending Videos",
    path: "#",
  },
];

export const Notification_Dropdown = {
  NotificationButton: {
    icon: <BellIcon />,
    name: "Create New",
    value: 6,
    data_dropdown: "",
  },
  listNotification: [
    {
      image:
        "https://cdn4.iconfinder.com/data/icons/avatars-21/512/avatar-circle-human-male-black-7-512.png",
      title: "Sarah Saunders",
      description: (
        <p>
          Commented on <span> The Results Are Something </span>
        </p>
      ),
      timeLeft: "8h",
      path: "#",
      type: "comment",
      icon: <CommentIcon />,
      new: true,
    },
    {
      image:
        "https://i.pinimg.com/originals/a6/58/32/a65832155622ac173337874f02b218fb.png",
      title: "Sarah Saunders",
      description: (
        <p>
          Commented on <span> The Results Are Something </span>
        </p>
      ),
      timeLeft: "8h",
      path: "#",
      type: "comment",
      icon: <CommentIcon />,
      new: true,
    },
    {
      image:
        "https://w7.pngwing.com/pngs/980/886/png-transparent-male-portrait-avatar-computer-icons-icon-design-avatar-flat-face-icon-people-head-cartoon-thumbnail.png",
      title: "Sarah Saunders",
      description: (
        <p>
          Commented on <span> The Results Are Something </span>
        </p>
      ),
      timeLeft: "8h",
      path: "#",
      type: "comment",
      icon: <MessageIcon />,
      new: true,
    },
    {
      image:
        "https://cdn4.iconfinder.com/data/icons/avatars-21/512/avatar-circle-human-male-black-7-512.png",
      title: "Sarah Saunders",
      description: (
        <p>
          Commented on <span> The Results Are Something </span>
        </p>
      ),
      timeLeft: "8h",
      path: "#",
      type: "comment",
      icon: <LoveIcon />,
      new: true,
    },
    {
      image:
        "https://i.pinimg.com/originals/a6/58/32/a65832155622ac173337874f02b218fb.png",
      title: "Sarah Saunders",
      description: (
        <p>
          Commented on <span> The Results Are Something </span>
        </p>
      ),
      timeLeft: "8h",
      path: "#",
      type: "comment",
      icon: <CommentIcon />,
      new: true,
    },
    {
      image:
        "https://w7.pngwing.com/pngs/980/886/png-transparent-male-portrait-avatar-computer-icons-icon-design-avatar-flat-face-icon-people-head-cartoon-thumbnail.png",
      title: "Sarah Saunders",
      description: (
        <p>
          play game now <FcSteam/>
        </p>
      ),
      timeLeft: "8h",
      path: "#",
      type: "comment",
      icon: <MessageIcon />,
      new: true,
    },
    {
      image:
        "https://cdn4.iconfinder.com/data/icons/avatars-21/512/avatar-circle-human-male-black-7-512.png",
      title: "Sarah Saunders",
      description: (
        <p>
          Commented on <span> The Results Are Something </span>
        </p>
      ),
      timeLeft: "8h",
      path: "#",
      type: "comment",
      icon: <LoveIcon />,
      new: true,
    },
    {
      image:
        "https://cdn4.iconfinder.com/data/icons/avatars-21/512/avatar-circle-human-male-black-7-512.png",
      title: "Sarah Saunders",
      description: (
        <p>
          Commented on <span> The Results Are Something </span>
        </p>
      ),
      timeLeft: "8h",
      path: "#",
      type: "comment",
      icon: <CommentIcon />,
      new: true,
    },
    {
      image:
        "https://i.pinimg.com/originals/a6/58/32/a65832155622ac173337874f02b218fb.png",
      title: "Sarah Saunders",
      description: (
        <p>
          Commented on <span> The Results Are Something </span>
        </p>
      ),
      timeLeft: "8h",
      path: "#",
      type: "comment",
      icon: <CommentIcon />,
      new: true,
    },
    {
      image:
        "https://w7.pngwing.com/pngs/980/886/png-transparent-male-portrait-avatar-computer-icons-icon-design-avatar-flat-face-icon-people-head-cartoon-thumbnail.png",
      title: "Sarah Saunders",
      description: (
        <p>
          Commented on <span> The Results Are Something </span>
        </p>
      ),
      timeLeft: "8h",
      path: "#",
      type: "comment",
      icon: <MessageIcon />,
      new: true,
    },
    {
      image:
        "https://cdn4.iconfinder.com/data/icons/avatars-21/512/avatar-circle-human-male-black-7-512.png",
      title: "Sarah Saunders",
      description: (
        <p>
          Commented on <span> The Results Are Something </span>
        </p>
      ),
      timeLeft: "8h",
      path: "#",
      type: "comment",
      icon: <LoveIcon />,
      new: true,
    },
    {
      image:
        "https://i.pinimg.com/originals/a6/58/32/a65832155622ac173337874f02b218fb.png",
      title: "Sarah Saunders",
      description: (
        <p>
          Commented on <span> The Results Are Something </span>
        </p>
      ),
      timeLeft: "8h",
      path: "#",
      type: "comment",
      icon: <CommentIcon />,
      new: true,
    },
    {
      image:
        "https://w7.pngwing.com/pngs/980/886/png-transparent-male-portrait-avatar-computer-icons-icon-design-avatar-flat-face-icon-people-head-cartoon-thumbnail.png",
      title: "Sarah Saunders",
      description: (
        <p>
          play game now <FcSteam/>
        </p>
      ),
      timeLeft: "8h",
      path: "#",
      type: "comment",
      icon: <MessageIcon />,
      new: true,
    },
    {
      image:
        "https://cdn4.iconfinder.com/data/icons/avatars-21/512/avatar-circle-human-male-black-7-512.png",
      title: "Sarah Saunders",
      description: (
        <p>
          Commented on <span> The Results Are Something </span>
        </p>
      ),
      timeLeft: "8h",
      path: "#",
      type: "comment",
      icon: <LoveIcon />,
      new: true,
    },
  ],
};

export const AddVideo_Dropdown = {
  AddVideoButton: {
    icon: <AddIcon />,
    name: "Create New",
    value: 0,
    data_dropdown: "",
  },
  listOption: [
    {
      icon: <YourVideosIcon />,
      title: 'New Video',
      iconLast: <AddNewVideoIcon />,
      path: '#'
    },
    {
      icon: <NewsFeedIcon />,
      title: 'New Video',
      iconLast: <StreamIcon />,
      path: '#'
    }
  ]
};


export const Data_ProfileControl = {
  profile: {
    avatar_url:
      "https://scontent.fvca1-2.fna.fbcdn.net/v/t1.6435-9/226318802_3086972138294342_6512605127013077468_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=OZkEEbjCcYUAX-o9X6d&tn=j7LpXkDUmE8O4tks&_nc_ht=scontent.fvca1-2.fna&oh=0eb4c5295d2b3067164f29046aa58047&oe=6142EAA5",
    name: "Bae Bee",
  },
  control: [
    {
      icon: <ProfileIcon />,
      title: "Profile",
      path: "#",
    },
    {
      icon: <MyPlaylist />,
      title: "My Playlist",
      path: "#",
    },
    {
      icon: <MyChannelIcon />,
      title: "My Channel",
      path: "#",
    },
    {
      icon: <Settings />,
      title: "Settings",
      path: "#",
    },
    {
      icon: <LogOutIcon />,
      title: "Log Out",
      path: "#",
    },
  ],
};

export const Data_Control = [
  // {
  //   icon: <AddIcon />,
  //   name: "Create New",
  //   value: 0,
  //   data_dropdown: "",
  // },
  {
    render: <AddVideoControl data={AddVideo_Dropdown}/> 
  },
  {
    render: <NotificationControl data={Notification_Dropdown} />,
  },
  {
    render: <ProfileControl data={Data_ProfileControl} />
  }
];
