import React, { Component } from "react";
import { ApiContext } from "../../api";

const CountriesCore = () => (WrappedComponent) => {
  return class extends Component {
    static contextType = ApiContext;

    constructor(props) {
      super(props);

      this.countries = [];

      this.state = {
        regionOptions: [],
        sortOptions: ["Name", "Population"],
        filteredCountries: [],
      };
    }

    prepareRegions = (data) => {
      return [...new Set(data.map((countrie) => countrie.region))].filter(
        (region) => !!region
      );
    };

    searchCountries = (data, searchValue) => {
      if (!searchValue || searchValue === "default") return data;

      const pattern = /^(<|<=|>|>=)[0-9]+$/;

      const lowerSearchValue = searchValue.trim().toLowerCase();

      return data.filter((countrie) => {
        return (
          countrie.name.toLowerCase().indexOf(lowerSearchValue) !== -1 ||
          countrie.capital.toLowerCase().indexOf(lowerSearchValue) !== -1 ||
          countrie.region.toLowerCase().indexOf(lowerSearchValue) !== -1 ||
          (pattern.test(searchValue) &&
            eval(countrie.population + searchValue) &&
            countrie.population > 0)
        );
      });
    };

    async componentDidMount() {
      const state = this.state;
      const payload = await this.context.countries.getCountries();

      this.countries = payload;
      state.filteredCountries = payload;
      state.regionOptions = this.prepareRegions(payload);
      this.setState({ ...state });
    }

    handleSearch = (value) => {
      const state = this.state;
      state.filteredCountries = this.searchCountries(this.countries, value);

      this.setState({ ...state });
    };

    handleCardClick = async (countrie) => {
      this.props.history.push(`/country/${countrie.name.toLowerCase()}`);
    };

    handleRegionSelect = async (region) => {
      const state = this.state;
      let payload = [];

      if (region !== "default") {
        payload = await this.context.countries.getCountriesByRegion(region);
      } else {
        payload = await this.context.countries.getCountries();
      }

      this.countries = payload;
      state.filteredCountries = payload;
      this.setState({ ...state });
    };

    handleSortSelect = (sortBy) => {
      const state = this.state;
      const key = sortBy.toLowerCase();

      state.filteredCountries = state.filteredCountries.sort((a, b) => {
        if (key === "name") {
          return a[key].localeCompare(b[key]);
        } else {
          return a[key] - b[key];
        }
      });

      this.setState({ ...state });
    };

    render() {
      const propsToPass = {
        ...this.state,
        handleSearch: this.handleSearch,
        handleCardClick: this.handleCardClick,
        handleRegionSelect: this.handleRegionSelect,
        handleSortSelect: this.handleSortSelect,
      };

      return <WrappedComponent {...propsToPass} />;
    }
  };
};
export default CountriesCore;
