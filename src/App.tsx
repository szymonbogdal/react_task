import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchUsersData } from "./features/usersData/usersDataSlice"
import { AppDispatch, RootState } from "./store"
import { FiltersContainer } from "./components/FiltersContainer"
import { Table } from "./components/Table"

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const {usersData, loading, error } = useSelector((state: RootState) => state.usersData);

  useEffect(()=>{
    dispatch(fetchUsersData());
  }, []);

  if(loading){
    return <h1>Loading...</h1>
  }

  if(error){
    return <h1>Error: {error}</h1>
  }

  return (
    <div className="bg-background min-h-screen flex items-center flex-col">
      <div className="w-fit">
        <FiltersContainer/>
        <Table usersData={usersData}/>
      </div>
    </div>
  )
}

export default App
