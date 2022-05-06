import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import EditLocationIcon from "@mui/icons-material/EditLocation";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import SchoolIcon from "@mui/icons-material/School";
import DomainAddIcon from "@mui/icons-material/DomainAdd";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import style from "./JobDetails.module.css"


export  const jobOverview = [
  {
    id: 1,
    icon: <AccountCircleIcon className={style.icons} />,
    name: "Job Title",
    role: "Product Designer",
  },
  {
    id: 2,
    icon: <StarHalfIcon className={style.icons} />,
    name: "Experiencee",
    role: "0-3 Years",
  },

  {
    id: 3,
    icon: <EditLocationIcon className={style.icons} />,
    name: "Location",
    role: "New York",
  },
  {
    id: 4,
    icon: <MonetizationOnIcon className={style.icons} />,
    name: "Offered Salary",
    role: "$35k - $45k",
  },
  {
    id: 5,
    icon: <SchoolIcon className={style.icons} />,
    name: "Qualification",
    role: "Bachelor Degree",
  },
  {
    id: 6,
    icon: <DomainAddIcon className={style.icons} />,
    name: "Industry",
    role: "Private",
  },
  {
    id: 7,
    icon: <AccessTimeIcon className={style.icons} />,
    name: "Date Posted",
    role: "Posted 2 hrs ago",
  },
];

