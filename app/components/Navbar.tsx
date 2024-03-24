'use client';

import Link from 'next/link';
import { Navbar } from 'flowbite-react';

const Navbar1 = () => {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand as={Link} href="https://th.bing.com/th/id/OIP.X1gjiBwlWD2MF3DZvrTAJgHaBU?rs=1&pid=ImgDetMain">
      <img src="/images/Komatsu.svg" className="mr-10 h-15 sm:h-20" alt="Komatsu Logo" />
      {/* <span className="self-center whitespace-nowrap text-xl font-semibold text-blue-950"></span> */}
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="/Home">
          Home
        </Navbar.Link>
        <Navbar.Link as={Link} href="/Aboutus">
          About us
        </Navbar.Link>
        <Navbar.Link href="/Product">Product</Navbar.Link>
        <Navbar.Link href="/Contact">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )  
}

export default Navbar1