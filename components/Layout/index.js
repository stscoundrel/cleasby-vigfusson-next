// Components.
import Head from 'components/Head'
import Footer from 'components/Footer'

export default function Layout({ type, content, children }) {
  return (
    <>
      <Head type={type} content={content}></Head>
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}
