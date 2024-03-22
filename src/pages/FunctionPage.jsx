import React, { useState } from 'react'
import { getFunctions, httpsCallable } from 'firebase/functions'

export default function FunctionPage() {
  const [msg, setMsg] = useState('Default Message')

  async function callMyFunc() {
    const cf1 = httpsCallable(getFunctions(), 'cf1')
    try {
      const data = { data: 'abc' }
      const result = await cf1(data)
      if (result.data.success) {
        setMsg('FB called successfully')
      } else {
        setMsg('FB failed')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <main className='flex flex-col px-2 sm:px-4 py-2 sm:py-8 gap-8 sm:gap-16'>
      <div>
        mode: {import.meta.env.VITE_NODE_ENV} - {msg}
        <button
          className='bg-red-300'
          onClick={() => {
            callMyFunc()
          }}
        >
          Call Function
        </button>
      </div>
    </main>
  )
}
