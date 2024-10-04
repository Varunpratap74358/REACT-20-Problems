import React, { useState } from 'react'

const P12 = () => {
    const [file,setFile] = useState(null)
    const handleFileChange = (e) =>{
        // console.log(e.target)
        const selectedFile =e.target.files[0]
        setFile(selectedFile)
    }
  return (
    <div>
      <input type="file" accept='image/*' onChange={handleFileChange} />
      <div className='mt-20 w-[100%]'>
        {file && <img className='w-52 rounded-xl' src={URL.createObjectURL(file)} alt="" />}
      </div>
    </div>
   )
}

export default P12
