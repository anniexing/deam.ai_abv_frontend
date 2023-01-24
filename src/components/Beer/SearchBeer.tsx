import { useRef, ChangeEvent, useState } from "react";
import { Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import styles from "./SearchBeer.module.css";
import { debounce } from "lodash";
// @ts-ignore
const SearchBeers = ({ filterBeers }) => {
  const beerNameRef = useRef<HTMLInputElement>(null);
  const abvRef = useRef<HTMLInputElement>(null);
  const [abvOption, setAbvOption] = useState<string>("");
  const [isAbvTextDisabled, setAbvTextDisabled]=useState<boolean>(true);

  const handleOnChange = debounce((event: ChangeEvent) => {
    const beerName = beerNameRef.current?.value;
    filterBeers({ beer_name: beerName });
  }, 500);

  const handleOnChangeABV = debounce((event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const abvValue=abvRef.current?.value;
    filterBeers({ abvOption,abvValue });
  }, 500);

  const handleOnChangeAbvOptions = (event:ChangeEvent<HTMLInputElement>) => {
    const abvOption = event.currentTarget.value;
    const abvValue= abvRef.current?.value;
    if(abvOption) {
      setAbvOption(abvOption);
      setAbvTextDisabled(false);
      filterBeers({ abvOption,abvValue })
    }
  }
  return (
    <Row>
      <Col>
        <Form.Group className={styles.searchName}>
          <Form.Control
            type="text"
            ref={beerNameRef}
            placeholder="Search By Name"
            onChange={(event) => handleOnChange(event)}
          />
        </Form.Group>
        <Form.Group className={styles.abv_option}>
          <Form.Check
              type="radio"
              value="abv_gt"
              aria-label="abv_gt"
              label="abv_gt"
              onChange={(event) =>handleOnChangeAbvOptions(event)}
              checked={abvOption === "abv_gt"}
              className={styles.radio}
          />
          <Form.Check
              type="radio"
              value="abv_lt"
              aria-label="abv_lt"
              label="abv_lt"
              onChange={handleOnChangeAbvOptions}
              checked={abvOption === "abv_lt"}
              className={styles.radio}
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="number"
            ref={abvRef}
            step="1"
            min="0"
            placeholder="ABV Value"
            onChange={(event) => handleOnChangeABV(event)}
            disabled={isAbvTextDisabled}
          />
        </Form.Group>

      </Col>
    </Row>
  );
};

export default SearchBeers;
