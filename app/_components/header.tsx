import { Card, CardContent } from "./ui/card"
import { MenuIcon } from "lucide-react"
import { Button } from "./ui/button"

const Header = () => {
  return (
    <Card>
      <CardContent className="flex flex-row items-center justify-between p-5">
        <p className="text-xl">goWash</p>
        <Button size="icon" variant="outline">
          <MenuIcon />
        </Button>
      </CardContent>
    </Card>
  )
}

export default Header
