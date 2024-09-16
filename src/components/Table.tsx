import { TableRow } from "./TableRow"
import { User } from "../types"

type TableProps = {
  usersData: User[];
}

export const Table = ({usersData}:TableProps) => {
  console.log(usersData);
  return (
    <div className="overflow-x-auto">
      <table className="table-auto border-separate border-spacing-y-3 w-full">
        <thead>
          <tr className="bg-secondary text-white text-left drop-shadow-md">
            <th className="p-4">Name</th>
            <th className="p-4">Username</th>
            <th className="p-4">Email</th>
            <th className="p-4">Phone</th>
          </tr>
        </thead>
        <tbody>
          {usersData.map((user)=>{
            return <TableRow key={user.id} user={user}/>
          })}
        </tbody>
      </table>
    </div>
  )
}