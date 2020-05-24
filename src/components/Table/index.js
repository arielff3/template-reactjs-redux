import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MaterialTable from 'material-table';

export default function DataTable({
  rows = [],
  rowHead = [],
  title,
  rowClick,
  titleNoData,
  pagination,
  searchInput,
  load,
  pageSizeOptions = [5, 10, 10, 50, 100],
}) {
  const [pageSize, setPageSize] = useState(10);
  return (
    <div style={{ maxWidth: '100%' }}>
      <MaterialTable
        style={{
          padding: 'dense',
          boxShadow: 'unset',
          fontSize: '0.575rem',
        }}
        isLoading={load || false}
        onRowClick={rowClick}
        onChangeRowsPerPage={setPageSize}
        columns={rowHead}
        data={rows}
        title={title || ''}
        options={{
          detailPanelColumnAlignment: 'left',
          searchFieldAlignment: 'left',
          headerStyle: {
            textAlign: 'left',
          },
          paging: pagination,
          pageSize,
          pageSizeOptions,
          emptyRowsWhenPaging: false,
          padding: 'dense',
          search: searchInput,
          rowStyle: {
            padding: '20px',
            fontWeight: 'bold',
            fontSize: 6,
          },
        }}
        localization={{
          pagination: {
            labelRowsPerPage: 'Linhas por pagina:',
            labelRowsSelect: 'linhas',
            labelDisplayedRows: '{from}-{to} de {count}',
            firstAriaLabel: 'Primeira Página',
            firstTooltip: 'Primeira Página',
            previousAriaLabel: 'Página Anterior',
            previousTooltip: 'Página Anterior',
            nextAriaLabel: 'Pŕoxima Página',
            nextTooltip: 'Pŕoxima Página',
            lastAriaLabel: 'Última Página',
            lastTooltip: 'Última Página',
          },
          toolbar: {
            searchPlaceholder: 'Pesquisar',
            searchTooltip: 'Pesquisar',
          },
          body: {
            emptyDataSourceMessage: titleNoData || 'Nenhum registro encontrado',
            filterRow: {
              filterTooltip: 'Filtrar',
            },
          },
        }}
      />
    </div>
  );
}

DataTable.propTypes = {
  rows: PropTypes.arrayOf(PropTypes.object).isRequired,
  rowHead: PropTypes.arrayOf(PropTypes.object).isRequired,
  title: PropTypes.string.isRequired,
  rowClick: PropTypes.func,
  titleNoData: PropTypes.string,
  pagination: PropTypes.bool,
  searchInput: PropTypes.bool,
  load: PropTypes.bool,
  pageSizeOptions: PropTypes.arrayOf(PropTypes.object).isRequired,
};

DataTable.defaultProps = {
  rowClick: null,
  searchInput: false,
  pagination: false,
  load: false,
  titleNoData: 'Nenhum registro encontrado',
};
