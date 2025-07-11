"use client";

import { useState } from "react";

type FilterProps = {
  onFilter: (filters: { priority?: string; status?: string }) => void;
  onClear: () => void;
};

const Filter = ({ onFilter, onClear }: FilterProps) => {
  const [priority, setPriority] = useState<string>("all");
  const [status, setStatus] = useState<string>("all");

  const handleSearch = () => {
    onFilter({
      priority: priority === "all" ? undefined : priority,
      status: status === "all" ? undefined : status,
    });
  };

  const handleClear = () => {
    setPriority("all");
    setStatus("all");
    onClear();
  };

  const hasActiveFilters = priority !== "all" || status !== "all";

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm mb-6">
      <div className="p-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 flex-1">
            <div className="w-full sm:w-auto">
              <select
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                className="w-full sm:w-40 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-sm"
              >
                <option value="all">All Priorities</option>
                <option value="low">🟢 Low</option>
                <option value="medium">🟡 Medium</option>
                <option value="high">🔴 High</option>
              </select>
            </div>

            <div className="w-full sm:w-auto">
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="w-full sm:w-40 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-sm"
              >
                <option value="all">All Statuses</option>
                <option value="to_do">⚪ To Do</option>
                <option value="in_progress">🔵 In Progress</option>
                <option value="done">🟢 Done</option>
              </select>
            </div>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={handleSearch}
              className="flex-1 sm:flex-none inline-flex items-center justify-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-md shadow-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <svg
                className="h-4 w-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              Search
            </button>

            {hasActiveFilters && (
              <button
                onClick={handleClear}
                className="flex-1 sm:flex-none inline-flex items-center justify-center px-4 py-2 bg-white hover:bg-gray-50 text-gray-700 text-sm font-medium rounded-md border border-gray-300 shadow-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                <svg
                  className="h-4 w-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                Clear
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
