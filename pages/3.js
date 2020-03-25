import Link from 'next/link'

const Page = () => (
  <div className="container">
    <main>
      <h1>3.js</h1>
      <ul>
        <li><Link href="/"><a>back to index (Link)</a></Link></li>
        <li><a href="/">back to index (just an anchor)</a></li>
      </ul>
    </main>
  </div>
)

export default Page
