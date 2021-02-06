import NextHead from 'next/head'

// Utils.
import { getSeo } from 'lib/utils/seo'
import { getSchema } from 'lib/utils/schema'

export default function Head({ type, content }) {
  const { title, description } = getSeo(content, type)
  const schema = getSchema(content, type)

  return (
    <NextHead>
      <link rel='icon' href='/favicon.ico' />
        <title>{title}</title>
        <link rel='icon' type='image/png' sizes='48x48' href='/favicon-48x48.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
        <link rel="apple-touch-icon" href="/favicon-96x96.png"></link>
        <meta
          name='description'
          content={description}
        />
        <meta name='og:title' content={title} />
        <meta
          name='og:description'
          content={description}
        />
        <meta
          property='og:site_name'
          content='Cleasby & Vigfusson - Old Norse Dictionary'
        />
        <meta
            property='og:url'
            content={process.env.NEXT_PUBLIC_SITE_URL}
          />
        <meta
          property='og:locale'
          content='en'
        />
        <meta
          property='og:type'
          content='website'
        />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content={title} />
        <meta
          name='twitter:description'
          content={description}
        />
        <meta name="theme-color" content="#3b4f68" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <script type='application/ld+json' dangerouslySetInnerHTML={ { __html: schema } }/>
    </NextHead>
  )
}
