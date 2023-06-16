const Languages = ({ country }) => {
    return (
      <ul>
        {Object.values(country.languages)
          .map(lang => <li>{lang}</li>)}
      </ul>
    )
  }

  export default Languages