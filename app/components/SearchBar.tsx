"use client"

export function SearchBar() {
  return (
    <form className="flex">

      <div>
        <input
          type="text"
          className="px-3 py-2.5 bg-neutral-secondary-medium border border-default-medium rounded-base ps-9 text-heading text-sm focus:ring-brand focus:border-brand block w-full placeholder:text-body"
          placeholder="Search anime name..."
          required
        />
      </div>

      <button
      >
        Submit
      </button>
    </form>

  )
}