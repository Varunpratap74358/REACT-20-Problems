import React, { useState } from 'react'

const P13 = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isRegistered, setIsRgistered] = useState(false)
  const [isLogin, setIslogin] = useState(false)
    const [users,setUsers] = useState([])

  const handelAuthontication=()=>{
    console.log(isRegistered)
    if(isRegistered){
        const user = users.find((u)=>u.email===email && u.password === password)
        // console.log(user)
        if(user){
            setIslogin(true)
        } else {
            alert("Please enter a valid email")
        }
    }else{
       
        const newUser ={email,password}
        setUsers([...users,newUser])
        localStorage.setItem("users",JSON.stringify([...users,newUser]))
        setIslogin(true)
        setIsRgistered(true)
    }
  }

  const handleLogout = () =>{
    setIslogin(false)
    setEmail('')
    setPassword('')
  }
  return (
    <div>
      {isLogin ? (
        <>
          <h2>Welcome: {email}</h2>
          <button onClick={handleLogout} className="bg-green-500 p-5">Logout</button>
        </>
      ) : (
        <div>
            <h2 className='text-2xl text-red-600'>{isRegistered ? 'Login' : 'Registered'}</h2>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="bg-white text-black flex flex-col gap-3 mt-20"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              onClick={handelAuthontication}
              className="bg-red-700 p-5"
              type="submit"
            >
              {!isRegistered ? 'Register' : 'Login'}
            </button>
          </form>
          <p>
            {isRegistered ? "Dont't have a account" : 'Already have a account'}
          </p>
          <button
            className="bg-red-700 p-5"
            onClick={() => setIsRgistered(!isRegistered)}
          >
            {isRegistered ? 'Register' : 'Login'}
          </button>
        </div>
      )}
    </div>
  )
}

export default P13
