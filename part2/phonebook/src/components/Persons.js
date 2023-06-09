const Persons = ({ query, showFiltered, showAll }) => {
    return (
        query ? showFiltered.map((person) => <div><h3 key={person.name}>{person.name} {person.number}</h3><button key={person.id}>Delete</button></div>) : showAll
    )
}

export default Persons  