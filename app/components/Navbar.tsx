'use client';

import Link from 'next/link';
import { Navbar } from 'flowbite-react';

const Navbar1 = () => {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand as={Link} href="/Home">
      <img src="/images/Komatsu.svg" className="mr-9 h-12 sm:h-12" alt="Komatsu Logo" />
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