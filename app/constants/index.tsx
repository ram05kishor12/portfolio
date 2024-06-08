interface NavigationItem {
  id: string;
  title: string;
  url: any;
  onlyMobile?: boolean; 
  link:any;
}

export const navigation: NavigationItem[] = [
  {
    id: "0",
    title: "About",
    url: "#",
    link:null
  },
  {
    id: "1",
    title: "Projects",
    url: "#",
    link:null
  },
  {
    id: "2",
    title: "Contact",
    url: "#",
    link:null
  },
  
  
];