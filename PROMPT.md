# Prompt

## Step 1

You’re given an array of objects. Each object represents a film. You do NOT know what the keys of the
objects are.

Display this data in a table.

Assumptions:

- The array comes in as the prop `input`.
- Each item in `input` will have the same shape as the others (they will all have the same
fields/keys/types/etc)
- `input` will never be empty
- The values of the properties will always either be `string`s or `number`s.

## Step 2 - Make the table sortable

- On load, the table should be sorting by the first column/key, ascending.
- You can only sort by one column at a time (no multi-sort).
- There must always be one column sorting (no unsorted state).
- When you click on the header of a column that is currently sorting, it should toggle the direction.
- When you click on the header of a column that is NOT current sorting, it should always sort by the
new column ascending.
- There should be some indicator next to the text in the currently-sorted column header showing the
direction it’s sorting in (feel free to use ^ and v. Remember, you aren’t tested on appearance).

**Note**: You have a function called sort which is a light wrapper around lodash’s orderBy function.
It takes a list of objects, a key, and a boolean. It sorts the list based on the values of the objects
at that key, and sorts ascending if the boolean is true, descending otherwise.

## Step 3 - Add full-text-filtering to your table

- Add an input above your table.
- If the input is empty, show all rows.
- If the input is not empty, only show rows where at least one column contains that text.
- Filtering should be case-insensitive.

## Step 4 - Bonus round!

- Address all console warnings (namely, around the keys inside of maps)
- Use useMemo where appropriate
- Use useCallback where appropriate

