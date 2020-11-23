import React, { Component } from "react";
import CountriesCore from "./CountriesCore";
import styled from "styled-components";

import { formatNumber } from "../../utils/helpers";

import RouterView from "../../components/RouterView";
import Input from "../../components/Input";
import Select from "../../components/Select";
import Card from "../../components/Card";

const CountriesStyle = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
`;

@CountriesCore()
class Countries extends Component {
  render() {
    const {
      filteredCountries,
      regionOptions,
      sortOptions,
      handleSearch,
      handleCardClick,
      handleRegionSelect,
      handleSortSelect,
    } = this.props;

    const header = (
      <>
        <Input
          type="text"
          placeholder="Search for a country..."
          icon="fas fa-search"
          onChange={handleSearch}
        />
        <Select
          defaultText="Filter by Region"
          options={regionOptions}
          onChange={handleRegionSelect}
        />
        <Select
          defaultText="Sort by"
          options={sortOptions}
          onChange={handleSortSelect}
        />
      </>
    );

    return (
      <RouterView header={header}>
        <CountriesStyle>
          {filteredCountries.map((countrie) => (
            <Card
              key={countrie.name}
              img={countrie.flag}
              title={countrie.name}
              description={{
                Population: formatNumber(countrie.population) || "N/A",
                Region: countrie.region || "N/A",
                Capital: countrie.capital || "N/A",
              }}
              onClick={() => handleCardClick(countrie)}
            />
          ))}
        </CountriesStyle>
      </RouterView>
    );
  }
}

export default Countries;
