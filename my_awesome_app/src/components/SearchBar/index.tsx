import { TextField } from '@mui/material';
import React from 'react';

export interface SearchBarProps {
  searchString: string;
  handleSearchString: (value: string) => void;
}

class SearchBar extends React.PureComponent<SearchBarProps> {
  componentDidMount() {
    const search = window.localStorage.getItem('searchString');
    if (search) {
      this.props.handleSearchString(search);
    }
  }

  componentWillUnmount(): void {
    localStorage.setItem('searchString', this.props.searchString);
  }

  render() {
    const { searchString, handleSearchString } = this.props;
    return (
      <TextField
        label="Search"
        variant="outlined"
        fullWidth
        data-testid="search-bar"
        value={searchString}
        onChange={(e) => handleSearchString(e.target.value)}
        sx={{
          '& label.Mui-focused': {
            color: 'orange',
          },
          '& .MuiOutlinedInput-root': {
            '&.Mui-focused fieldset': {
              borderColor: 'orange',
            },
          },
        }}
      />
    );
  }
}

export default SearchBar;
