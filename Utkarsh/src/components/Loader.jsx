const Loader = () => {
  return (
    <div 
      className="flex justify-center items-center py-20"
      role="status"
      aria-live="polite"
    >
      <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Loader;
