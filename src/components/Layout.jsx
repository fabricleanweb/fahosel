import Head from "next/head";



const Layout = ({ children, title = "Laundrobooks" }) => (
  <div className="relative min-h-screen flex flex-col justify-center items-center bg-hero bg-cover">
    <Head>
      <title>{title} </title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta
        name="description"
        content="Laundrobooks"
      />
      <meta property="og:title" content={`${title} `} />
      <meta
        property="og:description"
        content="Laundrobooks"
      />
    </Head>
    {children}
  </div>
);

export default Layout;