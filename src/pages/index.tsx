import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter()
  const [shareValue, setShareValue] = useState({
    url: "",
    title: 'Nextme',
    creator: router?.query?.username as string,
    description: 'I claimed my most beautiful Social3 Portal NFT on @NextmeOne 🦌',
    site: '@Nextme',
    card: 'summary_large_image',
    image: 'https://venturebeat.com/wp-content/uploads/2023/01/pexels-mikhail-nilov-6739946.jpg?w=1200&strip=all',
    type: 'website',
  })
  useEffect(() => {
    if (window !== undefined) {
      setShareValue({
        url: window?.location?.href,
        title: 'Nextme',
        creator: router?.query?.username as string,
        description: 'I claimed my most beautiful Social3 Portal NFT on @NextmeOne 🦌',
        site: '@Nextme',
        card: 'summary_large_image',
        image: 'https://venturebeat.com/wp-content/uploads/2023/01/pexels-mikhail-nilov-6739946.jpg?w=1200&strip=all',
        type: 'website',
      })
    }
  }, [])
  return (
    <div>
      <Head>
        {/* <title>{location.pathname}</title> */}
        <meta name='title' content='Nextme' />
        <meta name="twitter:card" content={shareValue.card} />
        <meta property="twitter:url" content={shareValue.url} />
        <meta name="twitter:title" content={shareValue.title} />
        <meta name="twitter:creator" content={shareValue.creator} />
        <meta name="twitter:description" content={shareValue.description} />
        <meta name="twitter:site" content={shareValue.site} />
        <meta name="twitter:image" content={shareValue.image} />
        <meta name="og:url" content={shareValue.url} />
        <meta name="og:title" content={shareValue.title} />
        <meta name="og:description" content={shareValue.description} />
        <meta name="og:image" content={shareValue.image} />
        <meta name="og:type" content={shareValue.type} />
      </Head>
      123
    </div>
  )
}
