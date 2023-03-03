import Title from '@/components/title'

export default function Page({ params }: { params: { id: string | number } }) {
  return (
    <div>
      <Title />
    </div>
  )
}
