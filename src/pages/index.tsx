import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import {GetServerSideProps} from "next";
import {prisma} from "../lib/prisma";
import {FormEvent, useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
faSpinner
} from "@fortawesome/free-solid-svg-icons";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [isCalled, setCalled] = useState(false)

  const handleCreateUser = async (event: FormEvent) => {
    event.preventDefault();

    setCalled(true)

    await fetch('https://aster-woad.vercel.app/', {
      method: 'POST',
      body: JSON.stringify({ email, username, password }),
      headers: { 'Content-Type': 'application/json' }
    })

    setTimeout(() => setCalled(false), 1500);
  }

  return (
    <div className="bg-[url('../../public/niflheim.jpg')] min-h-screen py-40 bg-no-repeat">
      <div className="container mx-auto">
        <div
          className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
          <div
            className="bg-[url('../../public/shadow.jpg')] bg-cover w-full lg:w-1/2 flex flex-col items-center justify-center p-12">
          </div>
          <div className="w-full lg:w-1/2 py-16 px-12">
            <h2 className="text-3xl mb-4">Register</h2>
            <form onSubmit={handleCreateUser}>
              <div className="grid gap-5">
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Your email" className=" border border-gray-400 py-2 px-2 rounded"/>
                <input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="Your username" className="border border-gray-400 py-2 px-2 rounded"/>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Your password" className="border border-gray-400 py-2 px-2 rounded "/>
              </div>
              <div className="mt-5">
                <button className="w-full bg-orange-400 py-3 text-center text-white rounded hover:bg-orange-500">
                  Register Now
                  {isCalled ?
                    <FontAwesomeIcon
                      className="animate-spin"
                      icon={faSpinner}
                      style={{ marginLeft: 8, fontSize: 24, color: "white" }}
                    /> : null
                  }
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}