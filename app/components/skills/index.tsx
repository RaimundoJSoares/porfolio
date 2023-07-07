type SkillBadge = {
  name: string
}

export default function SkillsPlay({ name }: SkillBadge) {
  return (
    <>
      <span className="text-emerald-400 bg-emerald-800/80 text-sm py-1 px-3 rounded-lg">
        {name}
      </span>
    </>
  )
}
