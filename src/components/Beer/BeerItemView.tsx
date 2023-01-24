import React, { FC } from 'react';
import { Card,ListGroup } from 'react-bootstrap';
import { Beer } from '../../models/Beer';
import styles from './BeerItemView.module.css';
import {Link } from 'react-router-dom';

const BeerItemView: FC<{ beerItem: Beer }> = ({ beerItem }) => {
    return (
        <Card className={styles.beer_item}>
            <Card.Img  className={styles.beer_image} variant="top" src={beerItem.image_url} />
            <Card.Body>
                <Card.Title className={styles.beer_name}>{beerItem.name}</Card.Title>
                <Card.Text className={styles.beer_description}>
                    {beerItem.description}
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item className={styles.beer_tagline}>{beerItem.tagline}</ListGroup.Item>
                <ListGroup.Item>ABV: {beerItem.abv}</ListGroup.Item>
                <ListGroup.Item>IBU: {beerItem.ibu}</ListGroup.Item>
                <ListGroup.Item>VOLUME: {beerItem.volume.value} {beerItem.volume.unit}</ListGroup.Item>
                <ListGroup.Item>FIRST BREWED: {beerItem.first_brewed}</ListGroup.Item>
            </ListGroup>
            <Card.Body>
                <Link to={`/beer/${beerItem.id}`}>Beer Detail</Link>
            </Card.Body>

        </Card>
    )
}

export default BeerItemView;
