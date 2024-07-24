const Index = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">Hello, World!</h1>
      
      <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Verbose Dummy Data</h2>
        
        <div className="space-y-4">
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi vel bibendum tincidunt, nisl nunc aliquet nunc, vitae aliquam nisl nunc eu nunc. Sed euismod, nisi vel bibendum tincidunt, nisl nunc aliquet nunc, vitae aliquam nisl nunc eu nunc.
          </p>
          
          <ul className="list-disc list-inside text-gray-600">
            <li>Dummy item 1: Excepteur sint occaecat cupidatat non proident</li>
            <li>Dummy item 2: Sunt in culpa qui officia deserunt mollit anim id est laborum</li>
            <li>Dummy item 3: Sed ut perspiciatis unde omnis iste natus error sit voluptatem</li>
          </ul>
          
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 p-2">Column 1</th>
                <th className="border border-gray-300 p-2">Column 2</th>
                <th className="border border-gray-300 p-2">Column 3</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-2">Data 1</td>
                <td className="border border-gray-300 p-2">Data 2</td>
                <td className="border border-gray-300 p-2">Data 3</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">Info A</td>
                <td className="border border-gray-300 p-2">Info B</td>
                <td className="border border-gray-300 p-2">Info C</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-2">Additional Information</h3>
        <p className="text-gray-600">
          This is a simple HTML structure with some dummy content. It doesn't use any React components or complex logic. The styling is done using Tailwind CSS classes for a clean and responsive layout.
        </p>
      </div>
    </div>
  );
};

export default Index;