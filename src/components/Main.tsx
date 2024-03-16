import { useEffect, useState } from "react";
import Category from "./Category";

const API_URL = "https://mocki.io/v1/d392411d-4379-436f-adb1-440ed09839b2";

interface ItemBase {
  id: string;
  category: string;
  name: string;
  count: number;
}

export interface Item extends ItemBase {
  done: boolean;
}

function Main() {
  const [items, setItems] = useState<Item[]>([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  async function fetchItems() {
    try {
      const response = await fetch(API_URL);
      const responseJson: ItemBase[] = await response.json();
      const items = responseJson.map((item) => ({ ...item, done: false }));
      setItems(items);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  function toggleItem(id: string) {
    // Here is a place where we could make an async call to individual item to change its status
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, done: !item.done } : item,
      ),
    );
  }

  useEffect(() => {
    fetchItems();
  }, []);

  if (loading) {
    return (
      <svg
        className="animate-spin h-5 w-5 text-white mb-16 mx-auto"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="#e5e5e5"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="#525252"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
    );
  }

  if (error) {
    return <p>Error</p>;
  }

  // This is a good place to ude Object.groupBy but the env support is limited
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/groupBy
  const itemsCategorised = items.reduce(
    (acc, item) => {
      if (acc[item.category]) {
        acc[item.category].push(item);
        return acc;
      }

      acc[item.category] = [item];
      return acc;
    },
    {} as Record<string, Item[]>,
  );
  const itemsSorted = Object.entries(itemsCategorised).sort((left, right) =>
    left[1].length > right[1].length ? -1 : 1,
  );

  return (
    <main className="mb-14 grid grid-cols-1 gap-6 xl:grid-cols-2">
      {itemsSorted.map(([category, items]) => (
        <Category
          category={category}
          items={items}
          toggleItem={toggleItem}
          key={category}
        />
      ))}
    </main>
  );
}

export default Main;
