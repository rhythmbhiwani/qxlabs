import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";

const CheckIcon = <FaCheck size={25} color="#33ffcc" />;
const CrossIcon = <ImCross size={25} color="#ed5e6a" />;

export const comparisionItems = [
  {
    title: "Boot Time",
    stackblitz: {
      icon: CheckIcon,
      text: "Milliseconds",
    },
    others: {
      icon: CrossIcon,
      text: "Minutes",
    },
  },
  {
    title: "Zero network latency",
    stackblitz: {
      icon: CheckIcon,
    },
    others: {
      icon: CrossIcon,
    },
  },
  {
    title: "Work Offline",
    stackblitz: {
      icon: CheckIcon,
    },
    others: {
      icon: CrossIcon,
    },
  },
  {
    title: "Easily debug broken containers",
    stackblitz: {
      icon: CheckIcon,
    },
    others: {
      icon: CrossIcon,
    },
  },
  {
    title: "Reset broken containers",
    stackblitz: {
      icon: CheckIcon,
      text: "Page refresh",
    },
    others: {
      icon: CrossIcon,
      text: "Not possible",
    },
  },
];
