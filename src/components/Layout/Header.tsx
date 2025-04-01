import { useLocation } from "react-router";
import { ThemeButton } from "@/components/Button/ThemeButton";
import { Svg } from "@/components/Optimizing/Svg";
import { useFilterContext } from "@/context/FilterContent";

export function Header() {
  const { category, setCategory } = useFilterContext();
  const location = useLocation();

  return (
    <header className="absolute right-4 top-4 z-50 -m-2.5 p-2.5">
      <div className="flex items-center gap-x-5">
        {location.pathname === "/" && (
          <>
            <label htmlFor="category" className="sr-only">
              Project Category
            </label>
            <div className="grid grid-cols-1">
              <select
                id="category"
                name="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="col-start-1 row-start-1 w-full appearance-none rounded-full bg-gray-50 dark:bg-gray-950 py-1 pl-4 pr-7 text-sm/6 text-gray-600 dark:text-gray-400 cursor-pointer outline-1 -outline-offset-1 outline-gray-400 dark:outline-gray-600 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600"
              >
                <option value="all">All</option>
                <option value="Front-end">Front-end</option>
                <option value="Back-end">Back-end</option>
                <option value="Full-stack">Full-stack</option>
                <option value="Application">Android</option>
              </select>
              <Svg
                variant="outline"
                width={14}
                height={14}
                draw={["m19.5 8.25-7.5 7.5-7.5-7.5"]}
                className="pointer-events-none col-start-1 row-start-1 mr-2 self-center justify-self-end"
              />
            </div>
          </>
        )}

        <ThemeButton />
      </div>
    </header>
  );
}
