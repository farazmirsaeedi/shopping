const SignUp = () => {
    return (
        <>
            <div className="w-screen h-screen flex justify-center items-center bg-orange-100">
                <div className="w-72 sm:w-80 p-5 border border-orange-400 rounded-lg bg-white">
                    <h1 className="text-xl text-center">Sign Up</h1>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="user">Username</label>
                        <input className="mb-2 border border-orange-400 rounded-md p-1" id="user" type="text" />
                        <label htmlFor="Password">Password</label>
                        <input className=" border border-orange-400 rounded-md p-1" id="Password" type="text" />
                    </div>
                    <button
                        className="w-full mt-6 bg-orange-400 hover:bg-orange-500 transition duration-100 rounded-md text-white uppercase p-2 ">
                            SignUp</button>
                </div>
            </div>
        </>
    )
}

export default SignUp;