export default function Table({ headings, rows }) {
  return (
    <div className="rounded-lg p-2 my-6 bg-gray-100 dark:bg-gray-900 dark:bg-opacity-40">
      <table className="table-auto text-left divide-y divide-gray-500 dark:divide-gray-500">
        <thead className="">
          <tr className="divide-x divide-gray-300 dark:divide-gray-700">
            {headings.map((heading) => (
              <th className="py-2 px-4">{heading}</th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-300 dark:divide-gray-700 text-sm text-gray-600 dark:text-gray-400">
          {rows.map((cells) => (
            <tr className="divide-x divide-gray-300 dark:divide-gray-700">
              {cells.map((cell) => (
                <td className="px-4 py-2">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
