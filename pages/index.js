import Link from 'next/link'
import axios from 'axios'

const Home = ({ dogImgUrls }) => (
  <div className="container">
    <main>
      <h1>index page!</h1>
      { dogImgUrls.map((url, id) => {
        return <img src={url} key={id} alt="" width="300" />
      }) }
      <hr />
      <ul>
        <li><Link href="/2"><a>to /2 (Link)</a></Link></li>
        <li><a href="/3">to 3.js (just an anchor)</a></li>
      </ul>
    </main>
  </div>
)

export async function getServerSideProps() {
  const resp = await axios.get(`https://dog.ceo/api/breeds/image/random/3`)
  const dogImgUrls = resp.data.message
  return { props: { dogImgUrls } }
}

export default Home
