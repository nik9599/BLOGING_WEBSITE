import React, { useState, useEffect } from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button, User} from "@nextui-org/react";
import TechBlogger from "../../Image/TechBloger.png"

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const menuItems = [
    "Create Post",
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <Navbar 
      onMenuOpenChange={setIsMenuOpen} 
      maxWidth="full"
      className={`fixed top-0 transition-colors duration-300 ${
        isScrolled ? 'bg-black text-white' : 'bg-transparent'
      }`}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
           <img src={TechBlogger} height={"10px"} width={"100px"} style={{marginRight:"5px"}} alt="Tech Blogger Logo" />
          <p className={`font-bold text-inherit ${isScrolled ? 'text-white' : 'text-black'}`}>Tech Bloger</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color={isScrolled ? "foreground" : "foreground-800"} href="/createPost">
            Create Post
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page" className={ 'text-white' }>
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color={isScrolled ? "foreground" : "foreground-800"} href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#" className={'text-white' }>Login</Link>
        </NavbarItem>
        <NavbarItem>
          {true ?    
            <User   
                name="Junior Garcia"
                description={(
                  <Link href="https://twitter.com/jrgarciadev" size="sm" isExternal className={'text-white'}>
                    @jrgarciadev
                  </Link>
                )}
                avatarProps={{
                  src: "https://avatars.githubusercontent.com/u/30373425?v=4"
                }}
              /> : <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>}
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className="w-full lg:hidden"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

