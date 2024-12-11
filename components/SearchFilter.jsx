import departments from "@/utility/departments"
import activities from "@/utility/activities"

const SearchFilter = () => {
  return (
    <div className="container container-1400">
      <div
        className="search-filter-inner"
        data-aos="zoom-out-down"
        data-aos-duration={1500}
        data-aos-offset={50}
      >
        <div className="filter-item clearfix">
          <div className="icon">
            <i className="fal fa-map-marker-alt" />
          </div>
          <span className="title">Departamentos</span>
          <select
            name="city"
            id="city"
            defaultValue={"value1"}
          >
            <option value="dep-value-default">Escoge una opción</option>
            {departments.map((d, idx) => (
              <option
                value={`dep-value-${idx}`}
                disabled={d.deshabilitado}
              >
                {d.nombre}
              </option>
            ))}
          </select>
        </div>
        <div className="filter-item clearfix">
          <div className="icon">
            <i className="fal fa-flag" />
          </div>
          <span className="title">Actividades</span>
          <select
            name="activity"
            id="activity"
          >
            <option value="activity-value-default">Escoge una actividad</option>
            {activities.map((a, idx) => (
              <option value={`activity-value-${idx}`}>{a.nombre}</option>
            ))}
          </select>
        </div>
        <div className="filter-item clearfix">
          <div className="icon">
            <i className="fal fa-calendar-alt" />
          </div>
          <span className="title">Fechas disponibilidad</span>
          {/* <select
            name="date"
            id="date"
          >
            <option value="value1">Date from</option>
            <option value="value2">10</option>
            <option value="value2">20</option>
          </select> */}
          <input type="date" />
        </div>
        <div className="filter-item clearfix">
          <div className="icon">
            <i className="fal fa-users" />
          </div>
          <span className="title">Número de personas</span>
          <select
            name="cuests"
            id="cuests"
          >
            <option value="value1">Indica cuantas personas</option>
            <option value="value2">1</option>
            <option value="value2">2</option>
            <option value="value2">3</option>
            <option value="value2">+3</option>
          </select>
        </div>
        <div className="search-button">
          <button className="theme-btn">
            <span data-hover="Buscar">Buscar</span>
            <i className="far fa-search" />
          </button>
        </div>
      </div>
    </div>
  )
}
export default SearchFilter
