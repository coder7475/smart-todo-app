import { useState, KeyboardEvent } from 'react';
import { Button } from '../components/ui/button';

type Priority = 'High' | 'Medium' | 'Low';

type PrioritizedTask = {
  task: string;
  priority: Priority;
  category: string;
};

// simple mock that assigns priorities deterministically
const mockPrioritize = (tasks: string[]): Promise<PrioritizedTask[]> => {
  const categories = ['Work', 'Home', 'Personal'];
  const priorities: Priority[] = ['High', 'Medium', 'Low'];

  const result = tasks.map((task, index) => ({
    task,
    priority: priorities[index % priorities.length],
    category: categories[index % categories.length],
  }));

  return new Promise(resolve => {
    setTimeout(() => resolve(result), 800); // fake latency
  });
};

const Home = () => {
  const [tasks, setTasks] = useState<string[]>([]);
  const [prioritizedTasks, setPrioritizedTasks] = useState<PrioritizedTask[]>([]);
  const [loading, setLoading] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      addTask();
    }
  };

  const addTask = () => {
    const value = inputValue.trim();
    if (!value) return;
    setTasks(prev => [...prev, value]);
    setInputValue('');
    setError(null);
  };

  const removeTask = (index: number) => {
    setTasks(prev => prev.filter((_, i) => i !== index));
  };

  const clearResults = () => {
    setPrioritizedTasks([]);
  };

  const prioritizeTasks = async () => {
    if (!tasks.length) {
      setError('Please add at least one task before prioritizing.');
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const data = await mockPrioritize(tasks);
      setPrioritizedTasks(data);
    } catch (err) {
      setError('Failed to prioritize tasks. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const grouped = prioritizedTasks.reduce(
    (acc, item) => {
      const key = item.priority;
      acc[key] = [...acc[key], item];
      return acc;
    },
    {
      High: [] as PrioritizedTask[],
      Medium: [] as PrioritizedTask[],
      Low: [] as PrioritizedTask[],
    }
  );

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="max-w-3xl mx-auto px-4 py-10 space-y-8">
        <header className="space-y-2">
          <h1 className="text-3xl font-bold">Smart To-Do List</h1>
          <p className="text-sm text-muted-foreground">
            Add your tasks, then let the mock AI prioritize them by urgency and importance.
          </p>
        </header>

        {/* Input + Add Task */}
        <section className="space-y-3">
          <label className="block text-sm font-medium">New task</label>
          <div className="flex gap-2">
            <input
              className="flex-1 rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              placeholder="e.g. Finish the monthly report for the boss"
              value={inputValue}
              onChange={e => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <Button type="button" onClick={addTask} className='bg-blue-500 cursor-pointer'>
              Add Task
            </Button>
          </div>
          {error && (
            <p className="text-xs text-red-500">
              {error}
            </p>
          )}
        </section>

        {/* Unsorted Task List */}
        <section className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Your tasks</h2>
            {tasks.length > 0 && (
              <span className="text-xs text-muted-foreground">
                {tasks.length} task{tasks.length > 1 ? 's' : ''}
              </span>
            )}
          </div>

          {tasks.length === 0 ? (
            <p className="text-sm text-muted-foreground">
              No tasks added yet. Start by adding a few tasks above.
            </p>
          ) : (
            <ul className="space-y-2">
              {tasks.map((task, index) => (
                <li
                  key={index}
                  className="flex items-center justify-between rounded-md border border-border bg-card px-3 py-2 text-sm"
                >
                  <span className="flex-1 pr-3">{task}</span>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    className='cursor-pointer bg-red-700 text-white'
                    onClick={() => removeTask(index)}
                  >
                    Remove
                  </Button>
                </li>
              ))}
            </ul>
          )}
          <Button
            type="button"
            onClick={prioritizeTasks}
            disabled={loading || tasks.length === 0}
          >
            {loading ? 'Prioritizing...' : 'Prioritize Tasks'}
          </Button>
          {prioritizedTasks.length > 0 && (
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={clearResults}
            >
              Clear results
            </Button>
          )}
        </section>

        {/* Prioritized Results */}
        {prioritizedTasks.length > 0 && (
          <section className="space-y-4">
            <h2 className="text-lg font-semibold">Mock AI-prioritized tasks</h2>

            <div className="grid gap-4 md:grid-cols-3">
              {/* High */}
              <div className="space-y-2">
                <h3 className="text-sm font-semibold text-red-600">High</h3>
                {grouped.High.length === 0 ? (
                  <p className="text-xs text-muted-foreground">No high-priority tasks.</p>
                ) : (
                  <ul className="space-y-2 text-xs">
                    {grouped.High.map((item, idx) => (
                      <li
                        key={idx}
                        className="rounded-md border border-border bg-card px-3 py-2"
                      >
                        <p>{item.task}</p>
                        <p className="mt-1 text-[11px] text-muted-foreground">
                          Category: {item.category}
                        </p>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Medium */}
              <div className="space-y-2">
                <h3 className="text-sm font-semibold text-amber-600">Medium</h3>
                {grouped.Medium.length === 0 ? (
                  <p className="text-xs text-muted-foreground">No medium-priority tasks.</p>
                ) : (
                  <ul className="space-y-2 text-xs">
                    {grouped.Medium.map((item, idx) => (
                      <li
                        key={idx}
                        className="rounded-md border border-border bg-card px-3 py-2"
                      >
                        <p>{item.task}</p>
                        <p className="mt-1 text-[11px] text-muted-foreground">
                          Category: {item.category}
                        </p>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Low */}
              <div className="space-y-2">
                <h3 className="text-sm font-semibold text-emerald-600">Low</h3>
                {grouped.Low.length === 0 ? (
                  <p className="text-xs text-muted-foreground">No low-priority tasks.</p>
                ) : (
                  <ul className="space-y-2 text-xs">
                    {grouped.Low.map((item, idx) => (
                      <li
                        key={idx}
                        className="rounded-md border border-border bg-card px-3 py-2"
                      >
                        <p>{item.task}</p>
                        <p className="mt-1 text-[11px] text-muted-foreground">
                          Category: {item.category}
                        </p>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </section>
        )}
      </div>
    </main>
  );
};

export default Home;
