import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <div className="vh-100 d-flex flex-column justify-content-center align-items-center">
        <p className="fs-1 text-center"> 😊 </p>
        <h2>Thanks for reading!</h2>
        <p>Check out other posts:</p>
        <Link href="/blog">
            <button className="btn btn-primary">Explore</button>
        </Link>


    </div>
  )
}

export default page