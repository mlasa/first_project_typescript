import Appointment from "../models/Appointment";
import { isEqual } from "date-fns";

interface CreateAppointmentDTO {
  provider: string;
  date: Date;
}

class AppointmentsRepository {
  private appointments: Appointment[] = [];

  constructor() {
    this.appointments = [];
  }

  public findByDate(date: Date): Appointment | null {
    return (
      this.appointments.find((appointment) =>
        isEqual(appointment.date, date)
      ) || null
    );
  }

  public create(data: CreateAppointmentDTO) {
    const appointment = new Appointment({provider:data.provider, date:data.date});
    this.appointments.push(appointment);

    return appointment;
  }

  public all(): Appointment[] | null {
    return this.appointments || null;
  }
}

export default AppointmentsRepository;
