import Header from '@/components/common/Header'
import MediumLabel from '@/components/common/Label/MediumLabel'
import Main from '@/components/common/Main'
import { memoData } from '@/data/memo_data'

const HomePage: React.FC = () => {
  return (
    <div>
      <Header />
      <Main>
        <section className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:w-4/5 lg:mx-auto gap-2'>
          {memoData.map((memo) => {
            return (
              <div
                key={memo.id}
                className='aspect-video border border-gray-300 p-4 rounded-md shadow-md cursor-pointer'
              >
                <MediumLabel title={memo.title} />
                <p>{memo.content}</p>
              </div>
            )
          })}
        </section>
      </Main>
    </div>
  )
}

export default HomePage
