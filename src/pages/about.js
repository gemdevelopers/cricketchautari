import Link from 'next/link'
import react from 'react'

const about = () => {
  return (
    <div>
      <h1 className="text-4xl bg-red-200">About</h1>
      <Link href="/">Home</Link>
    </div>
  )
}
export default about
