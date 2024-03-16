import { Item } from "./Main";

interface CategoryProps {
  category: string;
  items: Item[];
  toggleItem: (id: string) => void;
}

function Category({ category, items, toggleItem }: CategoryProps) {
  const countDone = items.reduce(
    (acc, item) => acc + (item.done ? item.count : 0),
    0,
  );
  const countTotal = items.reduce((acc, item) => acc + item.count, 0);

  return (
    <div>
      <div className="flex gap-4 m-4">
        <h2 className="font-bold leading-5 grow text-neutral-900 capitalize">
          {category}
        </h2>
        <div className="text-neutral-400 leading-5">
          {countDone} / {countTotal}
        </div>
      </div>
      <ul className="bg-white p-4 rounded-2xl shadow-custom divide-y divide-gray-100">
        {items.map(({ id, name, count, done }) => (
          <li
            key={id}
            className="py-3 flex gap-3 cursor-pointer first:pt-0 last:pb-0 relative"
            onClick={() => toggleItem(id)}
          >
            {done ? (
              <>
                <button className="absolute inset-0 pointer-events-none">
                  <span className="sr-only">
                    Completed item: {name}, quantity: {count}
                  </span>
                </button>
                <div className="w-6 h-6 bg-blue-600 rounded-full flex justify-center items-center">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.22917 12.242L13.8654 6.62663C13.9754 6.51658 14.0983 6.46369 14.234 6.46796C14.3697 6.47224 14.4952 6.53207 14.6106 6.64746C14.726 6.76283 14.7836 6.88703 14.7836 7.02004C14.7836 7.15304 14.726 7.27724 14.6106 7.39263L8.71473 13.2884C8.57798 13.4252 8.4196 13.4936 8.23959 13.4936C8.05957 13.4936 7.90119 13.4252 7.76444 13.2884L5.38944 10.9135C5.2794 10.8034 5.2217 10.6806 5.21636 10.5449C5.21102 10.4092 5.26604 10.2837 5.38142 10.1683C5.49681 10.0529 5.621 9.99521 5.754 9.99521C5.88702 9.99521 6.01121 10.0529 6.12659 10.1683L8.22917 12.242Z"
                      fill="#fff"
                    />
                  </svg>
                </div>
                <div className="text-neutral-400 line-through tracking-wide grow">
                  {name}
                </div>
              </>
            ) : (
              <>
                <button className="absolute inset-0 pointer-events-none">
                  <span className="sr-only">
                    Uncompleted item: {name}, quantity: {count}
                  </span>
                </button>
                <div className="w-6 h-6 rounded-full shadow-custom"></div>
                <div className="font-bold text-neutral-900 tracking-wide grow">
                  {name}
                </div>
              </>
            )}
            <div className="flex gap-1 text-neutral-400">
              <span>×</span>
              <span className="min-w-5 text-center">{count}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Category;
