import { Components } from "react-markdown";
import Image from "next/image";

export const markdownComponents: Components = {
  h1: ({ node, ...props }) => <h1 className="text-3xl font-bold mb-6" {...props} />,
  h2: ({ node, ...props }) => <h2 className="text-2xl font-bold mt-10 mb-5" {...props} />,
  h3: ({ node, ...props }) => <h3 className="text-xl font-semibold mt-8 mb-4" {...props} />,
  h4: ({ node, ...props }) => <h4 className="text-lg font-semibold mt-6 mb-3" {...props} />,
  h5: ({ node, ...props }) => <h5 className="text-base font-semibold mt-5 mb-2" {...props} />,
  h6: ({ node, ...props }) => <h6 className="text-sm font-semibold mt-4 mb-2" {...props} />,
  p: ({ node, ...props }) => <p className="mb-6 leading-relaxed" {...props} />,
  ul: ({ node, ...props }) => <ul className="mb-6 ml-6 list-disc space-y-3" {...props} />,
  ol: ({ node, ...props }) => <ol className="mb-6 ml-6 list-decimal space-y-3" {...props} />,
  li: ({ node, ...props }) => <li {...props} />,
  blockquote: ({ node, ...props }) => (
    <blockquote className="border-l-4 border-gray-600 pl-6 my-6 italic" {...props} />
  ),
  code: ({ node, ...props }) => (
    <code className="bg-gray-800 px-2 py-1 rounded text-sm" {...props} />
  ),
  pre: ({ node, ...props }) => (
    <pre className="bg-gray-900 p-6 rounded-lg overflow-x-auto mb-6" {...props} />
  ),
  a: ({ node, ...props }) => (
    <a className="underline hover:opacity-80" {...props} />
  ),
  img: ({ node, ...props }) => (
    <span className="block my-6">
      <img 
        {...props}
        className="w-full h-auto rounded-lg"
        loading="lazy"
      />
    </span>
  ),
  table: ({ node, ...props }) => (
    <div className="overflow-x-auto mb-6">
      <table className="min-w-full border border-gray-700" {...props} />
    </div>
  ),
  thead: ({ node, ...props }) => <thead className="" {...props} />,
  th: ({ node, ...props }) => (
    <th className="border border-gray-700 px-4 py-3 text-left font-semibold" {...props} />
  ),
  td: ({ node, ...props }) => (
    <td className="border border-gray-700 px-4 py-3" {...props} />
  ),
  strong: ({ node, ...props }) => <strong className="font-bold" {...props} />,
  em: ({ node, ...props }) => <em className="italic" {...props} />,
};
