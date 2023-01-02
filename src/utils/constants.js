import { BiHomeSmile, BiCustomize } from "react-icons/bi";

const STATUS_REGISTER_ACTIVE = {
  SEND_OTP: "SEND_OTP",
  VERIF_EMAIL: "VERIF_EMAIL",
  REGISTER: "REGISTER",
};

const MENUS = [
  {
    title: "Home",
    route: "/",
    icon: <BiHomeSmile size={24} />,
    iconActive: <BiHomeSmile size={24} color="#14BA6D" />,
  },
  {
    title: "Subscribe",
    route: "/subscribe",
    icon: <BiCustomize size={24} />,
    iconActive: <BiCustomize size={24} color="#14BA6D" />,
  },
];

export { STATUS_REGISTER_ACTIVE, MENUS };
