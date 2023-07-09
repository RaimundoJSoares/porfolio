type SkillBadge = {
  name: string
}

export default function SkillsPlay({ name }: SkillBadge) {
  return (
    <>
      <span className="text-gray-300 bg-blue-600/80 text-sm py-1 px-3 rounded-lg">
        {name}
      </span>
    </>
  )
}
