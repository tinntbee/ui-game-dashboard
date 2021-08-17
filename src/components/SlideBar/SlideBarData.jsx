import AddNewVideoIcon from "../../icons/SlideBar/AddNewVideoIcon";
import AnalyticsIcon from "../../icons/SlideBar/AnalyticsIcon";
import ChatIcon from "../../icons/SlideBar/ChatIcon";
import FollowingIcon from "../../icons/SlideBar/FollowingIcon";
import NewsFeedIcon from "../../icons/SlideBar/NewsFeedIcon";
import PlayListIcon from "../../icons/SlideBar/PlayListIcon";
import SettingsIcon from "../../icons/SlideBar/SettingsIcon";
import TrendingIcon from "../../icons/SlideBar/TrendingIcon";
import YourVideosIcon from "../../icons/SlideBar/YourVideosIcon";

export const SlideBarData_NewsFeeds = [
  {
    title: "News Feed",
    path: "#",
    icon: <NewsFeedIcon className="ItemIcon" />,
    className: "slide-bar__item",
    icon_last: null,
  },
  {
    title: "Trending",
    path: "#",
    icon: <TrendingIcon />,
    className: "slide-bar__item",
    icon_last: null,
  },
  {
    title: "Following",
    path: "#",
    icon: <FollowingIcon />,
    className: "slide-bar__item",
    icon_last: null,
  },
  {
    title: "Your Videos",
    path: "#",
    icon: <YourVideosIcon />,
    className: "slide-bar__item",
    icon_last: <AddNewVideoIcon className="icon_last" />,
  },
  {
    title: "Playlist",
    path: "#",
    icon: <PlayListIcon />,
    className: "slide-bar__item",
    icon_last: null,
  },
];

export const SlideBarData_Following = [
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
      "https://lh3.googleusercontent.com/proxy/jKIDwwRq0D6iFB4TYP3m7QrwOX8tvg4JVt6G_u4BvgHJnvH-wxmQsVI73XVA91kVTgcccOp55vPwNYFHd19_2ej2dnTjCRG3n8SwE64ANxPQPNwF",
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

export const SlideBarData_UnityGaming = [
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

export const SlideBarData_Analytics =[
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