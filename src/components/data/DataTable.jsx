import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { data } from '../../data';

const columns = [
  { field: 'title', headerName: 'Title', flex: 1,
  renderCell: (params) => {
    return <div style={{ whiteSpace: 'pre-wrap' }}>{params.value}</div>;
  }
},
  { field: 'content', headerName: 'Content', flex: 3,
  renderCell: (params) => {
    return <div style={{ whiteSpace: 'pre-wrap', textOverflow: 'ellipsis'}}>{params.value}</div>;
  }
},
  { field: 'language', headerName: 'Language', width: 130 },
  { field: 'tags', headerName: 'Tags', flex: 0.75,
  renderCell: (params) => {
    const statusArray = params.value;

    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          background: 'lightblue',
          borderRadius: '4px',
        }}
      >
        {statusArray}
      </div>
    );
  }},
];

const rows = data.articles.map((data, index) => {
    return { id: index,
        title: data.Title,
        content: data.Content,
        language: data.Language,
        tags: data.Tags.topic
    }})

export default function DataTable() {
  return (
    <div style={{ height: 1000, width: '80%', margin: '0 auto' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        rowHeight={200}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[10]}
      />
    </div>
  );
}