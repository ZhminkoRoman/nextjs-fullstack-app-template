import { useRouter } from 'next/router';
import { useState } from 'react';

export interface ISearch {}

const Search: React.FC<ISearch> = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
  };

  return (
    <form
      className="flex flex-col items-center gap-y-5"
      onSubmit={(event) => {
        event.preventDefault();
        router.push(`/results?search=${searchTerm}`);
      }}
    >
      <input
        type="text"
        className="border-2 rounded-full w-5/6 sm:w-128 h-12 px-3"
        value={searchTerm}
        onChange={(event) => handleSearchChange(event.target.value)}
      />
      <div className="space-x-3">
        <button type="submit" className="btn-primary">
          Google search
        </button>
        <button type="submit" className="btn-primary">
          I&apos;m Feeling Lucky
        </button>
      </div>
    </form>
  );
};

export default Search;
