import colleges from "../data/colleges";

function ComparePage() {
  return (
    <div className="p-8">

      <h1 className="text-4xl font-bold mb-8">
        Compare Colleges
      </h1>

      <div className="overflow-x-auto">

        <table className="w-full border">

          <thead className="bg-blue-600 text-white">

            <tr>
              <th className="p-4 border">
                Feature
              </th>

              {colleges.map((college) => (
                <th
                  key={college.id}
                  className="p-4 border"
                >
                  {college.name}
                </th>
              ))}

            </tr>

          </thead>

          <tbody>

            <tr>
              <td className="p-4 border font-bold">
                Fees
              </td>

              {colleges.map((college) => (
                <td
                  key={college.id}
                  className="p-4 border"
                >
                  {college.fees}
                </td>
              ))}
            </tr>

            <tr>
              <td className="p-4 border font-bold">
                Rating
              </td>

              {colleges.map((college) => (
                <td
                  key={college.id}
                  className="p-4 border"
                >
                  {college.rating}
                </td>
              ))}
            </tr>

            <tr>
              <td className="p-4 border font-bold">
                Placements
              </td>

              {colleges.map((college) => (
                <td
                  key={college.id}
                  className="p-4 border"
                >
                  {college.placements}
                </td>
              ))}
            </tr>

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default ComparePage;