const Filter = ({query, search}) => {
    return (
        <div>
            filter shown with <input name='filter' value={query} onChange={search} />
        </div>
    )
}

export default Filter