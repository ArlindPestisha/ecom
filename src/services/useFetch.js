import { useState, useRef, useEffect } from "react";

const baseUrl = "http://localhost:3001/";

// export default function useFetch(url) {
//   const isMounted = useRef(false);
//   const [data, setData] = useState(null);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     isMounted.current = true;
//     async function init() {
//       try {
//         const response = await fetch(baseUrl + url);
//         if (response.ok) {
//           const json = await response.json();
//           if (isMounted.current) setData(json);
//         } else {
//           throw response;
//         }
//       } catch (e) {
//         if (isMounted.current) setError(e);
//       } finally {
//         if (isMounted.current) setLoading(false);
//       }
//     }
//     init();

//     return () => {
//       isMounted.current = false;
//     };
//   }, [url]);

//   return { data, error, loading };
// }

// export function Fetch({ url, children }) {
//   const { data, loading, error } = useFetch(url);
//   return children(data, loading, error);
// }

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function init() {
      try {
        const response = await fetch(baseUrl + url);
        if (response.ok) {
          const json = await response.json();
          setData(json);
        } else {
          throw response;
        }
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    }
    init();
  }, [url]);

  return { data, error, loading };
};

export default useFetch;
