import { startOfHour } from "date-fns";

import AppointmentRepository from "../repositories/AppointmentsRepository";
import Appointment from "../models/Appointment";

interface Request {
  provider: string;
  date: Date;
}

class CreateAppointmentService {
  private appointmentsRepository: AppointmentRepository;

  constructor(appointmentsRepository: AppointmentRepository) {
    this.appointmentsRepository = appointmentsRepository;
  }

  public execute({ provider, date }: Request): Appointment {
    const appointmentDate = startOfHour(date);

    if (this.appointmentsRepository.findByDate(appointmentDate)) {
      throw Error("There is already another appointment in the same time");
    }

    return this.appointmentsRepository.create({
      provider,
      date: appointmentDate,
    });
  }
}
export default CreateAppointmentService;
