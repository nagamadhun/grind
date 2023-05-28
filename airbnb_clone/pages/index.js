import Banner from '@/components/Banner'
import Header from '@/components/Header'
import SmallCard from '@/components/SmallCard'


export default function Home({exploreData}) {
  return (
  <div>
    <Header />
    <Banner />
    <main className='max-w-7xl mx-auto px-8 sm:px-16'>
      <section className='pt-6'>
        <h2 className='text-4xl font-semibold'>Explore Nearby</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {exploreData.map(({img,location,distance}) => (
          <SmallCard key={img}
           img={img} location={location}
           distance={distance}/>
        ))}
        </div>
       
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


