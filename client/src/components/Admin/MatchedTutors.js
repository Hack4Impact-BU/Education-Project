import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import { Typography, Button, Grid } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";

const saveNote = (id) => {
  //TODO
};

const columns = [
  {
    field: "date",
    type: "dateTime",
    headerName: "Student Matching Pool Date",
    width: 200,
  },
  { field: "priority", headerName: "Priority" },
  { field: "studentLastName", headerName: "Student Last Name", width: 200 },
  { field: "tutorLastName", headerName: "Tutor Last Name", width: 200 },
  {
    field: "adminNotes",
    headerName: "Admin Notes",
    width: 300,
    editable: true,
  },
  {
    field: "matchOptions",
    headerName: "Options",
    type: "actions",
    getActions: (params) => [
      <GridActionsCellItem
        label="Tutor Ends Match"
        // onClick={}
        showInMenu
      />,
      <GridActionsCellItem
        label="Student Ends Match"
        // onClick={}
        showInMenu
      />,
      <GridActionsCellItem
        icon={<SaveIcon />}
        label="Save Note"
        onClick={saveNote(params.adminNotes)}
        showInMenu
      />,
    ],
  },
];

const rows = [
  {
    id: 1,
    date: "03-31-2022",
    priority: "Normal",
    studentLastName: "Doe",
    tutorLastName: "Smith",
    adminNotes: "Editable field",
  },
  {
    id: 2,
    date: new Date(Date.now()),
    priority: "Normal",
    studentLastName: "Smith",
    tutorLastName: "Rock",
    adminNotes: "Sample note",
  },
];

// Multi-column filtering and sorting not possible with community DataGrid
// Will need to do it in the backend

function MatchedTutors() {
  return (
    <>
      <Typography variant="h4" color="inherit" sx={{ pl: 2 }}>
        Matched Tutors
      </Typography>
      <div style={{ height: 600, width: "auto", padding: "1em" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10, 20, 30]}
          checkboxSelection
          disableSelectionOnClick
        />
      </div>
    </>
  );
}

export default MatchedTutors;
