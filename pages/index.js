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
        <li><Link href="/breeds/affenpinscher/"><a>affenpinscher</a></Link></li>
        <li><Link href="/breeds/african/"><a>african</a></Link></li>
        <li><Link href="/breeds/airedale/"><a>airedale</a></Link></li>
        <li><Link href="/breeds/akita/"><a>akita</a></Link></li>
        <li><Link href="/breeds/basenji/"><a>basenji</a></Link></li>
        <li><Link href="/breeds/beagle/"><a>beagle</a></Link></li>
        <li><Link href="/breeds/bluetick/"><a>bluetick</a></Link></li>
        <li><Link href="/breeds/borzoi/"><a>borzoi</a></Link></li>
        <li><Link href="/breeds/bouvier/"><a>bouvier</a></Link></li>
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
