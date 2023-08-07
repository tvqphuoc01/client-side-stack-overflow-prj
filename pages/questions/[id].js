"use client"; // This is a client component
import { useRouter } from "next/router";
import Layout from "../../components/client-layout/layout";
import { useState, useEffect } from "react";
import client from "../../configs/axios.config";
import { userAgent } from "next/server";
import AnswerRow from "./answer-row";

export default function QuestionDetail() {
  const router = useRouter();
  const { id } = router.query;
  console.log(id)
  const [amountAnswer, setAmountAnswer] = useState(0)

  const [question, setQuestion] = useState({});
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let resQuestion = await getQuestion(id);
        console.log("resQuestion", resQuestion);

        let resAnswer = await getAnswer(id);
        console.log("resAnswer", resAnswer);

        setQuestion(resQuestion);
        setAnswers(resAnswer);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    if (id) {
      fetchData();
    }
  }, [id]);

  async function getQuestion(question_id) {
    try {
      const res = await client.auth.get(
        `http://localhost:8009/api/get-question-by-id?question_id=${question_id}`
      );
      const data = await res.data.data;
      return data;
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  async function getAnswer(question_id) {
    try {
      const res = await client.auth.get(
        `http://localhost:8009/api/get-answer-of-question-by-id?question_id=${question_id}`
      );
      const data = await res.data.data;
      return data;
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  return (
    <Layout>
      <div className="flex items-start justify-center min-h-screen py-5 bg-gray-100">
        <div className="w-4/5 bg-white rounded-lg flex flex-col items-center space-y-5 py-12 px-6 z-10 shadow-2xl">
          <div className="mt-4 border-b border-gray-300">
            <div className="flex-col my-1">
              <button className="inline-flex items-center px-1 -ml-1 mr-2 flex-column">
                <svg
                  className="w-5 h-5 mr-1 text-gray-600 cursor-pointer hover:text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                  ></path>
                </svg>
                {question.number_of_like}
              </button>
              <button className="inline-flex items-center px-1 -ml-1 mr-2 flex-column">
                <svg
                  className="w-5 h-5 mr-1 text-gray-600 cursor-pointer hover:text-gray-700"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7.5 15h2.25m8.024-9.75c.011.05.028.1.052.148.591 1.2.924 2.55.924 3.977a8.96 8.96 0 01-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398C20.613 14.547 19.833 15 19 15h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 00.303-.54m.023-8.25H16.48a4.5 4.5 0 01-1.423-.23l-3.114-1.04a4.5 4.5 0 00-1.423-.23H6.504c-.618 0-1.217.247-1.605.729A11.95 11.95 0 002.25 12c0 .434.023.863.068 1.285C2.427 14.306 3.346 15 4.372 15h3.126c.618 0 .991.724.725 1.282A7.471 7.471 0 007.5 19.5a2.25 2.25 0 002.25 2.25.75.75 0 00.75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 002.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384"
                  />
                </svg>
                {question.number_of_dislike}
              </button>
              <button className="inline-flex items-center px-1 -ml-1 flex-column">
                <svg
                  className="w-5 h-5 mr-1 text-gray-600 cursor-pointer hover:text-gray-700"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"
                  />
                </svg>
                {question.total_answer} Answers
              </button>
            </div>
            <a
              className="text-lg text-green-500 font-bold hover:underline"
              href="/questions/1"
            >
              {question.title}
            </a>
            <p className="text-sm text-gray-500 font-medium hover:text-gray-700 mt-2">
              {`
                      I am trying to compute lot size having stop loss (as price) but the lot size ends up quite big and eventually, I get an error:
                      Error code: 10014 Error message: Invalid volume
                      My current code is:
                      import MetaTrader5 as mt5 def calculate_lot_size(symbol, stop_loss_price): # Connect to the MetaTrader 5 terminal if not mt5.initialize(): print("Failed to initialize MetaTrader 5") return None # Get the current account balance account_info = mt5.account_info() if account_info is None: print("Failed to retrieve account information") mt5.shutdown() return None account_balance = account_info.balance # Get the symbol's point value (minimum price change) symbol_info = mt5.symbol_info(symbol) if symbol_info is None: print(f"Failed to retrieve symbol information for {symbol}") mt5.shutdown() return None point_value = symbol_info.point # Calculate the maximum acceptable loss based on the account balance and stop loss price max_loss = account_balance * (symbol_info.last / stop_loss_price - 1) # Calculate the lot size based on the maximum acceptable loss and the point value lot_size = max_loss / point_value # Print the calculated lot size print(f"Lot size for {symbol}: {lot_size} lots") # Disconnect from the MetaTrader 5 terminal mt5.shutdown() return lot_size # Example usage symbol = "EURUSD" stop_loss_price = 1.2000 # Stop loss price lot_size = calculate_lot_size(symbol, stop_loss_price)
                      I believe that I am using the latest version of Metatrader5 which is 5.0.45`}
            </p>
            <div className="flex flex-wrap py-6 space-x-2">
              {/* <a
                rel="noopener noreferrer"
                href="#"
                className="px-3 py-1 rounded-xl hover:underline bg-gray-200 text-gray-900"
              >
                MambaUI
              </a>
              <a
                rel="noopener noreferrer"
                href="#"
                className="px-3 py-1 rounded-xl hover:underline bg-gray-200 text-gray-900"
              >
                TailwindCSS
              </a>
              <a
                rel="noopener noreferrer"
                href="#"
                className="px-3 py-1 rounded-xl hover:underline bg-gray-200 text-gray-900"
              >
                Angular
              </a> */}

              {question.tag_list &&
                question.tag_list.map((tag, index) => (
                  <a
                    key={index}
                    rel="noopener noreferrer"
                    href="#"
                    className="px-3 py-1 rounded-xl hover:underline bg-gray-200 text-gray-900"
                  >
                    {tag}
                  </a>
                ))}
            </div>
            <div className="flex justify-between items-center my-4">
              <div className="flex flex-col items-start justify-end w-full md:flex-row md:items-center text-gray-400">
                <div className="flex items-center md:space-x-2">
                  {/* <img
                    src={question.user.avatar}
                    alt=""
                    className="w-5 h-5 border rounded-full dark:bg-gray-500 dark:border-gray-700"
                  />
                  <p className="text-sm">
                    {question.user.name} {" | "} {question.created_date}
                  </p> */}
                </div>
              </div>
            </div>
          </div>
          {answers.map((item) => (<AnswerRow answer={item} />))}
        </div>
      </div>
    </Layout>
  );
}
