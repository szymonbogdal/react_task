type ErrorMsgProps = {
  error: string;
}

export const ErrorMsg = ({error}:ErrorMsgProps) => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="text-center p-6 max-w-md bg-white shadow-lg border border-red-300 rounded-lg">
        <h1 className="text-3xl font-bold text-red-600 mb-4">Something went wrong!</h1>
        <p className="text-lg text-gray-800 mb-6">{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
        >
          Retry
        </button>
      </div>
    </div>
  )
}
