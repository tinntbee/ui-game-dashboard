import AddNewVideoIcon from "../../icons/SideBar/AddNewVideoIcon";
import AnalyticsIcon from "../../icons/SideBar/AnalyticsIcon";
import ChatIcon from "../../icons/SideBar/ChatIcon";
import FollowingIcon from "../../icons/SideBar/FollowingIcon";
import NewsFeedIcon from "../../icons/SideBar/NewsFeedIcon";
import PlayListIcon from "../../icons/SideBar/PlayListIcon";
import SettingsIcon from "../../icons/SideBar/SettingsIcon";
import TrendingIcon from "../../icons/SideBar/TrendingIcon";
import YourVideosIcon from "../../icons/SideBar/YourVideosIcon";

export const SideBarData_NewsFeeds = [
  {
    title: "News Feed",
    path: "/news-feed",
    icon: <NewsFeedIcon className="ItemIcon" />,
    className: "side-bar__item",
    icon_last: null,
  },
  {
    title: "Trending",
    path: "/trending",
    icon: <TrendingIcon />,
    className: "side-bar__item",
    icon_last: null,
  },
  {
    title: "Following",
    path: "#",
    icon: <FollowingIcon />,
    className: "side-bar__item",
    icon_last: null,
  },
  {
    title: "Your Videos",
    path: "#",
    icon: <YourVideosIcon />,
    className: "side-bar__item",
    icon_last: <AddNewVideoIcon className="icon_last" />,
  },
  {
    title: "Playlist",
    path: "#",
    icon: <PlayListIcon />,
    className: "side-bar__item",
    icon_last: null,
  },
];

export const SideBarData_Following = [
  {
    id: "following_user_1",
    avatar_url:
      "https://cdn4.iconfinder.com/data/icons/avatars-21/512/avatar-circle-human-male-black-7-512.png",
    name: "Trung Tín",
    status: "streaming",
  },
  {
    id: "following_user_2",
    avatar_url:
      "https://i.pinimg.com/originals/a6/58/32/a65832155622ac173337874f02b218fb.png",
    name: "Thúy Vy",
    status: "online",
  },
  {
    id: "following_user_3",
    avatar_url:
      "https://w7.pngwing.com/pngs/980/886/png-transparent-male-portrait-avatar-computer-icons-icon-design-avatar-flat-face-icon-people-head-cartoon-thumbnail.png",
    name: "Thúy Tín",
    status: "online",
  },
  {
    id: "following_user_4",
    avatar_url:
      "https://nguoicocongquangngai.com.vn/skin/images/all-images/1/avatar-367-456319.png",
    name: "Trung Vy",
    status: "streaming",
  },
  {
    id: "following_user_5",
    avatar_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU4Y4MQ9wIV2PFlUuQHngDdp7ZKu8UTMrR7EE7thtSKLgZhp1LW3ArIp6NZyDRgSwaM_E&usqp=CAU",
    name: "Davis",
    status: "online",
  },
  {
    id: "following_user_6",
    avatar_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScYXRnkESKPRmM_WH8ZWnJLZVhtcun1mEOY6_pvszBDEoqPvpecwk9eUulB6cyE4iZQns&usqp=CAU",
    name: "Alexander",
    status: "offline",
  },
];

export const SideBarData_UnityGaming = [
  {
    name: "Chat",
    icon: <ChatIcon />,
    status: 20,
    path: "#"
  },
  {
    name: "Settings",
    icon: <SettingsIcon />,
    status: 0,
    path: "#"
  },
  {
    name: "Analytics",
    icon: <AnalyticsIcon />,
    status: 0,
    path: "#"
  },
];

export const SideBarData_Analytics =[
  {
    id: "analytics_1",
    title: "Join the L-SEP Unity Gaming",
    description: "Discover the best live L-SEP streams anywhere.",
    path: "#",
    thumbnail: "https://cdn.vn.garenanow.com/web/lol-product/img/12.2020/dev/2020_Banner.jpg"
  },
  {
    id: "analytics_2",
    title: "Join the L-SEP Unity Gaming",
    description: "Discover the best live L-SEP streams anywhere.",
    path: "#",
    thumbnail: "https://gameviet.mobi/wp-content/uploads/2019/12/Astrid-lien-quan-mobile-gameviet.mobi-2.jpg"
  },
  {
    id: "analytics_3",
    title: "Join the L-SEP Unity Gaming",
    description: "Discover the best live L-SEP streams anywhere.",
    path: "#",
    thumbnail: "https://gamek.mediacdn.vn/133514250583805952/2021/1/10/photo-1-16102929310432111823274.png"
  }
]