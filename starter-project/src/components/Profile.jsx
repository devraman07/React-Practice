import { useState } from "react"


const Profile = () => {
  
    const [profile, setProfile] = useState({
        name : '',
        age : ''
    });

    const handleChange = e => {
        const {name, value} = e.target;

        setProfile((prevProfile) => ({
            ...prevProfile, [name] : value,
        }) )
    }


  return (
    <div>
        <h2>User Profile</h2>
        <div className="">
         <label >
            <input type="text" name="name" value={profile.name} onChange={handleChange} />
            <input type="number" name="age" value={profile.age} onChange={handleChange}/>
         </label>
        </div>
        <div className="">
            <h3>Profile info</h3>
            <h5>{profile.name}</h5>
            <h5>{profile.age}</h5>
        </div>
    </div>
  )
}

export default Profile