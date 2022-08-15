const PersonForm = ({addNewName, newName, handleNewNotes, newNumber, handleNewNumbers}) => {
    return (
        <form onSubmit={addNewName}>
            <div>
                name: <input value={newName} onChange={handleNewNotes}/>
            </div>
            <div>
                number: <input value={newNumber} onChange={handleNewNumbers}/>
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}

export default PersonForm