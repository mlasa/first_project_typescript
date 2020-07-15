import { uuid } from "uuidv4";

class Appointment {
  id: string;
  provider: string;
  date: Date;

  constructor(data: Omit<Appointment, "id">) {
    this.id = uuid();
    this.provider = data.provider;
    this.date = data.date;
  }
}

export default Appointment;
