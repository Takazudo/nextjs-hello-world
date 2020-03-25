import Link from 'next/link'
import axios from 'axios'

const Page = ({ dogImgUrls }) => (
  <div className="container">
    <main>
      <h1>4.js: SSG example</h1>
      { dogImgUrls.map((url, id) => {
        return <img src={url} key={id} alt="" width="300" />
      })}
      <ul>
        <li><Link href="/"><a>back to index (Link)</a></Link></li>
        <li><a href="/">back to index (just an anchor)</a></li>
      </ul>
    </main>
  </div>
)

export async function getStaticProps() {
  const resp = await axios.get(`https://dog.ceo/api/breeds/image/random/5`)
  const dogImgUrls = resp.data.message
  return { props: { dogImgUrls } }
}

export default Page
