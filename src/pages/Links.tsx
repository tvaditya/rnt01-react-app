import React, {useEffect, useState} from "react";
import {Link} from "../models/link";
import Layout from "../components/Layout";
import {
    Button,
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TablePagination,
    TableRow
} from "@material-ui/core";
import axios from "axios";

const Links = (props: any) => {
    const [links, setLinks] = useState<Link[]>([])
    const [page, setPage] = useState(0)
    const perPage = 10

    useEffect(() => {
        (
            async () => {
                const {data} = await axios.get(`users/${props.match.params.id}/link`);

                setLinks(data);
            }
        )()
    }, []);

    return (
        <Layout>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>#</TableCell>
                        <TableCell>Code</TableCell>
                        <TableCell>Count</TableCell>
                        <TableCell>Revenue</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {links.slice(page * perPage, (page + 1) * perPage).map(link => {
                        return (
                            <TableRow key={link.id}>
                                <TableCell>{link.id}</TableCell>
                                <TableCell>{link.code}</TableCell>
                                <TableCell>{link.orders.length}</TableCell>
                                <TableCell>
                                </TableCell>
                            </TableRow>
                        );
                    })};

                </TableBody>
                <TableFooter>
                    <TablePagination count={links.length}
                                     onChangePage={(e, newPage)=> setPage(newPage)}
                                     page={page}
                                     rowsPerPage={perPage}
                                     rowsPerPageOptions={[]}
                    />
                </TableFooter>
            </Table>
        </Layout>

    );
};

export default Links;