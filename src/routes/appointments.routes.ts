import { Router } from "express";
import { startOfHour, parseISO } from "date-fns";

import AppointmentsRepository from "../repositories/AppointmentsRepository";
import CreateAppointmentService from "../services/CreateAppointmentService";

const appointmentsRouter = Router();

const appointmentsRepository = new AppointmentsRepository


appointmentsRouter.post("/", (request, response) => {
  try {
    const { provider, date } = request.body;

    const dateParsed = parseISO(date);

    const createAppointmentService = new CreateAppointmentService(appointmentsRepository);
    const appointment = createAppointmentService.execute({ provider, date: dateParsed });

    return response.status(200).json(appointment);
  }
  catch (err) {
    return response.status(400).json({error:err.message})
  }
});

appointmentsRouter.get("/", (request, response) => {
  const appointments = appointmentsRepository.all();

  return response.status(200).json(appointments);
});

export default appointmentsRouter;
