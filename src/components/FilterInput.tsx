import { useDispatch } from "react-redux"
import { setFilter } from "../features/filters/filtersSlice"
import { useCallback } from "react";
import { debounce } from "../utils/debounce";

type FilterProps = {
  field: 'name' | 'username' | 'email' | 'phone';
  id: string;
  text: string;
  placeholder: string;
}

export const FilterInput = ({id, text, placeholder, field}: FilterProps) => {

  const dispatch = useDispatch();

  const handleDebouncedChange = useCallback(
    debounce((value: string) => {
      dispatch(setFilter({ field: field, value }));
    }, 300),
    [dispatch, field]
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleDebouncedChange(e.target.value);
  };

  return (
    <div className="flex flex-col space-y-1">
      <label 
        htmlFor={id} 
        className="text-white font-semibold"
      >{text}</label>
      <input 
        id={id}
        className="px-2 py-0.5 rounded-lg focus:outline-secondary"
        placeholder={placeholder}
        autoComplete="off"
        onChange={handleChange}
      />
    </div>
  )
}