import { useEffect, useState } from "react";
import { Container, Table, Col, Row } from "react-bootstrap";
import CoffeeDetailed from "./CoffeeDetailed";
import { getData } from "../utils/requests";

function Home() {

    const [coffee, setCoffee] = useState([])
    const [focusedCoffee, setFocusedCoffee] = useState(undefined)

    useEffect(() => {
        getData(setCoffee, "cafes");
    }, []);

    function handleFocusedCoffee(coffee) {
        getData(setFocusedCoffee, `cafes/${coffee.id}`);
    }
        
    return (
        <Container fluid className="mx-auto">
            <Row>
                <Col md={8}>
                        <Table>
                        <thead className="table-dark">
                            <tr>
                                <th>#</th>
                                <th>Nombre</th>
                                <th>Tipo</th>
                                <th>Región</th>
                            </tr>
                        </thead>
                        <tbody>
                            {coffee.map((coffee) => (
                                <tr key={coffee.id} onClick={() => handleFocusedCoffee(coffee)}>
                                    <td>{coffee.id}</td>
                                    <td>{coffee.nombre}</td>
                                    <td>{coffee.tipo}</td>
                                    <td>{coffee.region}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Col>
                <Col md={4}>
                    <CoffeeDetailed coffee={focusedCoffee} />
                </Col>
            </Row>
        </Container>
    )
}

export default Home;