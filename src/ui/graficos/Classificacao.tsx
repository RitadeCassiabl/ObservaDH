import React from 'react';

const Classificacao = () => {

  const data = [
    { nome: 'Jane', pls: 1000 },
    { nome: 'John', pls: 92 },
    { nome: 'Alice', pls: 78 },
    { nome: 'Bob', pls: 85 },
    { nome: 'Charlie', pls: 95 },
  ];

  
  //* Ordenação por pontuação
  const sortedData = [...data].sort((a, b) => b.pls - a.pls);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr>
            <th className="px-4 py-2 border-b">Rank</th>
            <th className="px-4 py-2 border-b">Name</th>
            <th className="px-4 py-2 border-b">Score</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((item, index) => (
            <tr key={item.nome} className="hover:bg-gray-100">
              <td className="px-4 py-2 border-b">{index + 1}</td>
              <td className="px-4 py-2 border-b">{item.nome}</td>
              <td className="px-4 py-2 border-b">{item.pls}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Classificacao
;
