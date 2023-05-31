import Banner from '@/components/Banner'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import LargeCard from '@/components/LargeCard'
import MediumCard from '@/components/MediumCard'
import SmallCard from '@/components/SmallCard'



export default function Home({exploreData,cardsData}) {
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
      <section>
        <h2 className='mt-3 text-4xl font-semibold'>Live Anywhere</h2>
        <div className=' mt-3 flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3'>
        {cardsData.map(i => (
          <MediumCard key={i.img} img={i.img} title={i.title} />
          ))}
        </div>
      </section>
      <LargeCard img='https://links.papareact.com/4cj' 
      title = 'The Greatest Outdoors'
      description = 'Wishlists curated by Airbnb'
      buttonText = 'Get Inspired'
      />
    </main>
    <Footer />
  </div>
  )
}


export async function getStaticProps(){
  const res  = await fetch('https://www.jsonkeeper.com/b/4G1G')
  const exploreData = await res.json()

  const cardsData  = await fetch('https://www.jsonkeeper.com/b/VHHT').
  then((r) => r.json())

  return {
    props:{
      exploreData,
      cardsData
    }
  }
}


