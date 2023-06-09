const PersonForm = ({onSubmit, name, number, handleChange}) => {
    return (
        <form onSubmit={onSubmit}>
            <div>
                name: <input name='name' value={name} onChange={handleChange} />
            </div>
            <div>
                number: <input name='number' value={number} onChange={handleChange} />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}

export default PersonForm