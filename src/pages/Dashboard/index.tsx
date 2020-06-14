import React from 'react';
import { FiClock } from 'react-icons/fi';
import Header from '../../components/Header';
import {
  Background,
  Container,
  Schedule,
  NextAppointment,
  Shift,
} from './styles';

export default function Dashboard() {
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
          </Shift>
          <Shift>
            <strong>Tarde</strong>
          </Shift>
        </Schedule>
      </Container>
    </Background>
  );
}
