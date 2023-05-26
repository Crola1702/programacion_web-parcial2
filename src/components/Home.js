import { useEffect, useState } from "react";
import { Container, Table, Col, Row } from "react-bootstrap";
import CoffeeDetailed from "./CoffeeDetailed";


function Home() {

    const [coffee, setCoffee] = useState([])
    const [focusedCoffee, setFocusedCoffee] = useState(undefined)

    useEffect(() => {
        fetch("http://localhost:3001/cafes")
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setCoffee(data);
            });
    }, []);

    function getFocusedCoffe() {
        if (focusedCoffee) {
            fetch(`http://localhost:3001/cafes/${focusedCoffee.id}`)
                .then((res) => res.json())
                .then((data) => {
                    setFocusedCoffee(data);
                });

            return (
                <CoffeeDetailed coffee={focusedCoffee} />
            )
        }
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
                                <tr key={coffee.id} onClick={() => setFocusedCoffee(coffee)}>
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
                    {getFocusedCoffe()}
                </Col>
            </Row>
        </Container>
    )
}

export default Home;