type FilterProps = {
  id: string;
  text: string;
  placeholder: string;
}

export const FilterInput = ({id, text, placeholder}: FilterProps) => {

  return (
    <div className="flex flex-col space-y-1">
      <label 
        htmlFor={id} 
        className="text-white font-semibold"
      >{text}</label>
      <input 
        id={id}
        className="bg-background px-2 py-0.5 rounded-lg focus:outline-secondary"
        placeholder={placeholder}
        autoComplete="off"
      />
    </div>
  )
}