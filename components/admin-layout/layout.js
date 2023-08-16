import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useRouter } from "next/router";

const drawerWidth = 240;

export default function Layout({ window, children }) {
  const pages = [
    { title: "Categories", link: "/admin/categories" },
    { title: "Questions", link: "/admin/questions" },
    { title: "Tags", link: "/admin/tags" },
    { title: "Answers", link: "/admin/answers" },
    { title: "Replies", link: "/admin/replies" },
    { title: "Users", link: "/admin/users" },
  ];
  const { asPath } = useRouter();
  const router = useRouter();

  return (
    <Box sx={{ display: 'flex' }}>
      <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
        <aside
          className="z-20 hidden w-64 overflow-y-auto bg-white dark:bg-gray-800 md:block flex-shrink-0"
        >
          <div className="py-4 text-gray-500 dark:text-gray-400">
            <div
              className="text-lg">
              <Typography
                noWrap
                component="a"
                href="/admin/categories"
                sx={{
                  fontSize: "28px",
                  fontWeight: "700",
                  background: "-webkit-linear-gradient(#82D200, #59AD00)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  padding: '20px'
                }}
              >
                Stack Overflow
              </Typography>
            </div>
            <ul>
              {
                pages.map((page, index) => (
                  <li key={index} className="relative px-6 py-3">
                    <span className={`absolute inset-y-0 left-0 w-1 ${asPath == page.link ? 'bg-purple-600' : ''} rounded-tr-lg rounded-br-lg`} aria-hidden="true"></span>
                    <a
                      className="inline-flex cursor-pointer items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                      onClick={() => router.replace(page.link)}
                    >
                      {page.link == '/admin/tags' && <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z"></path>
                      </svg>}
                      {page.link == '/admin/categories' && <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z"></path>
                      </svg>}
                      {page.link == '/admin/questions' && <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"></path>
                      </svg>}
                      {page.link == '/admin/answers' && <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"></path>
                      </svg>}
                      {page.link == '/admin/replies' && <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"></path>
                      </svg>}
                      {page.link == '/admin/users' && <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"></path>
                      </svg>}
                      <span className="ml-4">{page.title}</span>
                    </a>
                  </li>
                ))
              }

              {/* <li className="relative px-6 py-3">
                <span className={`absolute inset-y-0 left-0 w-1 ${asPath == '/admin/questions' ? 'bg-purple-600' : ''} rounded-tr-lg rounded-br-lg`} aria-hidden="true"></span>
                <a
                  className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                  href="/admin/questions"
                >

                  <span className="ml-4">Questions</span>
                </a>
              </li>
              <li className="relative px-6 py-3">
                <span className={`absolute inset-y-0 left-0 w-1 ${asPath == '/admin/answers' ? 'bg-purple-600' : ''} rounded-tr-lg rounded-br-lg`} aria-hidden="true"></span>
                <a
                  className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                  href="/admin/answers"
                >

                  <span className="ml-4">Answers</span>
                </a>
              </li>
              <li className="relative px-6 py-3">
                <span className={`absolute inset-y-0 left-0 w-1 ${asPath == '/admin/replies' ? 'bg-purple-600' : ''} rounded-tr-lg rounded-br-lg`} aria-hidden="true"></span>
                <a
                  className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                  href="/admin/replies"
                >
                  
                  <span className="ml-4">Replies</span>
                </a>
              </li>
              <li className="relative px-6 py-3">
                <span className={`absolute inset-y-0 left-0 w-1 ${asPath == '/admin/users' ? 'bg-purple-600' : ''} rounded-tr-lg rounded-br-lg`} aria-hidden="true"></span>
                <a
                  className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                  href="/admin/users"
                >

                  <span className="ml-4">Users</span>
                </a>
              </li>
              <li className="relative px-6 py-3">
                <span className={`absolute inset-y-0 left-0 w-1 ${asPath == '/admin/members' ? 'bg-purple-600' : ''} rounded-tr-lg rounded-br-lg`} aria-hidden="true"></span>
                <a
                  className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                  href="/admin/members"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"></path>
                  </svg>
                  <span className="ml-4">Members</span>
                </a>
              </li> */}
            </ul>
          </div>
        </aside>
      </div>
      <div className="flex h-screen w-full bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col flex-1">
          <header className="z-10 py-4 bg-white shadow-md dark:bg-gray-800">
            <div className="container flex items-center justify-between h-full px-6 mx-auto text-purple-600 dark:text-purple-300">
              <button
                className="p-1 mr-5 -ml-1 rounded-md md:hidden focus:outline-none focus:shadow-outline-purple"
                aria-label="Menu"
              >
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
              <div className="flex justify-left flex-1 lg:mr-32">
                <h2 className="flex font-medium justify-left font-semibold text-gray-700 dark:text-gray-200">{asPath == '/admin/questions' ? 'Questions' :
                  asPath == '/admin/categories' ? 'Categories' : asPath == '/admin/tags' ? 'Tags' : asPath == '/admin/answers' ? 'Answers' : asPath == '/admin/replies' ? 'Replies' :
                    asPath == '/admin/users' ? 'Users' : 'Members'}</h2>
              </div>
              <ul className="flex items-center flex-shrink-0 space-x-6">
                <li className="relative">
                  <button
                    className="relative align-middle rounded-md focus:outline-none focus:shadow-outline-purple"
                    aria-label="Notifications"
                    aria-haspopup="true"
                  >
                    <svg
                      className="w-5 h-5"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"
                      ></path>
                    </svg>
                    <span
                      aria-hidden="true"
                      className="absolute top-0 right-0 inline-block w-3 h-3 transform translate-x-1 -translate-y-1 bg-red-600 border-2 border-white rounded-full dark:border-gray-800"
                    ></span>
                  </button>
                </li>
                <li className="relative">
                  <button
                    className="align-middle rounded-full focus:shadow-outline-purple focus:outline-none"
                    aria-label="Account"
                    aria-haspopup="true"
                  >
                    <img
                      className="object-cover w-8 h-8 rounded-full"
                      src="https://images.unsplash.com/photo-1502378735452-bc7d86632805?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=aa3a807e1bbdfd4364d1f449eaa96d82"
                      alt=""
                      aria-hidden="true"
                    />
                  </button>
                </li>
              </ul>
            </div>
          </header>
          <main style={{ backgroundColor: "#F7F7F7", width: '100%', height: '100vh' }}>{children}</main>
        </div>
      </div>

    </Box>

  );
}