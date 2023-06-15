"use client"
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Buttons } from '../../components/Buttons/Buttons';
import styles from './page.module.css';
import { ProductForm } from '../../components/Form/ProductForm';
import { GetOrder, getProduct, remProduct } from '../../../endPoints/apiEndpoints';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'userId', headerName: 'USERID', width: 130 },
  { field: 'products', headerName: 'PRODUCTS', width: 130 },
  {
    field: 'quantity',
    headerName: 'QUANTITY',
    width: 100,
  },
  { field: 'total', headerName: 'TOTAL', width: 130 },
  { field: 'createdAt', headerName: 'DATE', width: 130 },
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
        const response = await GetOrder();
        const dataWithIds = response.data.product.map((order) => ({
          ...order,
          id: order._id,
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
