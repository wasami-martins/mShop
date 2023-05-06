import { Container } from "reactstrap";
import "../../../styles/commonSection.css";

const CommonSection = ({ title }) => {
  return (
    <section className="common__section">
      <Container className="text-white text-center">
        <h1>{title}</h1>
      </Container>
    </section>
  );
};

export default CommonSection;
