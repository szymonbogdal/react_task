import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchUsersData } from "./features/usersData/usersDataSlice"
import { AppDispatch, RootState } from "./store"
import { FiltersContainer } from "./components/FiltersContainer"
import { Table } from "./components/Table"
import { Loader } from "./components/Loader"
import { ErrorMsg } from "./components/ErrorMsg"

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const {usersData, loading, error } = useSelector((state: RootState) => state.usersData);

  useEffect(()=>{
    dispatch(fetchUsersData());
  }, []);

  return (
    <div className="bg-background min-h-screen flex items-center flex-col">
      <div className="w-full max-w-6xl px-4">
        {loading ? (
          <Loader />
        ) : error ? (
          <ErrorMsg error={error}/>
        ) : (
          <>
            <FiltersContainer/>
            <div className="overflow-x-auto">
              <Table usersData={usersData}/>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default App
