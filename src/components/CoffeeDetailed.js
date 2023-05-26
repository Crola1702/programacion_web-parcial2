import { Card } from "react-bootstrap";

function CoffeeDetailed ({ coffee }) {
    // console.log(coffee)
    return (
        <Card className="d-flex justify-content-center red-bg">
            <Card.Body className="mx-2">
                <Card.Title className="d-flex justify-content-center">
                    {coffee.nombre}
                </Card.Title>
                <Card.Subtitle className="d-flex justify-content-center">
                    {coffee.fecha_cultivo}
                </Card.Subtitle>
                <Card.Img className="p-5" src={coffee.imagen} />
                <Card.Subtitle className="d-flex justify-content-center">
                    Notas
                </Card.Subtitle>
                <Card.Text className="d-flex justify-content-center">
                    {coffee.notas}
                </Card.Text>

                <Card.Title className="d-flex justify-content-center">
                    Cultivado a una altura de
                </Card.Title>
                <Card.Title className="d-flex justify-content-center">
                    {coffee.altura} msnm
                </Card.Title>
            </Card.Body>
        </Card>
    )
}

export default CoffeeDetailed;