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
        <li><Link href="/4"><a>to /4 (Link)</a></Link></li>
      </ul>
      <hr />
      breeds
      <ul>
        <li><a href="/breeds/affenpinscher/">affenpinscher</a></li>
        <li><a href="/breeds/african/">african</a></li>
        <li><a href="/breeds/airedale/">airedale</a></li>
        <li><a href="/breeds/akita/">akita</a></li>
        <li><a href="/breeds/basenji/">basenji</a></li>
        <li><a href="/breeds/beagle/">beagle</a></li>
        <li><a href="/breeds/bluetick/">bluetick</a></li>
        <li><a href="/breeds/borzoi/">borzoi</a></li>
        <li><a href="/breeds/bouvier/">bouvier</a></li>
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
