import { FC, useEffect } from 'react';
import {Row,Col} from 'react-bootstrap';
import { useAppDispatch } from "../../store/Hooks";
import { useParams } from "react-router-dom";
import { getBeerByBeerId } from "../../actions/BeerActions";
import BeerDetail from "./BeerDetail";

const Beer:FC = () => {
    const dispatch = useAppDispatch();
    const {id} = useParams();

    useEffect(() => {
        if(id) {
            dispatch(getBeerByBeerId(id));
        }
    },[id])

    return (
        <Row>
            <Col>
                <BeerDetail />
            </Col>
        </Row>

    )
}

export default Beer;
