import Content from '@/components/Content/Content'
import Header from '@/components/Header/Header'

export const Home = () => {
  return (
    <div className="mx-auto box-border min-h-screen w-full max-w-[1600px]">
      <Header />
      <Content />
    </div>
  )
}

export default Home
