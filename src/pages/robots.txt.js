// Utils.
import { getRobots } from 'lib/utils/robots'

export async function getServerSideProps({ res }) {
  res.setHeader('Content-Type', 'text/plain')
  res.write(getRobots())
  res.end()

  return {
    props: {},
  }
}

export default function Robots() {
  return (
   <p>Something went wrong while creating robots.txt.</p>
  )
}
