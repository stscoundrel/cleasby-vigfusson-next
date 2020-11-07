// Services.
import { getSitemapContent, formatSitemap } from 'lib/services/sitemap'
import { SitemapStream, streamToPromise } from 'sitemap'

export async function getServerSideProps({ res }) {
  const content = getSitemapContent()
  const sitemap = await formatSitemap(content, SitemapStream, streamToPromise)
  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  }
}

export default function Sitemap() {
  return (
   <p>Something went wrong while creating sitemap.xml.</p>
  )
}
