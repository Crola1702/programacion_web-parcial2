import { Card } from "react-bootstrap";
import { FormattedMessage, FormattedDate, FormattedNumber } from "react-intl";

function CoffeeDetailed ({ coffee }) {
    if (!coffee) {
        return null
    }

    return (
        <Card className="d-flex justify-content-center red-bg">
            <Card.Body className="mx-2">
                <Card.Title className="d-flex justify-content-center">
                    {coffee.nombre}
                </Card.Title>
                <Card.Subtitle className="d-flex justify-content-center">
                    <FormattedDate value={coffee.fecha_cultivo}
                        year="numeric"
                        month="long"
                        day="numeric"
                     />
                </Card.Subtitle>
                <Card.Img className="p-5" src={coffee.imagen} />
                <Card.Subtitle className="d-flex justify-content-center">
                    <FormattedMessage id="Notes" />
                </Card.Subtitle>
                <Card.Text className="d-flex justify-content-center">
                    {coffee.notas}
                </Card.Text>

                <Card.Title className="d-flex justify-content-center">
                    <FormattedMessage id="GrownMessage" />
                </Card.Title>
                <Card.Title className="d-flex justify-content-center">
                    <FormattedNumber value={coffee.altura}/> {" "} <FormattedMessage id="MetersUnit" />
                </Card.Title>
            </Card.Body>
        </Card>
    )
}

export default CoffeeDetailed;