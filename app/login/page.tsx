"use client"
import { redirect } from "next/navigation"


export default function LoginPage() {

    function getResult() {
        console.log("hello")
        redirect("/result")

    }

    // const router = useRouter()

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="w-[380px] bg-white rounded-2xl shadow-xl overflow-hidden">

                {/* Header */}
                <div className="bg-gradient-to-br from-indigo-500 to-purple-500 px-6 py-8 text-center">
                    <div className="bg-white rounded-full px-4 py-3 inline-block mb-4">
                        <img
                            src="/ipu-logo.png"
                            alt="IPU Logo"
                            className="h-10 mx-auto"
                        />
                    </div>

                    <h1 className="text-white font-semibold text-lg">
                        Guru Gobind Singh Indraprastha University
                    </h1>
                    <p className="text-indigo-100 text-sm">
                        Dwarka Sector 16-C, New Delhi
                    </p>

                    <span className="inline-block mt-3 px-4 py-1 text-sm rounded-full bg-indigo-600 text-white">
                        Examination Division
                    </span>
                </div>

                {/* Form */}
                <div className="p-6 space-y-4">
                    <div>
                        <label className="text-sm text-gray-600">User Name</label>
                        <input
                            type="text"
                            placeholder="Enter your username"
                            className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black"
                        />
                    </div>

                    <div>
                        <label className="text-sm text-gray-600">Password</label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="mt-1 w-full rounded-lg border border-indigo-400 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black"
                        />
                    </div>

                    {/* Security Check */}
                    <div className="border rounded-lg p-3 bg-gray-50">
                        <p className="text-xs text-gray-500 mb-2 font-medium">
                            SECURITY CHECK
                        </p>

                        <div className="flex items-center gap-3 mb-2">
                            <div className="px-3 py-1 bg-white border rounded text-pink-500 font-bold tracking-wider">
                                2GWWW
                            </div>

                            <button className="border rounded p-1 hover:bg-gray-100">
                                🔄
                            </button>
                        </div>

                        <input
                            type="text"
                            placeholder="Enter code shown above"
                            className="w-full rounded-lg border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black"
                        />
                    </div>

                    {/* Login Button */}
                    <button
                        onClick={() => {
                            getResult()
                        }}
                        className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-3 rounded-lg font-semibold transition"
                    >
                        SECURE LOGIN
                    </button>

                    <p className="text-center text-sm text-gray-500 hover:underline cursor-pointer">
                        Forgot Password?
                    </p>
                </div>
            </div>
        </div>
    );
}
