import { Loader } from "lucide-react";

const Loading = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-800 to-purple-500 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Spinner with glow */}
      <div className="p-6 rounded-full shadow-lg shadow-purple-700/30 animate-pulse bg-purple-600/20">
        <Loader className="animate-spin w-16 h-16 text-white drop-shadow-lg" />
      </div>

      {/* Tagline or loading text */}
      <p className="mt-6 text-lg text-white font-medium animate-pulse tracking-wide">
        Lazeez Diet is loading...
      </p>
    </div>
  );
};

export default Loading;
