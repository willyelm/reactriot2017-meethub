import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import VirtualizedSelect from 'react-virtualized-select'
import SelectPlaces from 'react-select-places'

const StyledFilters= styled.div`
    /* Box model */
    display: flex;
    margin: 0 auto;
    max-width: 680px;
    width: 100%;
    margin-top: -18px;

    /* Visual */
    border: 1px solid ${props => props.theme.grayLight};
    border-radius: 3px;
`;

const Form = styled.form`
    /* Box model */
    display: flex;
`;

const StyledSelectPlaces = styled(SelectPlaces)`
    width: 444px;

    .Select-control {
        border: none;
        border-radius: 0;
    }

    .Select-placeholder, .Select--single > .Select-control .Select-value {
        color: ${props => props.theme.grayLight};
        font-size: .9375rem;
    }

    .Select-arrow-zone {
        display: none;
    }

    .Select-menu-outer {
        box-shadow: none;
        width: 444px;
    }
`;

const options = [
    { label: 'JavaScript', value: 'JavaScript' },
    { label: 'Python', value: 'Python' },
];

class Filters extends PureComponent {

    handleChangeLanguage = value => {
        this.props.updateLanguages(value.map(v => v.value));
    }

    handleChangeLocation = value => {
        this.props.updateGeoLocation(value);
    }

    handleSubmit = event => {
        event.preventDefault();
        if (!(this.props.geoLocation.empty && this.props.languages.empty)) {
            console.log(this.props.geoLocation);
            return this.props.searchUsers({
                language: this.props.languages.selectedLanguages,
                location: this.props.geoLocation.empty ? [] : this.props.geoLocation.location[0]
            });
        }
    }

    render() {
        return (
            <StyledFilters>
                <Form onSubmit={this.handleSubmit}>
                    <StyledSelectPlaces
                      value={{placeId: this.props.geoLocation.placeId}}
                      onChange={this.handleChangeLocation}
                      clearable={false}
                      placeholder='Select city...'
                      autocompletionRequest={{
                          types: ['(cities)']
                        }}
                    />
                    <VirtualizedSelect
                      options={options}
                      onChange={this.handleChangeLanguage}
                      value={this.props.languages.selectedLanguages}
                      multi
                    />
                    <button disabled={this.props.geoLocation.empty && this.props.languages.empty}>
                        Search
                    </button>
                </Form>
            </StyledFilters>
        );
    }
}


Filters.defaultProps = {
    updateLanguages: () => null,
    updateGeoLocation: () => null,
    geoLocation: {},
    languages: {}
};

Filters.propTypes = {
    updateLanguages: PropTypes.func,
    updateGeoLocation: PropTypes.func,
    geoLocation: PropTypes.object,
    languages: PropTypes.object
};

export default Filters;
