export const dynamic = 'force-dynamic'

import CompanionCard from "@/components/CompanionCard"
import SearchInput from "@/components/SearchInput"
import SubjectFilter from "@/components/SubjectFilter"
import { getAllCompanions } from "@/lib/actions/companion.action"
import { getSubjectColor } from "@/lib/utils"

interface SearchParams {
  searchParams: {
    subject?: string
    topic?: string
  }
}

const CompanionsLibrary = async ({ searchParams }: SearchParams) => {
  const subject = searchParams.subject || ''
  const topic = searchParams.topic || ''

  const companions = await getAllCompanions({ subject, topic })

  return (
    <main>
      <section className="flex justify-between gap-4 max-sm:flex-col">
        <h1>Companion Library</h1>
        <div className="flex gap-4">
          <SearchInput />
          <SubjectFilter />
        </div>
      </section>
      <section className="companions-grid">
        {companions.map((companion) => (
          <CompanionCard
            key={companion.id}
            {...companion}
            color={getSubjectColor(companion.subject)}
          />
        ))}
      </section>
    </main>
  )
}

export default CompanionsLibrary
