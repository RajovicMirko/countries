import React, { Component } from "react";
import { ApiContext } from "../../api";
import { formatNumber } from "../../utils/helpers";

const CountryCore = () => (WrappedComponent) => {
  return class extends Component {
    static contextType = ApiContext;

    constructor(props, context) {
      super(props);

      this.state = {
        country: {},
        borderCountries: [],
      };
    }

    descriptionDataLeft = () => ({
      "Native Name": this.state.country.name,
      Population: formatNumber(this.state.country.population),
      Region: this.state.country.region,
      "Sub Region": this.state.country.subregion,
      Capital: this.state.country.capital || "N/A",
    });

    descriptionDataRight = () => ({
      "Top Level Domain": this.state.country.topLevelDomain,
      Currencies:
        this.state.country.currencies &&
        this.state.country.currencies
          .map((currencie) => currencie.name)
          .join(", "),
      Languages:
        this.state.country.languages &&
        this.state.country.languages
          .map((language) => language.name)
          .join(", "),
    });

    getCountrieByName = async () => {
      const payload = await this.context.countries.getCountrieByName(
        this.props.match.params.name
      );
      return payload[0];
    };

    getBorderedCountries = async (borderedCountriesList) => {
      const payload = await this.context.countries.getBorderedCountries(
        borderedCountriesList
      );

      return payload;
    };

    setInitState = async () => {
      const state = this.state;
      state.country = await this.getCountrieByName();
      state.borderCountries = await this.getBorderedCountries(
        state.country.borders
      );
      this.setState({ ...state });
    };

    async componentDidMount() {
      this.setInitState();
    }

    componentDidUpdate(prevProps) {
      if (this.props.match.params.name !== prevProps.match.params.name) {
        this.setInitState();
      }
    }

    handleGoBack = () => this.props.history.goBack();

    handleBorderCountryClick = (country) => {
      this.props.history.push(`/country/${country.name}`);
      this.forceUpdate();
    };

    render() {
      const propsToPass = {
        ...this.state,
        handleGoBack: this.handleGoBack,
        handleBorderCountryClick: this.handleBorderCountryClick,
        descriptionDataLeft: this.descriptionDataLeft(),
        descriptionDataRight: this.descriptionDataRight(),
      };

      return <WrappedComponent {...propsToPass} />;
    }
  };
};

export default CountryCore;
