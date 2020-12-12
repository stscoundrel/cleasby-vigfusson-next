// Components.
import Head from 'components/Head'
import Footer from 'components/Footer'
import Navigation from 'components/Navigation'

export default function Layout({
  type, content, children, letters,
}) {
  return (
    <>
      <Head type={type} content={content}></Head>
      <main>
        <Navigation letters={letters} />
        {children}
      </main>
      <Footer />
    </>
  )
}
