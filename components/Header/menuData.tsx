import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About us",
    path: "/about",
    newTab: false,
  },
  {
    id: 3,
    title: "Contact us",
    path: "/contact",
    newTab: false,
  },
  {
    id: 4,
    title: "Products",
    path: "/blog",
    newTab: false,
    submenu:[
      {
        id: 43,
        title: "Modular Partitions",
        path: "/Modular-Partitions",
        newTab: false,
      },
      {
        id: 44,
        title: "Cleanroom Equipments",
        path: "/cleanroom-equipments",
        newTab: false,
      },
      {
        id: 45,
        title: "Labaratory Furniture",
        path: "/labaratory-furniture",
        newTab: false,
      } ,
      {
        id: 45,
        title: "HVAC",
        path: "/Hvac",
        newTab: false,
      }
     
    ]
  },
  {
    id: 5,
    title: "Services",
    newTab: false,
    submenu: [
      {
        id: 44,
        title: "Regulatory Compliance",
        path: "/Regulatory-Compliance",
        newTab: false,
      },
      {
        id: 45,
        title: "Validation And Documentation",
        path: "/Validation-And-Documentation",
        newTab: false,
      },
      {
        id: 46,
        title: "Conceptual Design And Project Management",
        path: "/Conceptual-Design",
        newTab: false,
      },
      {
        id: 47,
        title: "HVAC & AMCâ€™S",
        path: "/HVAC-AM",
        newTab: false,
      }, 
    ],
  },
];
export default menuData;
