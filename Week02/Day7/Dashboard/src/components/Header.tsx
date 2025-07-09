import { Bell, Search } from 'lucide-react';

const Header = () => {
  return (
    <div className="flex items-center justify-between p-4 border-b">
      <div className="flex items-center gap-2 bg-white border rounded px-3 py-1 w-80">
        <Search className="text-gray-400" />
        <input
          type="text"
          placeholder="Search..."
          className="outline-none w-full text-sm text-gray-700"
        />
      </div>

      <div className="flex items-center gap-4">
        <Bell className="text-gray-600 text-lg" />
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gray-300" />
          <span className="text-sm font-medium text-gray-800">Emma Kwan</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
