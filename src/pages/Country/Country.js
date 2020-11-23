import React, { Component } from "react";
import CountryCore from "./CountryCore";
import styled from "styled-components";

import RouterView from "../../components/RouterView";
import Button from "../../components/Button";
import Image from "../../components/Image";
import IdValueDescription from "../../components/IdValueDescription";

const CountrieStyle = styled.div`
  display: grid;
  gap: 1rem;
  align-items: center;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-bottom: 2rem;
`;

@CountryCore()
class Country extends Component {
  render() {
    const {
      country,
      borderCountries,
      handleGoBack,
      handleBorderCountryClick,
      descriptionDataLeft,
      descriptionDataRight,
    } = this.props;

    const header = (
      <>
        <Button
          icon="fas fa-arrow-left"
          onClick={handleGoBack}
          style={{ maxWidth: "110px" }}
        >
          Back
        </Button>
      </>
    );

    const descriptionsLeft = Object.keys(descriptionDataLeft).map((key) => {
      return (
        <IdValueDescription
          style={{ display: "flex", gap: "1rem" }}
          key={key}
          id={key}
          value={descriptionDataLeft[key]}
        />
      );
    });

    const descriptionsRight = Object.keys(descriptionDataRight).map((key) => {
      return (
        <IdValueDescription
          style={{ display: "flex" }}
          key={key}
          id={key}
          value={descriptionDataRight[key]}
        />
      );
    });

    return (
      <RouterView header={header}>
        <CountrieStyle>
          <Image img={country.flag} />

          <div>
            <h2 style={{ margin: "0 0 1rem 0" }}>{country.name}</h2>
            <div>
              <div
                className="flex-change"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "2rem",
                  gap: "1rem",
                }}
              >
                <div>{descriptionsLeft}</div>
                <div>{descriptionsRight}</div>
              </div>

              {borderCountries && (
                <IdValueDescription id="Border Countries">
                  {borderCountries.map((country) => {
                    return (
                      <Button
                        key={country.name}
                        style={{
                          padding: "0.3rem 1rem",
                          borderRadius: 0,
                          margin: "0.2rem",
                          maxWidth: "150px",
                        }}
                        onClick={() => handleBorderCountryClick(country)}
                      >
                        {country.name}
                      </Button>
                    );
                  })}
                </IdValueDescription>
              )}
            </div>
          </div>
        </CountrieStyle>
      </RouterView>
    );
  }
}

export default Country;
