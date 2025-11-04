import Link from "next/link";


export default function RegisterForm() {
    return <div className="grid place-items-center h-screen">
        <div className='shadow-lg p-5 rounded-lg border-t-4 border-green-400'>
            <h1 className='text-xl font-bold my-4 text-center'>Register</h1>
            <form className='flex flex-col gap-3'>
                <select name="role" id="role" required >
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
                <input type="text" placeholder='First Name' required />
                <input type="text" placeholder='Surname' required />
                <input type="text" placeholder='Other names' />
                <input type="text" placeholder='Email' required />
                <input type="password" placeholder='Password' required />
                <button className='bg-green-600 text-white font-bold cursor-pointer px-6 py-2'>Register</button>
                <div className='bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2'>Error message</div>
                <Link className='text-sm mt-3 text-right' href={'/login'}>Already have an account? <span className='underline'>Login</span></Link>
            </form>
        </div>
    </div>

}