'use client'
import { useState } from 'react'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async (e: any) => {
    e.preventDefault()
    alert('Login clicked! (We will wire this up next)')
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-900 text-white">
      <div className="w-full max-w-md p-8 space-y-6 bg-gray-800 rounded-xl shadow-2xl border border-gray-700">
        <h1 className="text-3xl font-bold text-center text-green-500">CRM BEAST</h1>
        <p className="text-center text-gray-400">Sign in to access the mainframe</p>
        
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 bg-gray-700 rounded border border-gray-600 focus:outline-none focus:border-green-500 text-white"
              placeholder="admin@test.com"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 bg-gray-700 rounded border border-gray-600 focus:outline-none focus:border-green-500 text-white"
              placeholder="••••••••"
            />
          </div>

          <button 
            type="submit"
            className="w-full py-3 font-bold text-black bg-green-500 rounded hover:bg-green-400 transition-all shadow-[0_0_15px_rgba(34,197,94,0.5)]"
          >
            ENTER SYSTEM
          </button>
        </form>
      </div>
    </div>
  )
}