import React from "react";

import { Container, Col, Row } from "react-bootstrap";
import FullCalendar from "@fullcalendar/react";
import googleCalendarPlugin from "@fullcalendar/google-calendar";
import dayGridPlugin from "@fullcalendar/daygrid";
import { googleApiKey } from "../../../secrets";

const SchoolCalendar = () => {
  //CALENDAR ID : tabernacle.school1@gmail.com
  //FULL CALENDAR DOCS: https://fullcalendar.io/docs#toc

  console.log("SECRET", googleApiKey);
  return (
    <section id="Calendar" className="py-5">
      <h2 className="display-4 text-center mb-3 pt-5">Calendar</h2>
      <hr className="section-hr mb-md-3" />
      <Container className="py-5">
        <Row className="justify-content-center text-end">
          <Col lg={10} xl={8}>
            <FullCalendar
              plugins={[googleCalendarPlugin, dayGridPlugin]}
              googleCalendarApiKey={googleApiKey}
              events={{ googleCalendarId: "tabernacle.school1@gmail.com" }}
            />
            <a
              href="https://drive.google.com/file/d/1GZ1bmXDNX4m3_PeZMA5e6ley9Z3n_RjU/view?usp=sharing"
              className="btn btn-primary text-white fw-bold mt-5"
            >
              All Events
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SchoolCalendar;
