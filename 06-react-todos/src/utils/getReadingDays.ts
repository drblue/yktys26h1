/**
 * Get the number of days it takes to read a book.
 *
 * 20 pages = 1 day
 * 21 pages = 2 days
 * 39 pages = 2 days
 *
 * @param pages The number of pages in the book
 * @param pagesPerDay How many pages is read per day
 */
export const getReadingDays = (pages: number, pagesPerDay = 20) => {
	return Math.ceil(pages / pagesPerDay);
}
