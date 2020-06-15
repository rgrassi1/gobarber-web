import React, { useCallback, useState, useEffect, useMemo } from 'react';
import { FiClock } from 'react-icons/fi';
import DayPicker, { DayModifiers } from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import api from '../../services/api';
import { useAuth } from '../../hooks/auth';
import Header from '../../components/Header';
import {
  Background,
  Container,
  Schedule,
  NextAppointment,
  Shift,
  Appointment,
  Calendar,
} from './styles';

interface IDayAvailability {
  day: number;
  available: boolean;
}

export default function Dashboard() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [monthAvailability, setMonthAvailability] = useState<
    IDayAvailability[]
  >([]);

  const { user } = useAuth();

  useEffect(() => {
    api
      .get(`/providers/${user.id}/month-availability`, {
        params: {
          year: currentMonth.getFullYear(),
          month: currentMonth.getMonth() + 1,
        },
      })
      .then((response) => {
        setMonthAvailability(response.data);
      });
  }, [currentMonth, user.id]);

  const disabledDays = useMemo(() => {
    const days = monthAvailability
      .filter((monthDay) => !monthDay.available)
      .map((monthDay) => {
        return new Date(
          currentMonth.getFullYear(),
          currentMonth.getMonth(),
          monthDay.day,
        );
      });
    return days;
  }, [currentMonth, monthAvailability]);

  const handleMonthChange = useCallback((month: Date) => {
    setCurrentMonth(month);
  }, []);

  const handleDateChange = useCallback((day: Date, modifiers: DayModifiers) => {
    if (modifiers.available) {
      setSelectedDate(day);
    }
  }, []);

  return (
    <Background>
      <Header />
      <Container>
        <Schedule>
          <h1>Horários agendados</h1>
          <p>
            <span>Hoje</span>
            <span>Dia 15</span>
            <span>Segunda-feira</span>
          </p>

          <NextAppointment>
            <strong>Atendimento a seguir</strong>
            <div>
              <img
                src="https://avatars2.githubusercontent.com/u/29978669?s=460&u=2154777fd9f76fc5cbdc2a275276d2bd830de78e&v=4"
                alt="Rodrigo Grassi"
              />
              <div>
                <strong>Rodrigo Grassi</strong>
                <span>
                  <FiClock />
                  &nbsp; 08:00
                </span>
              </div>
            </div>
          </NextAppointment>
          <Shift>
            <strong>Manhã</strong>
            <Appointment>
              <span>
                <FiClock />
                &nbsp; 08:00
              </span>
              <div>
                <img
                  src="https://avatars2.githubusercontent.com/u/29978669?s=460&u=2154777fd9f76fc5cbdc2a275276d2bd830de78e&v=4"
                  alt="Rodrigo Grassi"
                />
                <strong>Rodrigo Grassi</strong>
              </div>
            </Appointment>
            <Appointment>
              <span>
                <FiClock />
                &nbsp; 09:00
              </span>
              <div>
                <img
                  src="https://avatars2.githubusercontent.com/u/29978669?s=460&u=2154777fd9f76fc5cbdc2a275276d2bd830de78e&v=4"
                  alt="Rodrigo Grassi"
                />
                <strong>Rodrigo Grassi</strong>
              </div>
            </Appointment>
          </Shift>
          <Shift>
            <strong>Tarde</strong>
            <Appointment>
              <span>
                <FiClock />
                &nbsp; 13:00
              </span>
              <div>
                <img
                  src="https://avatars2.githubusercontent.com/u/29978669?s=460&u=2154777fd9f76fc5cbdc2a275276d2bd830de78e&v=4"
                  alt="Rodrigo Grassi"
                />
                <strong>Rodrigo Grassi</strong>
              </div>
            </Appointment>
          </Shift>
        </Schedule>
        <Calendar>
          <DayPicker
            weekdaysShort={['D', 'S', 'T', 'Q', 'Q', 'S', 'S']}
            fromMonth={new Date()}
            disabledDays={[{ daysOfWeek: [0, 6] }, ...disabledDays]}
            modifiers={{
              available: { daysOfWeek: [1, 2, 3, 4, 5] },
            }}
            onDayClick={handleDateChange}
            onMonthChange={handleMonthChange}
            selectedDays={selectedDate}
            months={[
              'Janeiro',
              'Fevereiro',
              'Março',
              'Abril',
              'Maio',
              'Junho',
              'Julho',
              'Agosto',
              'Setembro',
              'Outubro',
              'Novembro',
              'Novembro',
              'Dezembro',
            ]}
          />
        </Calendar>
      </Container>
    </Background>
  );
}
