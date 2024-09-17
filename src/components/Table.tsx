import { TableRow } from "./TableRow"
import { User } from "../types"
import { useSelector } from "react-redux"
import { RootState } from "../store"

type TableProps = {
  usersData: User[];
}

export const Table = ({usersData}:TableProps) => {

  const filters = useSelector((state: RootState) => state.filters);

  const filteredData = usersData.filter(user => 
    user.name.toLowerCase().includes(filters.name.toLocaleLowerCase()) &&
    user.username.toLowerCase().includes(filters.username.toLocaleLowerCase()) &&
    user.email.toLowerCase().includes(filters.email.toLocaleLowerCase()) &&
    user.phone.includes(filters.phone)
  )

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
          {filteredData.map((user)=>{
            return <TableRow key={user.id} user={user}/>
          })}
        </tbody>
      </table>
    </div>
  )
}