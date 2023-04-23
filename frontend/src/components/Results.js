import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const table_styling = {
  minWidth: '650',
  width: '50vw',
  margin: '3rem auto',
};

const Results = (props) => {
  return (
    <div className='results'>
      <p></p>
      <TableContainer sx={table_styling} component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Transportation Method</TableCell>
              <TableCell align="right">Total CO2 Emissions</TableCell>
              <TableCell align="right">Travel Time</TableCell>
              <TableCell align="right">Average Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.results.map(row => (
              <TableRow
                key={row[1].name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row[1].method || 
                  (`${row[1].Make} ${row[1].Model}`)}
                </TableCell>
                <TableCell align="right">{row[1].CO2_total} grams</TableCell>
                <TableCell align="right">{row[1].travel_time} minutes</TableCell>
                <TableCell align="right">${row[1].MSRP}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Results;