"use client"
import Link from "next/link"

export default function Header() {

  const handleClick = (e) => {
    e.preventDefault()
    window.location.reload()
  }
    return (
    <nav className="flex justify-center py-4 bg-slate-900 text-white">
        <Link className="text-lg font-bold text-blue-400 hover:text-blue-300" href="/" onClick={handleClick}> Weather App </Link>
      </nav>
    )
}
