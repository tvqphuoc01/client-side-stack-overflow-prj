import Layout from "../../components/client-layout/layout";
import QuestionCard from "../../components/client-layout/card-item/card-question";
import { useSession } from "next-auth/react"
import { useEffect } from "react";

export default function HomePage() {
    const { data: session, status } = useSession()

    useEffect(() => {
        console.log("session", session)
        console.log("status", status)
    }, [])

    const questions = [
        {
            user_avatar: "https://source.unsplash.com/75x75/?portrait",
            user_name: "John Doe",
            title: "How can I optimize my website's loading speed?",
            content:
                "I have a website that loads quite slowly. Are there any tips or techniques I can use to improve its loading speed?",
            number_of_like: 10,
            number_of_dislike: 2,
            number_of_answer: 5,
            create_date: "July 1st, 2023 at 10:00",
            tag_list: ["web-development", "performance", "optimization"],
        },
        {
            user_avatar: "https://source.unsplash.com/75x75/?portrait",
            user_name: "Jane Smith",
            title: "How to handle errors in JavaScript?",
            content:
                "I'm new to JavaScript and I'm wondering how I can handle errors effectively in my code. Any recommendations or best practices?",
            number_of_like: 5,
            number_of_dislike: 1,
            number_of_answer: 3,
            create_date: "July 2nd, 2023 at 14:30",
            tag_list: ["javascript", "error-handling"],
        },
        {
            user_avatar: "https://source.unsplash.com/75x75/?portrait",
            user_name: "Alex Johnson",
            title: "What are the benefits of using React for web development?",
            content:
                "I've heard a lot about React but I'm not sure why it's so popular. Can someone explain the benefits of using React for web development?",
            number_of_like: 8,
            number_of_dislike: 0,
            number_of_answer: 4,
            create_date: "July 3rd, 2023 at 09:15",
            tag_list: ["react", "web-development"],
        },
    ];

    const tags = [
        { name: "web-development", number_of_questions: 10 },
        { name: "performance", number_of_questions: 8 },
        { name: "optimization", number_of_questions: 6 },
        { name: "javascript", number_of_questions: 4 },
        { name: "error-handling", number_of_questions: 2 },
    ];

    return (
        <Layout>
            <div className="bg-gray-100 md:px-16 items-center" maxWidth="xl">
                {/* Section 1 */}
                <section className="flex flex-wrap items-center pb-16">
                    <div className="w-full lg:w-1/2">
                        <h1 className="text-5xl font-bold mb-8">
                            The answer to all of your problems
                        </h1>
                        <p className="text-2xl text-gray-600 mb-8">
                            One tool to house everything your developers need to know. From
                            code to vacation policies. All up-to-date. All in one place.
                        </p>
                        <button
                            className="px-8 py-3 rounded-md text-white bg-gradient-to-r from-green-400 to-green-600 text-xl font-bold"
                            onClick={() => window.location.replace("/questions")}
                        >
                            Explore More
                        </button>
                    </div>
                    <div className="w-full lg:w-1/2">
                        <img
                            src="https://stackoverflow.co/img/product/teams/teams-home-hero.svg"
                            alt="Stack Overflow Clone"
                        />
                    </div>
                </section>

                {/* Section 2 */}
                <section className="flex flex-wrap items-start pb-16">
                    <div className="w-full lg:w-3/5 pr-10">
                        <h1 className="text-5xl font-bold mb-8">Featured Questions</h1>
                        <hr className="border-gray-300 mb-8" />
                        <div className="px-4">
                            {questions.map((question, index) => (
                                <QuestionCard key={index} {...question} />
                            ))}
                        </div>
                    </div>
                    <div className="w-full lg:w-2/5">
                        <h1 className="text-5xl font-bold mb-8">Top Tags</h1>
                        <hr className="border-gray-300 mb-8" />
                        <div className="px-4">
                            {tags.map((tag, index) => (
                                <div
                                    key={index}
                                    className="pl-2.5 py-1.5 rounded border border-green-400 mb-4 bg-white"
                                >
                                    <div className="flex justify-between items-center">
                                        <div className="text-lg">{tag.name}</div>
                                        <span className="bg-green-600 text-white text-lg font-medium mr-2 px-3 py-0.5 rounded">
                                            {tag.number_of_questions}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Section 3 */}
                <section className="py-16">
                    <h1 className="text-5xl font-bold mb-8">
                        Why you should choose Stack Overflow Clone?
                    </h1>
                    <hr className="border-gray-300 mb-8" />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                        <div className="flex items-start p-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                className="w-60 pr-4"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                                />
                            </svg>

                            <p>
                                Stack Overflow has a massive community of developers and
                                programmers from around the world. This means that you have
                                access to a diverse range of expertise and knowledge. You can
                                ask questions, seek solutions, and receive help from experienced
                                individuals who may have encountered similar problems before.
                            </p>
                        </div>
                        <div className="flex items-start p-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                className="w-60 pr-4"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                                />
                            </svg>

                            <p>
                                Stack Overflow's question and answer format allows you to
                                quickly find answers to your coding questions. You can search
                                for specific topics or issues, and chances are that someone has
                                already asked a similar question and received a solution. This
                                can save you valuable time in troubleshooting and
                                problem-solving.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-4">
                        <div className="flex items-start p-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                className="w-60 pr-4"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
                                />
                            </svg>

                            <p>
                                Stack Overflow has a reputation system where users can upvote or
                                downvote answers based on their usefulness. This helps to ensure
                                that the most accurate and helpful answers rise to the top.
                                Additionally, users can provide comments and suggestions for
                                improvement, creating a collaborative environment for learning
                                and sharing knowledge.
                            </p>
                        </div>
                        <div className="flex items-start p-4">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                className="w-60 pr-4"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                                />
                            </svg>

                            <p>
                                Stack Overflow is not just a platform for asking and answering
                                questions, but also a vast repository of knowledge. Many
                                questions and answers contain detailed explanations, code
                                samples, and references to external resources. This makes it a
                                valuable resource for self-learning, as you can find
                                explanations and examples for various programming languages,
                                frameworks, and libraries.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Section 4 */}
                <section className="py-16">
                    <h1 className="text-5xl font-bold mb-8">Team Members</h1>
                    <hr className="border-gray-300 mb-8" />
                    <div className="flex justify-between">
                        <div className="col-span-1 md:col-span-1 lg:col-span-1">
                            <div className="card">
                                <img
                                    src="https://sbcf.fr/wp-content/uploads/2018/03/sbcf-default-avatar.png"
                                    className="card-img-top"
                                    alt="Member 1"
                                />
                                <div className="card-body">
                                    <h5 className="text-center pt-4">Tran Van Quy Phuoc</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-1 md:col-span-1 lg:col-span-1">
                            <div className="card">
                                <img
                                    src="https://sbcf.fr/wp-content/uploads/2018/03/sbcf-default-avatar.png"
                                    className="card-img-top"
                                    alt="Member 2"
                                />
                                <div className="card-body">
                                    <h5 className="text-center pt-4">Pham Hong Quan</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-1 md:col-span-1 lg:col-span-1">
                            <div className="card">
                                <img
                                    src="https://sbcf.fr/wp-content/uploads/2018/03/sbcf-default-avatar.png"
                                    className="card-img-top"
                                    alt="Member 3"
                                />
                                <div className="card-body">
                                    <h5 className="text-center pt-4">Do Tien Trung</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-1 md:col-span-1 lg:col-span-1">
                            <div className="card">
                                <img
                                    src="https://sbcf.fr/wp-content/uploads/2018/03/sbcf-default-avatar.png"
                                    className="card-img-top"
                                    alt="Member 4"
                                />
                                <div className="card-body">
                                    <h5 className="text-center pt-4">Nguyen Hoai Thuong</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    );
}
