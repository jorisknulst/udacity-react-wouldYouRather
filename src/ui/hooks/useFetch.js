import { useEffect, useState } from "react";

export const useFetch = (entity = {}, fetchAction) => {
  const [fetched, setFetched] = useState(false);

  /* Fetch the data if still empty */
  useEffect(() => {
    if (!Object.values(entity).length) fetchAction();
  }, []);

  /* Store data in local state */
  useEffect(() => {
    if (Object.values(entity).length) setFetched(true);
  }, [entity]);

  return fetched;
};
