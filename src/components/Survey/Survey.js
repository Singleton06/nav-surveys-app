import React from 'react';
import TextField from 'material-ui/TextField';

export default class Survey extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      roomNumber: '',
      residenceHall: '',
      houseNumber: '',
      offCampusAddress: '',
      emailAddress: '',
      cellPhoneNumber: '',
      yearInSchool: '',
      gender: '',
      greek: false,
      ethnicity: '',
      band: false,
      spiritualInterest: undefined,
      arePeopleBasicallyGood: '',
      bridge: false,
      bibleStudy: false,
      emailList: '',
    }
  }

  render() {
    return (
      <div className="survey-container">
        <TextField
          id="first_name"
          label="First Name"
          value={this.state.firstName}
          onChange={event => this.setState({ firstName: event.target.value })}
        />

        <TextField
        id="last_name"
        label="Last Name"
        value={this.state.lastName}
        onChange={event => this.setState({ lastName: event.target.value })}
        marginForm
        />
      </div>
    );
  }
}
