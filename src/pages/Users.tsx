import axios from "axios";
import React, {useEffect, useState} from "react";
import Layout from "../components/Layout";
import { User } from "../models/users";
import {Table, TableBody, TableCell, TableFooter, TableHead, TablePagination, TableRow} from "@material-ui/core";


const Users = () => {
    const [users, setUsers] = useState<User[]>([])
    const [page, setPage] = useState(0)
    const perPage = 10

    useEffect(() => {
        (
            async () => {
                const {data} = await axios.get('ambassadors');

                setUsers(data);
            }
        )()
    }, []);

    return (
        <Layout>
            <Table>
                <TableHead>
                <TableRow>
                    <TableCell>#</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Actions</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {users.slice(page * perPage, (page + 1) * perPage).map(user => {
                    return (
                        <TableRow key={user.id}>
                            <TableCell>{user.id}</TableCell>
                            <TableCell>{user.first_name} {user.last_name}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    );
                })};

                </TableBody>
                <TableFooter>
                    <TablePagination count={users.length}
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

export default Users;