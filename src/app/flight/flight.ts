export class Flight {

  id: number;

  firstname: string;

  lastname: string;

  emailid: string;

  dob: Date;

  gender: string;

  departuredate: Date;

  destinationdate: Date;

  locations: string;

  classes: string;

  insurancepolicies: string;

  constructor(values: Object = {}) {

    Object.assign(this, values);

  }

}