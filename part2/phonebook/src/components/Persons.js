const Persons = ({search, deletePerson}) => {
    return (
        <div>
            {search?.map(nextPerson => 
                <p key={nextPerson.id}> {nextPerson.name} {nextPerson.phonenumber}
                <button onClick={() => deletePerson(nextPerson)}>delete</button></p>)}
        </div>
    )
}

export default Persons