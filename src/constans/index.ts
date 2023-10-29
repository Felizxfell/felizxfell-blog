import IconBookReference from "@/icons/IconBookReference";
import IconCursor from "@/icons/IconCursor";
import IconFoco from "@/icons/IconFoco";
import IconUser from "@/icons/IconUser";
import { langs } from "@/types/types.p";

export const links = {
  [langs.en]: [
    {
      href: "/",
      name: "About",
      icon: IconUser,
    },
    {
      href: "/blog",
      name: "Blog",
      icon: IconBookReference,
    },
    {
      href: "/projects",
      name: "Projects",
      icon: IconFoco,
    },
    // {
    //   href: "/products",
    //   name: "Products",
    //   icon: IconCursor,
    // },
  ],
  [langs.es]: [
    {
      href: "/",
      name: "Sobre",
      icon: IconUser,
    },
    {
      href: "/blog",
      name: "Blog",
      icon: IconBookReference,
    },
    {
      href: "/projects",
      name: "Proyectos",
      icon: IconFoco,
    },
    // {
    //   href: "/products",
    //   name: "Productos",
    //   icon: IconCursor,
    // },
  ],
};
