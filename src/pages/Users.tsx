import axios from "axios";
import React, {useEffect, useState} from "react";
import Layout from "../components/Layout";
import { User } from "../models/users";


const Users = () => {
    const [users, setUsers] = useState<User[]>([])

    useEffect(() => {
(        async () => {
            const {data} = await axios.get('ambassador');

            setUsers(data);
        })()
    }, [])
    return (
        <Layout>
            <table className="table table-striped table-sm">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {users.map(user => {
                    return (
                        <tr>
                            <td>{user.id}</td>
                            <td>{user.first_name} {user.last_name}</td>
                            <td>{user.email}</td>
                            <td></td>
                        </tr>
                    );
                })};

                </tbody>
            </table>
        </Layout>

    );
};

export default Users;