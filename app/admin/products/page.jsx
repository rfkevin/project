"use client"
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Buttons } from '../../components/Buttons/Buttons';
import styles from './page.module.css';
import { ProductForm } from '../../components/Form/ProductForm';
import { getProduct, remProduct } from '../../../endPoints/apiEndpoints';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'title', headerName: 'TITLE', width: 130 },
  { field: 'subtitle', headerName: 'SUBTITLE', width: 130 },
  {
    field: 'categories',
    headerName: 'CATEGORIES',
    width: 100,
  },
  { field: 'type', headerName: 'TYPE', width: 130 },
  { field: 'marque', headerName: 'MARQUE', width: 130 },
  { field: 'years', headerName: 'YEARS', width: 130 },
  { field: 'raters', headerName: 'YEARS', width: 130 },
  { field: 'price', headerName: 'PRICE', width: 130 },
  { field: 'quantity', headerName: 'QUANTITY', width: 130 },
];

const DataTableProduct = () => {
  const [selectedRows, setSelectedRows] = React.useState([]);
  const dataGridRef = React.useRef(null);

  const handleDelete = async () => {
    const updatedRows = rows.filter((row) => !selectedRows.includes(row.id));
    setRows(updatedRows);

    const deleteSelectedRows = async () => {
      for (const selectedRow of selectedRows) {
        await remProduct(selectedRow);
      }
    };

    deleteSelectedRows();
  };

  const [rows, setRows] = React.useState([]);
  const [showForm, setShowForm] = React.useState(false);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getProduct();
        const dataWithIds = response.data.product.map((product) => ({
          ...product,
          id: product._id,
          title: product.title,
          subtitle: product.subtitle,
        }));
        setRows(dataWithIds);
      } catch (error) {
        console.error('Erreur de récupération', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          onSelectionModelChange={(newSelection) => {
            setSelectedRows(newSelection.selectionModel);
          }}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
          ref={dataGridRef}
        />
      </div>
      <div className={`${styles.Buttons}`}>
        <Buttons setShowForm={setShowForm} handleDelete={handleDelete} />
      </div>
      {showForm && <ProductForm setShowForm={setShowForm} />}
    </>
  );
};

export default DataTableProduct;
