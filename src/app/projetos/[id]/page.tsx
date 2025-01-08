/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { useParams } from "next/navigation";

const page: React.FC = () => {
  const params = useParams();
  const id = params.id;
  return (
    <div>
      {id}
    </div>
  );
};

export default page;
