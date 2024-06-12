
const team = ['Winny', "Sid", "Mas", 'Yellow'];

const Teampage = () => {
  return (
    <div>
      {
        team.map(person => (
            <>
                person: {person}
            </>
        ))
      }
    </div>
  )
}

export {Teampage}
