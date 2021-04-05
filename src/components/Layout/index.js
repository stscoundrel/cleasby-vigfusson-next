// Components.
import Head from 'components/Head'
import Footer from 'components/Footer'
import Breadcrumbs from 'components/Breadcrumbs'
import Navigation from 'components/Navigation'
import BackToTop from 'components/BackToTop'

export default function Layout({
  type, content, children, letters, letter = false, noSearch = false,
}) {
  return (
    <>
      <Head type={type} content={content} letter={letter}></Head>
      <header>
        <Navigation letters={letters} noSearch={noSearch}/>
        <Breadcrumbs type={type} content={content} />
      </header>
      <main className="container">
        {children}
        <BackToTop />
      </main>
      <Footer letters={letters}/>
    </>
  )
}
