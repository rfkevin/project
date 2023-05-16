"use client"
import { useSession, signOut } from "next-auth/react";

const Home = () => {
  const { data: session } = useSession();
  
  return (
    <>
      <div>home</div>
      <pre>{JSON.stringify(session)}</pre>
      <div className="input-button">
        <button onClick={signOut  }>
          Signout
        </button>
      </div>
    </>
  )
}

export default Home