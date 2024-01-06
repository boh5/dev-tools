import {Navbar as NextUINavbar, NavbarBrand, NavbarContent, NavbarItem} from '@nextui-org/navbar'
import {Link} from '@nextui-org/link'
import {Logo} from '@/components/icons'

const navs = [
  {
    name: 'Json 美化',
    href: '/json-formatter',
  },
]

export const Navbar = () => {
  return (
    <NextUINavbar>
      <NavbarBrand>
        <Logo />
        <p className="font-bold text-inherit">ACME</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {navs.map((nav) => (
          <NavbarItem key={nav.name}>
            <Link color="foreground" href={nav.href}>
              {nav.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
    </NextUINavbar>
  )
}
