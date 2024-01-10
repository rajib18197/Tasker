import ButtonIcon from "./ButtonIcon";

export default function SearchBox() {
  return (
    <form>
      <div class="flex">
        <div class="relative overflow-hidden rounded-lg text-gray-50 md:min-w-[380px] lg:min-w-[440px]">
          <input
            type="search"
            id="search-dropdown"
            class="z-20 block w-full bg-gray-800 px-4 py-2 pr-10 focus:outline-none"
            placeholder="Search Task"
            required
          />

          <ButtonIcon
            type="submit"
            className="absolute right-2 top-0 h-full rounded-e-lg text-white md:right-4"
            icon={
              <svg
                class="h-4 w-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            }
          >
            Search
          </ButtonIcon>
        </div>
      </div>
    </form>
  );
}
