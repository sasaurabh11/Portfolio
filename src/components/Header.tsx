import Link from "next/link"
import { Button } from "./ui/button"
import Nav from "./Nav"
import MobileNav from "./MobileNav"

function Header() {
  return (
    <header className="py-8 xl:py-12 text-white">
        <div className="mx-auto container flex justify-between items-center">

            <Link href="/">
                <h1 className="text-4xl font-semibold">
                    Saurabh<span className="text-accent">.</span>
                </h1>
            </Link>

            <div className="hidden xl:flex items-center gap-8">
                <Nav/>
                <Link href="/contact">
                    <Button className="bg-yellow-500 text-black hover:text-white hover:bg-red-400">Hire me</Button>
                </Link>
            </div>

            <div className="xl:hidden">
                <MobileNav/>
            </div>

        </div>
    </header>
  )
}

export default Header