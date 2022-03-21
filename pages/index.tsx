import reportWebVitals from './reportWebVitals';
import Sidebar from '../components/Sidebar';
import Head from 'next/head';

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Project 1</title>
      </Head>
      <main className='' >
        <Sidebar />
        {/* Center */}

      </main>
    </div>
  )
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
