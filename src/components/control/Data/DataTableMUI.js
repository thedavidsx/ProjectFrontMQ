import React      from 'react'
import PropTypes  from 'prop-types'
import MDataTable from 'mui-datatables'

/**
 * @param {string} id - identificador.
 * @param {string} tittle - Titulo de la grilla.
 * @param {array} data -  Arreglo de datos de la grilla.
 * @param {array} columns - Arreglo de las columnas a desplegar.
 * @param {array} options - Arreglo de opciones. 
 */
class DataTable extends React.Component {  
  render() {
    const {title, data, columns, options}  = this.props;
    return (
      <React.Fragment>
        <MDataTable title={title} data={data} columns={columns} options={options}></MDataTable>
      </React.Fragment>
    )
  }
}

DataTable.propTypes = {
  /** identificador.*/
  id       : PropTypes.string,
  /** Titulo de la grilla.*/
  title    : PropTypes.string,
  /** Arreglo de datos de la grilla.*/
  data     : PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
  /** Arreglo de las columnas a desplegar.*/
  columns  : PropTypes.arrayOf(PropTypes.any),
  /** Arreglo de opciones.*/
  options  : PropTypes.any
}

export default DataTable