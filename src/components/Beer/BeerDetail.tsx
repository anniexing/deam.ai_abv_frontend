import { FC } from 'react';
import {Row,Col, Card, ListGroup} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAppSelector } from "../../store/Hooks";
import styles from './BeerDetail.module.css';
import { IngredientsItem} from "../../models/Beer";

const BeerDetail:FC = () => {
    const {beerDetail} = useAppSelector(state => state.beers);
    console.log(beerDetail &&beerDetail?.ingredients["malt"]);

    // @ts-ignore
    return (
      <>
          <Row>
              <Col>
                  <Link to="/" >Back </Link>
              </Col>
          </Row>
          <Row className={styles.detail}>
              <Col>
                  <Card className={styles.beer}>
                      <Card.Body className={styles.image_wrapper}>
                          <Card.Img className={styles.image} src={beerDetail?.image_url} />
                      </Card.Body>
                      <Card.Body>
                          <Card.Title as="h4">{beerDetail?.name}</Card.Title>

                          <Card.Text as="h6">{beerDetail?.tagline}</Card.Text>
                          <Card.Text as="h6">First Brewed: {beerDetail?.first_brewed}</Card.Text>
                          <Card.Text>
                              {beerDetail?.description}
                          </Card.Text>
                          <ListGroup>
                              <ListGroup.Item as="li">
                                 <span>ABV: {beerDetail?.abv}</span>
                              </ListGroup.Item>
                              <ListGroup.Item as="li">
                                  <span>IBU: {beerDetail?.ibu}</span>
                              </ListGroup.Item>
                              <ListGroup.Item as="li">
                                  <span>EBC: {beerDetail?.ebc}</span>
                              </ListGroup.Item>
                              <ListGroup.Item as="li">
                                  <span>VOLUME: {beerDetail?.volume.value} {beerDetail?.volume.unit}</span>
                              </ListGroup.Item>
                              <ListGroup.Item as="li">
                                  <span>BOIL VOLUME: {beerDetail?.boil_volume?.value} {beerDetail?.boil_volume?.unit}</span>
                              </ListGroup.Item>
                              <ListGroup.Item as="li">
                                  <h6>INGREDIENTS</h6>
                                  <ListGroup>
                                      {beerDetail &&  beerDetail?.ingredients && Object.keys(beerDetail.ingredients).map((item)=> (
                                          <ListGroup.Item key={item}>
                                              <h6>{item}</h6>
                                              <ListGroup>
                                                  {item === 'malt' && beerDetail && beerDetail.ingredients && beerDetail.ingredients.malt.map((ingredient: IngredientsItem) => (
                                                      <ListGroup.Item key={ingredient.name}>
                                                          {ingredient.name} ------ {ingredient.amount.value} {ingredient.amount.unit}
                                                      </ListGroup.Item>
                                                  ))}
                                                  {item === 'hops' && beerDetail && beerDetail.ingredients && beerDetail.ingredients.hops.map((ingredient: IngredientsItem, index) => (
                                                      <ListGroup.Item key={index}>
                                                          {ingredient.name} ------ {ingredient.amount.value} {ingredient.amount.unit}
                                                      </ListGroup.Item>
                                                  ))}
                                                  {item === 'yeast' && beerDetail && beerDetail.ingredients && beerDetail.ingredients.yeast}

                                              </ListGroup>
                                          </ListGroup.Item>
                                          ))}
                                  </ListGroup>
                              </ListGroup.Item>
                          </ListGroup>
                      </Card.Body>

                  </Card>

              </Col>
          </Row>
      </>

  )
}

export default BeerDetail;
