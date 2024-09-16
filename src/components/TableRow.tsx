import { User } from "../types"

type TableRowProps = {
  user: User;
}

export const TableRow = ({user}: TableRowProps) => {
  const  {name, username, email, phone} = user;
  
  return (
    <tr className="bg-gray-100 drop-shadow-md">
      <td className="p-4">{name}</td>
      <td className="p-4">{username}</td>
      <td className="p-4">{email}</td>
      <td className="p-4">{phone}</td>
    </tr>
  )
}
