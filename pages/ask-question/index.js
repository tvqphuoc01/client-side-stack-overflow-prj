"use client"; // This is a client component
import Layout from '../../components/client-layout/layout';


export default function AskQuestion() {
    return (
        <Layout>
            <div className="flex items-start justify-center min-h-screen py-5 bg-gray-100">
                <div className="w-4/5 bg-white rounded-lg flex flex-col items-center space-y-5 py-12 px-6 z-10 shadow-2xl">
                    <h2 className="text-3xl font-bold">Ask your question</h2>
                    <div className="flex items-center space-x-2 w-full">
                    </div>
                    <form className="space-y-4 w-full">
                        <label className="block">
                            <span className="after:content-['(*)'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 pb-2">Label</span>
                            <input
                                type="text"
                                className="w-full rounded border border-gray-300 py-2 px-4"
                                //   onChange={(e) => setEmail(e.target.value)}
                            />
                            {/* <p class="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
                            Please provide a valid email address.
                            </p> */}
                        </label>

                        <label className="block">
                            <span class="after:content-['(*)'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 pb-2">Category</span>
                            <select id="countries" className="w-full rounded border border-gray-300 py-2 px-4 text-slate-700 text-sm">
                                <option selected disabled>Select a category</option>
                                <option value="US">United States</option>
                                <option value="CA">Canada</option>
                                <option value="FR">France</option>
                                <option value="DE">Germany</option>
                            </select>
                        </label>
                        <label className="block">
                            <span className="after:content-['(*)'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 pb-2">Category</span>
                            <select id="countries" className="w-full rounded border border-gray-300 py-2 px-4 text-slate-700 text-sm">
                                <option selected disabled>Select at least one tag</option>
                                <option value="US">United States</option>
                                <option value="CA">Canada</option>
                                <option value="FR">France</option>
                                <option value="DE">Germany</option>
                            </select>
                        </label>

                        <div className="block">
                            <h1 className="text-slate-700 text-2xl font-extrabold pb-4">Your problem</h1>
                            <textarea
                                type="text"
                                placeholder='Input your content here'
                                rows={6}
                                className="w-full rounded border border-gray-300 p-4"
                                //   onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
            
                        <button
                            className="text-white float-right w-50 bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                            type="submit"
                        >
                            Post your question
                        </button>
                    </form>
                </div>
            </div>
        </Layout>
    )
}