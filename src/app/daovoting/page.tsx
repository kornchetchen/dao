import { Input } from "@/components/ui/input";
import { Sidebar } from "@/components/ui/sidebar";

export default function DAOVoting() {
  return (
    <div className="min-h-screen">
      <Sidebar />
      <div className="pl-64">
        <main className="p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold mb-2">DAO Voting</h1>
            <p className="text-gray-400">
              This is a trial voting phase. Vote for projects you're interested in to secure early investment access when they officially launch.{" "}
              <a href="#" className="text-blue-500 hover:text-blue-400">
                Learn more
              </a>
            </p>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="relative w-64">
                <Input
                  placeholder="Search by project name"
                  className="bg-gray-900 border-gray-800"
                />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}