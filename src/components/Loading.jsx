const Loading = ({label="Loading..."}) => (
  <div className="flex justify-center items-center py-20">
    <span className="loading loading-spinner loading-lg mr-3"></span>
    <span className="font-medium">{label}</span>
  </div>
);
export default Loading;
