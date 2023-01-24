import { FC } from 'react';
import { Row, Col } from "react-bootstrap";
import {useAppSelector } from "../../store/Hooks";
import styles from './BeersListView.module.css';
import BeerItemView from '../Beer/BeerItemView';


const BeersListView:FC = () => {
 const { beers } = useAppSelector(state => state.beers);
    return (
        <>
            <Row className={styles.beers_list}>
                {beers && beers.length > 0 && beers.map(beer =>(
                    <Col xl={3} lg= {4} sm={1} key={beer.id} className={styles.beer_item}>
                        <BeerItemView beerItem={beer} />
                    </Col>

                ))}

            </Row>

        </>

    )
}

export default BeersListView;
