
import * as React from "react"
import { Link } from "react-router-dom"
import { cn } from "@/lib/utils"
import Icon from "@/components/ui/icon"

const Navbar = () => {
  return (
    <nav className="bg-zinc-900 text-gray-100 py-4 px-6 shadow-md">
      <div className="container mx-auto flex justify-between items-center">

        <Link to="/" className="text-2xl font-bold text-red-500 hover:text-red-400 transition-colors">
          XoppopsladyH
        </Link>

        
        <div className="flex space-x-6">
          <NavLink to="/" icon="Home">
            Главная
          </NavLink>
          <NavLink to="/stories" icon="Book">
            Истории
          </NavLink>
          <NavLink to="/create-character" icon="UserPlus">
            Создать персонажа
          </NavLink>
          <NavLink to="/about" icon="Info">
            О проекте
          </NavLink>
        </div>
      </div>
    </nav>
  )
}

interface NavLinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
  to: string
  icon?: string
  children: React.ReactNode
}

const NavLink = ({ to, icon, children, className, ...props }: NavLinkProps) => {
  return (
    <Link
      to={to}
      className={cn(
        "flex items-center gap-1.5 hover:text-red-400 transition-colors",
        className
      )}
      {...props}
    >
      {icon && <Icon name={icon} size={18} />}
      <span>{children}</span>
    </Link>
  )
}

export default Navbar
