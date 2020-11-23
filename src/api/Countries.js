import axios from "../utils/axios";
import { getApiUrl } from "../utils/url";

export default (() => {
  const getCountries = async () => {
    const path = "/all";

    const payload = await axios("get", path);
    return payload.data;
  };

  const getCountriesByRegion = async (region) => {
    const lowerRegion = region.toLowerCase();
    const path = `/region/${lowerRegion}`;

    const payload = await axios("get", path);
    return payload.data;
  };

  const getCountrieByName = async (countrieName) => {
    const preparedCountrieName = encodeURIComponent(countrieName);
    const query = {
      fullText: true,
    };
    const path = getApiUrl(`/name/${preparedCountrieName}`, query);

    const payload = await axios("get", path);
    return payload.data;
  };

  const getBorderedCountries = async (borderedCountriesList) => {
    if (!borderedCountriesList.length) return null;
    const query = {
      codes: borderedCountriesList.join(";"),
    };
    const path = getApiUrl(`/alpha`, query);

    const payload = await axios("get", path);
    return payload.data;
  };

  return {
    getCountries,
    getCountriesByRegion,
    getCountrieByName,
    getBorderedCountries,
  };
})();
