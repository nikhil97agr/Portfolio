import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Link } from "@mui/material";
import { BestPerformance } from "../../data";

export const BestPerformanceList = (props: { performances: BestPerformance[] }) => {
    return (
        <TableContainer sx={{ maxHeight: 300 }} >
            <Table stickyHeader>
                <TableHead>
                    <TableRow>
                        <TableCell>Rank</TableCell>
                        <TableCell>Contest Name</TableCell>
                        <TableCell>Total Participants</TableCell>
                        <TableCell>Percentage Rank</TableCell>
                        <TableCell>Rank List</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.performances.sort((a, b) => a.rank - b.rank).map(({ rank, contest, total, rankList }) => (
                        <TableRow key={contest}>
                            <TableCell>{rank}</TableCell>
                            <TableCell>{contest}</TableCell>
                            <TableCell>{total}</TableCell>
                            <TableCell>{(rank / total * 100).toFixed(2)}%</TableCell>
                            <TableCell>
                                <Link href={rankList} target="_blank" rel="noopener">
                                    View
                                </Link>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};