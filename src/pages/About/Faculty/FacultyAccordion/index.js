import { Accordion, Row, Col } from "react-bootstrap";
import { facultyData } from "../../../../data/facultyData.js";

import "./index.scss";

const FacultyAccordion = () => {
  return (
    <Accordion>
      {facultyData.map((level, idx) => (
        <Accordion.Item eventKey={`${idx}`} key={level["grade"]}>
          <Accordion.Header>{level["grade"]}</Accordion.Header>
          <Accordion.Body>
            <Row>
              {level["staff"].map((staff, idx) => (
                <Col
                  md={4}
                  lg={3}
                  className="text-center mb-3"
                  key={staff["name"]}
                >
                  <h5 className="fw-bold">{staff["name"]}</h5>
                  {/* <p className="mb-0">{staff["email"]}</p> */}

                  {staff["image"] ? (
                    <img
                      src={staff["image"]}
                      className="img-fluid rounded-circle"
                      alt={staff["name"]}
                      style={{ width: "150px" }}
                    />
                  ) : null}
                  {staff["title"] ? (
                    <div>
                      <span className="fs-5">{staff["title"]}</span>
                    </div>
                  ) : null}
                  <br />
                </Col>
              ))}
            </Row>
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
};

export default FacultyAccordion;
