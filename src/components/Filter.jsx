const Filter = ({ filter, setFilter, setSort }) => {
  return (
    <div className="filter">
        <h2>Filtrar:</h2>
        <div className="filter-options">
            <div>
                <p>Status:</p>
                <select value={filter} className="select-1" onChange={(e) => setFilter(e.target.value)}>
                    <option value="All">Todas</option>
                    <option value="Completed">Completas</option>
                    <option value="Incomplete">Imcompletas</option>
                </select>
            </div>
            <div>
                <p>Ordem alfabética</p>
                <button className="ordem" onClick={() => setSort("Asc")}>Asc</button>
                <button className="ordem" onClick={() => setSort("Desc")}>Des</button>

            </div>
        </div>
    </div>
  )
}

export default Filter