const Filter = ({newFilter, handleNewFilters}) => {
    return (
        <form>
            <div>
                filter shown with<input value={newFilter} onChange={handleNewFilters}/>
            </div>
        </form>
    )
}

export default Filter