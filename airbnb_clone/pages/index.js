import Banner from '@/components/Banner'
import Header from '@/components/Header'


export default function Home({exploreData}) {
  return (
  <div>
    <Header />
    <Banner />
    <main className='max-w-7xl mx-auto px-8 sm:px-16'>
      <section className='pt-6'>
        <h2 className='text-4xl font-semibold'>Explore Nearby</h2>
        {exploreData.map((i) => (
          <h1>{i.location}</h1>
        ))}
      </section>
    </main>
  </div>
  )
}


export async function getStaticProps(){
  const res  = await fetch('https://www.jsonkeeper.com/b/4G1G')
  const exploreData = await res.json()
  return {
    props:{
      exploreData
    }
  }
}


