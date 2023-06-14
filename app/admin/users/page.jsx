"use client"
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Buttons } from '../../components/Buttons/Buttons';
import styles from './page.module.css';
import { UserForm } from '../../components/Form/UserForm';
import { getUser } from '../../../endPoints/apiEndpoints';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'fullname', headerName: 'FULL NAME', width: 130 },
  { field: 'username', headerName: 'USERNAME', width: 130 },
  { field: 'address', headerName: 'ADDRESS', width: 130 },
  { 
    field: 'phone',
    headerName: 'PHONE',
    type: 'number',
    width: 120,
  },
  { field: 'dob', headerName: 'BIRTH',  width: 100 },
  { field: 'password', headerName: 'PASSWORD',  width: 100 },
  { field: 'email', headerName: 'EMAIL', width: 200 },

];
 const  DataTableUser = () => {
  const [rows, setRows] = React.useState([]);
  const [showForm, setShowForm] = React.useState(false);
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getUser();
        const dataWithIds = response.data.user.map((user) => ({
          ...user,
          id: user._id,
          fullname: user.fullName,
          username: user.userName,

        }));
        console.log(dataWithIds);
        setRows(dataWithIds);
      } catch (error) {
        console.error('Erreur de récupération', error);
      }
    };
    
    
    fetchData();
  },[] )
  return (
    <>
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
    <div className={`${styles.Buttons}`}>
        <Buttons setShowForm={setShowForm} />
    </div>
    {showForm && <UserForm setShowForm={setShowForm} />}
    </>
  )
};

export default DataTableUser;