const Filter = ({newFilter, handleNewFilters}) => {
    return (
        <form>
            <div>
                Find countries:<input value={newFilter} onChange={handleNewFilters}/>
            </div>
        </form>
    )
}

export default Filter