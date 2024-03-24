'use client'

import axios from 'axios';
import React from 'react'
import Navbar1 from '../components/Navbar';
import Footers from '../components/Footers';

const baseURL = `https://randomuser.me/api/?results=6`

const Contact = () => {

    const [user, setPost] = React.useState<any[]>([]);

    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
        setPost(response.data.results);
        });
    }, []);

    if (!user) return null;

    return (
    <>
    <Navbar1/>
      <div className="bg-white ">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Team</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper
              suspendisse.
            </p>
          </div>
          <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
            {user.map((person: any) => (
              <li key={person.name.first}>
                <div className="flex items-center gap-x-6">
                  <img className="h-16 w-16 rounded-full" src={person.picture.thumbnail} alt="" />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name.first} {person.name.last}</h3>
                    <p className="text-sm font-semibold leading-6 text-indigo-600"></p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
     <Footers/>
     </>
    )
  }

export default Contact;