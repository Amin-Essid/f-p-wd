import "../css/main.css";

// Custom App to wrap it with context provider
export default function App({ Component, pageProps }) {
  return (
    <div className="container">
      <Component {...pageProps} />
    </div>
  );
}
