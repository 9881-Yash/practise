"use client"

import UserForm from "../components/UserForm";
import UserIndex from "../components/UserIndex";

const user = () => {
    return (
        <>
        <div className="container-fluid">
            <div className="row">
                <div className="col-4">
                    <UserIndex/>
                </div>
                <div className="col-4">
                    <UserForm/>
                </div>
            </div>
           
        </div>
        </>
    )
}

export default user;