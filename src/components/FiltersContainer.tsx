import { FilterInput } from "./FilterInput"

export const FiltersContainer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-5 h-fit bg-primary p-5 w-full drop-shadow-md mt-5 mb-3">
      <FilterInput field="name" id="name" text="Name" placeholder="Name"/>
      <FilterInput field="username" id="username" text="Username" placeholder="Username"/>
      <FilterInput field="email" id="email" text="E-mail" placeholder="E-mail"/>
      <FilterInput field="phone" id="phone" text="Phone number" placeholder="Phone number"/>
    </div>
  )
}