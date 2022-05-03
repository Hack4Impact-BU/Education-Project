import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import { Typography, Box } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";

const saveNote = (id) => {
  //TODO
};

const columns = [
  {
    field: "date",
    type: "dateTime",
    flex: 1,
    headerName: "Student Matching Pool Date",
  },
  { field: "priority", headerName: "Priority", flex: 1 },
  {
    field: "studentLastName",
    headerName: "Student Last Name",
    flex: 1,
  },
  {
    field: "tutorLastName",
    headerName: "Tutor Last Name",
    flex: 1,
  },
  {
    field: "adminNotes",
    headerName: "Admin Notes ✏️",
    cellClassName: "input-cell",
    editable: true,
    flex: 1,
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
      <Box
        sx={{
          height: 600,
          width: "auto",
          padding: "1em",
          "& .input-cell": { border: "1px solid darkgrey", borderRadius: "1em" },
        }}
      >
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10, 20, 30]}
        />
      </Box>
    </>
  );
}

export default MatchedTutors;
