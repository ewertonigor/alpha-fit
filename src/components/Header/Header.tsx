import {
  Dumbbell,
  SquareArrowOutUpRight,
  SquareGanttChart,
  CirclePlus,
} from 'lucide-react'
import HeaderLink from './HeaderLink'

export const Header = () => {
  return (
    <div className="my-4 flex items-center justify-between">
      <div className="flex cursor-pointer items-center gap-3">
        <h1 className="text-3xl font-semibold">Alpha Fit</h1>
        <Dumbbell className="h-7 w-7 text-red-600" />
      </div>
      <div className="flex gap-2 rounded-md">
        <HeaderLink href="/plans">
          Conheça
          <CirclePlus className="h-5 w-5" />
        </HeaderLink>
        <HeaderLink href="/plans">
          Planos
          <SquareGanttChart className="h-5 w-5" />
        </HeaderLink>
        <HeaderLink href="/login">
          Acessar agora!
          <SquareArrowOutUpRight className="h-5 w-5" />
        </HeaderLink>
      </div>
    </div>
  )
}

export default Header
