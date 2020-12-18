// Components.
import Head from 'components/Head'
import Footer from 'components/Footer'
import Breadcrumbs from 'components/Breadcrumbs'
import Navigation from 'components/Navigation'

export default function Layout({
  type, content, children, letters, noSearch = false,
}) {
  return (
    <>
      <Head type={type} content={content}></Head>
      <main>
        <Navigation letters={letters} noSearch={noSearch}/>
        <Breadcrumbs type={type} content={content} />
        {children}
      </main>
      <Footer letters={letters}/>
    </>
  )
}
