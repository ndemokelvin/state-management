import "../styles/globals.css";
import type { AppProps } from "next/app";
import StudentContextProvider from "../context/student";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StudentContextProvider>
      <Component {...pageProps} />
    </StudentContextProvider>
  );
}

export default MyApp;
