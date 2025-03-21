import Link from 'next/link'

export const Navbar = () => {
  return (
    <nav>
        <div>
            <Link href='/'>Leftwing Patriots</Link>
        </div>
        <div>
            <Link href='/'>Home</Link>
            <Link href='/products'>Products</Link>
            <Link href='/checkout'>Checkout</Link>
        </div>
    </nav>
  )
}
