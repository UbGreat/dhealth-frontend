'use client'
import Link from "next/link";
import { useState } from "react";


export default function RegisterForm() {

    const [role, setRole] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [otherNames, setOtherNames] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")


    // Function to handle submit
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(!role || !firstName || !lastName || !email || !password) {
            setError("Error! Provide all required fields");
            return;
        }
    };

    console.log("First Name: ", firstName)

    return <div className="grid place-items-center h-screen">
        <div className='shadow-lg p-5 rounded-lg border-t-4 border-green-400'>
            <h1 className='text-xl font-bold my-4 text-center'>DHealth Register</h1>
            <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
                <select onChange={e => setRole(e.target.value)} name="role" id="role" required >
                    <option value="" >Select Role</option>
                    <option value="GOVERNMENT">GOVT. AGENCY</option>
                    <option value="PATIENT">PATIENT</option>
                    <option value="DOCTOR">DOCTOR</option>
                    <option value="NURSE">NURSE</option>
                    <option value="PHARMACIST">PHARMACIST</option>
                    <option value="LAB_SCIENTIST">LAB SCIENTIST</option>
                    <option value="VENDOR">VENDOR</option>
                    <option value="VENDOR">OTHER</option>
                </select>
                <input onChange={e => setFirstName(e.target.value)} type="text" placeholder='First Name' required  />
                <input onChange={e => setLastName(e.target.value)} type="text" placeholder='Surname' required />
                <input onChange={e => setOtherNames(e.target.value)} type="text" placeholder='Other names (optional)' />
                <input onChange={e => setEmail(e.target.value)} type="text" placeholder='Email' required />
                <input onChange={e => setPassword(e.target.value)} type="password" placeholder='Password' required />
                <button className='bg-green-600 text-white font-bold cursor-pointer px-6 py-2'>Register</button>
                {
                    error && (
                        <div className='bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2'>{ error }</div>
                    )
                }
                <Link className='text-sm mt-3 text-right' href={'/login'}>Already have an account? <span className='underline'>Login</span></Link>
            </form>
        </div>
    </div>

}