export default function Loading() {
  return (
    <ul className="list bg-base-100 rounded-box shadow-md">
      {Array.from({ length: 50 }, (_, index) => {
        return (
          <li className="list-row" key={index}>
            <div className="w-18 text-right text-4xl font-thin tabular-nums opacity-30">
              {index + 1}
            </div>
            <div className="list-col-grow">
              <div className="skeleton mb-2 h-5 w-1/2" />
              <div className="text-xs opacity-60">
                <div className="skeleton h-3 w-1/4" />
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
