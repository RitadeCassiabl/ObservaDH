'use client';
import dynamic from 'next/dynamic';
import 'swagger-ui-react/swagger-ui.css';

const SwaggerUI = dynamic(() => import('swagger-ui-react'), { ssr: false });

export default function SwaggerPage() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-semibold mb-4">📚 Documentação da API</h1>
      <div className="rounded-xl shadow-lg overflow-hidden">
        <SwaggerUI
          url="/api/swagger"
          docExpansion="none"
          deepLinking={true}
          defaultModelsExpandDepth={-1}
        />
      </div>
    </div>
  );
}
