import useAbortableFetch from "./useAbortableFetch";
import {useEffect} from "react";

/**
 * Example data:
 * `[
 *   {
 *     "book_color": "#ccccff",
 *     "book_number": 10,
 *     "short_name": "1Moos",
 *     "long_name": "Ensimmäinen Mooseksen kirja"
 *   }, ...`
 * @returns {{data: unknown, loading: boolean, error: unknown}}
 */
const useBibleBooks = () => {
    return useAbortableFetch("https://raamattu.app/api/v1/enumerate_books")
}

/**
 * Chapter may be omitted. Example case when chapter is omitted: `{"NumChapters":50}`.
 *
 * In case both args are defined, data will be different:
 * `{
 *   "Verses": [
 *     {
 *       "num": 1,
 *       "text": "Alussa loi Jumala taivaan ja maan."
 *     }, ...`
 * @param book
 * @param chapter
 * @returns {{data: unknown, loading: boolean, error: unknown}}
 */
const useBibleBook = (book, chapter) => {
    if (!chapter) {
        return useAbortableFetch(`https://raamattu.app/api/v1/${book}/num_chapters`)
    }
    return useAbortableFetch(`https://raamattu.app/api/v1/${book}/${chapter}`)
}


const useSearch = (search, setResults) => {
    const {data, error, loading} = useAbortableFetch(`https://raamattu.app/api/v1/search/${search}`)

    useEffect(() => {
        if (!loading && data) {
            setResults(data.Ok)
        }
    }, [data, loading]);

    return {error, loading}
}


export {useBibleBooks, useBibleBook, useSearch}