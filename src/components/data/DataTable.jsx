import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { data } from '../../data';
import { Input } from '@mui/material';

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
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '4px'
        }}
      >
        {statusArray.map(tag => {
          return (<span style={{
          alignItems: 'center',
          background: 'lightblue',
          borderRadius: '4px',
          padding: '6px'}}>{tag}</span>);
        })}
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
  const [dataFilter, setDataFilter] = useState(data.articles.map((data, index) => {
    return {id: index,
      title: data.Title,
      content: data.Content,
      language: data.Language,
      tags: data.Tags.topic}
  }) || []);
  const [filter, setFilter] = useState('');

  const handleChange = (e) => {
    if (e.target.value === '') {
      setDataFilter(data.articles.map((data, index) => {
        return {id: index,
          title: data.Title,
          content: data.Content,
          language: data.Language,
          tags: data.Tags.topic}
      }))
    } else if (dataFilter.length === 0) {
      setDataFilter(data.articles.map((data, index) => {
        return {id: index,
          title: data.Title,
          content: data.Content,
          language: data.Language,
          tags: data.Tags.topic}
      }))
    }
    else {
      setDataFilter(dataFilter.filter(item => item.title.toLowerCase().includes(e.target.value.toLowerCase())));
    }
    setFilter(e.target.value);
  }

  return (
    <>
      <Input placeholder="Filter by Title" sx={{display: 'block', margin: '0 auto', width: '20%', mb: 4}}
      onChange={handleChange} value={filter} />
      <div style={{ height: 1000, width: '80%', margin: '0 auto' }}>
        <DataGrid
          rows={filter !== '' ? dataFilter : rows}
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
    </>
  );
}